// RNA Condensation Data Browser — Main application
// ============================================================

const COLORS = {
  '30C': '#7F7F7F',
  '42C': '#FD8D3C',
  '46C': '#D94801'
};
const TEMP_LABELS = { '30C': '30°C', '42C': '42°C', '46C': '46°C' };
const MARGIN = { top: 30, right: 30, bottom: 55, left: 65 };

// Data
let psupData = [], esedData = [], windowCurves = {}, geneList = [], geneMap = {};

// Highlight entries: {id, type:'gene'|'group', name, genes:[], orf_set:Set, enabled:bool}
let highlights = [];
let nextId = 1;

// Per-panel axis overrides (null = auto)
const panelLimits = {
  psup: { xmin: null, xmax: null, ymin: 0, ymax: 1 },
  esed: { xmin: null, xmax: null, ymin: null, ymax: null }
};

// ============================================================
// Data loading
// ============================================================
async function loadData() {
  const [psup, esed, curves, genes] = await Promise.all([
    d3.json('data/psup_data.json'),
    d3.json('data/esed_data.json'),
    d3.json('data/window_curves.json'),
    d3.json('data/gene_list.json')
  ]);
  psupData = psup;
  esedData = esed;
  windowCurves = curves;
  geneList = genes;
  geneMap = {};
  genes.forEach(g => { if (g.gene) geneMap[g.gene.toUpperCase()] = g; });
}

// ============================================================
// Highlight management
// ============================================================
function parseGeneInput(text) {
  text = text.trim();
  const groupMatch = text.match(/^(.+?)=\((.+)\)$/);
  if (groupMatch) {
    const name = groupMatch[1].trim();
    const genes = groupMatch[2].split(',').map(g => g.trim()).filter(Boolean);
    return { type: 'group', name, genes };
  }
  return { type: 'gene', name: text, genes: [text] };
}

function resolveORFs(geneNames) {
  const orfs = new Set();
  geneNames.forEach(g => {
    const entry = geneMap[g.toUpperCase()];
    if (entry) orfs.add(entry.orf);
  });
  return orfs;
}

function addHighlight(parsed) {
  const orf_set = resolveORFs(parsed.genes);
  if (orf_set.size === 0) return false;
  if (highlights.find(h => h.name === parsed.name && h.type === parsed.type)) return false;
  highlights.push({ id: nextId++, ...parsed, orf_set, enabled: true });
  return true;
}

function removeHighlight(id) {
  highlights = highlights.filter(h => h.id !== id);
}

function toggleHighlight(id) {
  const h = highlights.find(h => h.id === id);
  if (h) h.enabled = !h.enabled;
}

function getActiveHighlights() {
  return highlights.filter(h => h.enabled);
}

function getHighlightedORFs() {
  const all = new Set();
  getActiveHighlights().forEach(h => h.orf_set.forEach(o => all.add(o)));
  return all;
}

// Label map: orf -> display label
// Individual gene → ALL-UPPERCASE; group → user-supplied case
function getLabelMap() {
  const labelMap = {};
  getActiveHighlights().forEach(h => {
    if (h.type === 'gene') {
      h.orf_set.forEach(orf => { labelMap[orf] = h.name.toUpperCase(); });
    } else {
      h.orf_set.forEach(orf => { labelMap[orf] = h.name; });
    }
  });
  return labelMap;
}

// ============================================================
// Gene list UI (scrolling list with checkboxes)
// ============================================================
function renderGeneList() {
  const container = document.getElementById('gene-list-container');
  if (highlights.length === 0) {
    container.innerHTML = '<div class="gene-list-empty">No genes selected. Type above or choose a preset.</div>';
    return;
  }
  container.innerHTML = '';
  highlights.forEach(h => {
    const row = document.createElement('div');
    row.className = 'gene-entry' + (h.type === 'group' ? ' is-group' : '') + (h.enabled ? '' : ' is-disabled');

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = h.enabled;
    cb.addEventListener('change', () => {
      toggleHighlight(h.id);
      renderGeneList();
      renderAll();
    });

    const label = document.createElement('span');
    label.className = 'gene-entry-label';
    if (h.type === 'group') {
      label.innerHTML = `${h.name} <span class="group-genes">(${h.genes.join(', ')})</span>`;
    } else {
      label.textContent = h.name.toUpperCase();
    }
    label.title = h.type === 'group' ? `${h.name}: ${h.genes.join(', ')}` : h.name.toUpperCase();

    const rm = document.createElement('span');
    rm.className = 'gene-entry-remove';
    rm.innerHTML = '&times;';
    rm.title = 'Remove';
    rm.addEventListener('click', () => {
      removeHighlight(h.id);
      renderGeneList();
      renderAll();
    });

    row.appendChild(cb);
    row.appendChild(label);
    row.appendChild(rm);
    container.appendChild(row);
  });
}

// ============================================================
// Statistics helpers for group summaries
// ============================================================
function median(arr) {
  if (arr.length === 0) return NaN;
  const s = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

// Median absolute deviation
function mad(arr) {
  const med = median(arr);
  const devs = arr.map(v => Math.abs(v - med));
  return median(devs);
}

// ============================================================
// Plotting: pSup vs Length
// ============================================================
function getPsupScales(plotW, plotH) {
  const lim = panelLimits.psup;
  const xExtent = d3.extent(psupData, d => d.length);
  const xMin = lim.xmin != null ? lim.xmin : Math.max(100, xExtent[0] * 0.9);
  const xMax = lim.xmax != null ? lim.xmax : xExtent[1] * 1.1;
  const yMin = lim.ymin != null ? lim.ymin : 0;
  const yMax = lim.ymax != null ? lim.ymax : 1;
  return {
    xScale: d3.scaleLog().domain([xMin, xMax]).range([0, plotW]),
    yScale: d3.scaleLinear().domain([yMin, yMax]).range([plotH, 0])
  };
}

function renderPsupPlot() {
  const container = document.getElementById('psup-plot');
  container.innerHTML = '';
  const W = container.clientWidth;
  const H = container.clientHeight;
  if (W < 100 || H < 100 || psupData.length === 0) return;
  const plotW = W - MARGIN.left - MARGIN.right;
  const plotH = H - MARGIN.top - MARGIN.bottom;
  const { xScale, yScale } = getPsupScales(plotW, plotH);

  // Canvas
  const canvas = document.createElement('canvas');
  canvas.width = W * devicePixelRatio;
  canvas.height = H * devicePixelRatio;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  ctx.scale(devicePixelRatio, devicePixelRatio);

  const highlightedORFs = getHighlightedORFs();

  ['30C', '42C', '46C'].forEach(temp => {
    ctx.fillStyle = COLORS[temp];
    ctx.globalAlpha = 0.15;
    psupData.filter(d => d.temp === temp).forEach(d => {
      if (highlightedORFs.has(d.orf)) return;
      const x = MARGIN.left + xScale(d.length);
      const y = MARGIN.top + yScale(d.pSup);
      if (x >= MARGIN.left && x <= W - MARGIN.right && y >= MARGIN.top && y <= H - MARGIN.bottom) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  });
  ctx.globalAlpha = 1.0;

  // SVG overlay
  const svg = d3.select(container).append('svg').attr('width', W).attr('height', H);
  const g = svg.append('g').attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

  // Clip path
  g.append('clipPath').attr('id', 'clip-psup')
    .append('rect').attr('width', plotW).attr('height', plotH);

  g.append('g').attr('transform', `translate(0,${plotH})`).call(d3.axisBottom(xScale).ticks(6, '~s'));
  g.append('g').call(d3.axisLeft(yScale).ticks(5));
  g.append('text').attr('x', plotW / 2).attr('y', plotH + 42)
    .attr('text-anchor', 'middle').attr('font-size', '12px').text('mRNA length (nucleotides)');
  g.append('text').attr('transform', 'rotate(-90)').attr('x', -plotH / 2).attr('y', -48)
    .attr('text-anchor', 'middle').attr('font-size', '12px').text('Proportion in supernatant (pSup)');

  // Window-mean curves
  const clipped = g.append('g').attr('clip-path', 'url(#clip-psup)');
  ['30C', '42C', '46C'].forEach(temp => {
    const curve = windowCurves[temp];
    if (!curve) return;
    const line = d3.line()
      .x(d => xScale(d.length)).y(d => yScale(d.pSupWindow))
      .defined(d => d.length >= xScale.domain()[0] && d.length <= xScale.domain()[1]);
    clipped.append('path').datum(curve).attr('d', line)
      .attr('fill', 'none').attr('stroke', '#333').attr('stroke-width', 1.5).attr('stroke-opacity', 0.5);
  });

  // Legend
  const legend = g.append('g').attr('transform', `translate(${plotW - 150}, 5)`);
  ['30C', '42C', '46C'].forEach((temp, i) => {
    const lg = legend.append('g').attr('transform', `translate(0, ${i * 18})`);
    lg.append('circle').attr('r', 5).attr('fill', COLORS[temp]);
    lg.append('text').attr('x', 10).attr('y', 4).attr('font-size', '11px').text(TEMP_LABELS[temp]);
  });

  // Highlighted points & group summaries
  const labelMap = getLabelMap();
  const actives = getActiveHighlights();
  const hlPoints = [];

  ['30C', '42C', '46C'].forEach(temp => {
    psupData.filter(d => d.temp === temp && highlightedORFs.has(d.orf)).forEach(d => {
      const x = xScale(d.length), y = yScale(d.pSup);
      if (x >= 0 && x <= plotW && y >= 0 && y <= plotH)
        hlPoints.push({ ...d, x, y, color: COLORS[temp] });
    });
  });

  // Individual gene points
  const geneHighlights = actives.filter(h => h.type === 'gene');
  const geneORFs = new Set();
  geneHighlights.forEach(h => h.orf_set.forEach(o => geneORFs.add(o)));

  clipped.selectAll('.highlight-point')
    .data(hlPoints.filter(d => geneORFs.has(d.orf)))
    .join('circle').attr('class', 'highlight-point')
    .attr('cx', d => d.x).attr('cy', d => d.y).attr('r', 4.5)
    .attr('fill', d => d.color).attr('stroke', '#333').attr('stroke-width', 1)
    .on('mouseenter', (event, d) => showTooltip(event, d))
    .on('mouseleave', hideTooltip);

  // Individual gene labels at 42C position
  const labelledORFs = new Set();
  const geneLabelData = [];
  hlPoints.filter(d => geneORFs.has(d.orf)).forEach(d => {
    if (labelledORFs.has(d.orf)) return;
    const best = hlPoints.find(p => p.orf === d.orf && p.temp === '42C')
      || hlPoints.find(p => p.orf === d.orf && p.temp === '46C') || d;
    labelledORFs.add(d.orf);
    geneLabelData.push({ x: best.x, y: best.y, label: labelMap[d.orf] || d.gene });
  });
  clipped.selectAll('.gene-label')
    .data(geneLabelData).join('text').attr('class', 'gene-label')
    .attr('x', d => d.x + 6).attr('y', d => d.y - 6)
    .attr('font-size', '11px').attr('font-weight', '600').attr('fill', '#333')
    .attr('stroke', '#fff').attr('stroke-width', 3).attr('paint-order', 'stroke')
    .text(d => d.label);

  // Group summaries: median crosshair + MAD bars per temperature
  const groupHighlights = actives.filter(h => h.type === 'group');
  groupHighlights.forEach(h => {
    ['30C', '42C', '46C'].forEach(temp => {
      const pts = hlPoints.filter(d => h.orf_set.has(d.orf) && d.temp === temp);
      if (pts.length < 2) {
        // Just draw the single point if only 1
        pts.forEach(d => {
          clipped.append('circle').attr('class', 'highlight-point')
            .attr('cx', d.x).attr('cy', d.y).attr('r', 4.5)
            .attr('fill', d.color).attr('stroke', '#333').attr('stroke-width', 1)
            .on('mouseenter', ev => showTooltip(ev, d))
            .on('mouseleave', hideTooltip);
        });
        return;
      }
      const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
      const medX = median(xs), medY = median(ys);
      const madX = mad(xs), madY = mad(ys);

      // Draw all individual points (smaller, semi-transparent)
      pts.forEach(d => {
        clipped.append('circle')
          .attr('cx', d.x).attr('cy', d.y).attr('r', 3)
          .attr('fill', d.color).attr('fill-opacity', 0.6)
          .attr('stroke', '#333').attr('stroke-width', 0.5);
      });

      // MAD crosshair lines
      const col = COLORS[temp];
      // Horizontal MAD bar
      clipped.append('line')
        .attr('x1', medX - madX).attr('x2', medX + madX)
        .attr('y1', medY).attr('y2', medY)
        .attr('stroke', col).attr('stroke-width', 2).attr('stroke-opacity', 0.85);
      // Vertical MAD bar
      clipped.append('line')
        .attr('x1', medX).attr('x2', medX)
        .attr('y1', medY - madY).attr('y2', medY + madY)
        .attr('stroke', col).attr('stroke-width', 2).attr('stroke-opacity', 0.85);
      // Median dot
      clipped.append('circle').attr('class', 'group-crosshair')
        .attr('cx', medX).attr('cy', medY).attr('r', 5)
        .attr('fill', col).attr('stroke', '#333').attr('stroke-width', 1.2)
        .on('mouseenter', (event) => {
          showTooltipText(event,
            `${h.name} (${TEMP_LABELS[temp]})\n` +
            `n = ${pts.length}\n` +
            `median pSup: ${invScaleY(medY, yScale).toFixed(3)}\n` +
            `MAD pSup: ${madFromPixels(madY, yScale).toFixed(3)}\n` +
            `median length: ${Math.round(invScaleX(medX, xScale))} nt`);
        })
        .on('mouseleave', hideTooltip);
    });

    // Group label at 42C median position
    const pts42 = hlPoints.filter(d => h.orf_set.has(d.orf) && d.temp === '42C');
    const pts46 = hlPoints.filter(d => h.orf_set.has(d.orf) && d.temp === '46C');
    const ptsLabel = pts42.length ? pts42 : pts46.length ? pts46 : hlPoints.filter(d => h.orf_set.has(d.orf));
    if (ptsLabel.length > 0) {
      const mx = median(ptsLabel.map(p => p.x));
      const my = median(ptsLabel.map(p => p.y));
      clipped.append('text')
        .attr('x', mx + 8).attr('y', my - 8)
        .attr('font-size', '11px').attr('font-weight', '600').attr('fill', '#333')
        .attr('stroke', '#fff').attr('stroke-width', 3).attr('paint-order', 'stroke')
        .text(h.name);
    }
  });
}

// Helpers to invert scale for tooltip display
function invScaleY(py, yScale) { return yScale.invert(py); }
function invScaleX(px, xScale) { return xScale.invert(px); }
function madFromPixels(madPx, yScale) {
  // Convert pixel MAD back to data units
  const y0 = yScale.invert(0);
  const y1 = yScale.invert(madPx);
  return Math.abs(y0 - y1);
}

// ============================================================
// Plotting: eSed vs Transcript Induction
// ============================================================
function getEsedData() {
  const selectedTemp = document.querySelector('input[name="esed-temp"]:checked').value;
  const data = esedData.filter(d => d.temp === selectedTemp);
  return {
    selectedTemp,
    dataWithLog2FC: data
      .map(d => ({ ...d, log2fc: d.fc > 0 ? Math.log2(d.fc) : null }))
      .filter(d => d.log2fc != null && isFinite(d.log2fc))
  };
}

function getEsedScales(plotW, plotH, dataWithLog2FC) {
  const lim = panelLimits.esed;
  const xExt = d3.extent(dataWithLog2FC, d => d.log2fc);
  const xPad = (xExt[1] - xExt[0]) * 0.05;
  const yExt = d3.extent(dataWithLog2FC, d => d.eSed);
  const yPad = (yExt[1] - yExt[0]) * 0.05;
  return {
    xScale: d3.scaleLinear()
      .domain([lim.xmin != null ? lim.xmin : xExt[0] - xPad, lim.xmax != null ? lim.xmax : xExt[1] + xPad])
      .range([0, plotW]),
    yScale: d3.scaleLinear()
      .domain([lim.ymin != null ? lim.ymin : yExt[0] - yPad, lim.ymax != null ? lim.ymax : yExt[1] + yPad])
      .range([plotH, 0])
  };
}

function renderEsedPlot() {
  const container = document.getElementById('esed-plot');
  container.innerHTML = '';
  const W = container.clientWidth, H = container.clientHeight;
  if (W < 100 || H < 100 || esedData.length === 0) return;
  const plotW = W - MARGIN.left - MARGIN.right;
  const plotH = H - MARGIN.top - MARGIN.bottom;
  const { selectedTemp, dataWithLog2FC } = getEsedData();
  const { xScale, yScale } = getEsedScales(plotW, plotH, dataWithLog2FC);

  const canvas = document.createElement('canvas');
  canvas.width = W * devicePixelRatio; canvas.height = H * devicePixelRatio;
  canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  ctx.scale(devicePixelRatio, devicePixelRatio);

  const highlightedORFs = getHighlightedORFs();
  ctx.fillStyle = '#888'; ctx.globalAlpha = 0.2;
  dataWithLog2FC.forEach(d => {
    if (highlightedORFs.has(d.orf)) return;
    const x = MARGIN.left + xScale(d.log2fc), y = MARGIN.top + yScale(d.eSed);
    if (x >= MARGIN.left && x <= W - MARGIN.right && y >= MARGIN.top && y <= H - MARGIN.bottom) {
      ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2); ctx.fill();
    }
  });
  ctx.globalAlpha = 1.0;

  const svg = d3.select(container).append('svg').attr('width', W).attr('height', H);
  const g = svg.append('g').attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);
  g.append('clipPath').attr('id', 'clip-esed')
    .append('rect').attr('width', plotW).attr('height', plotH);

  g.append('g').attr('transform', `translate(0,${plotH})`).call(d3.axisBottom(xScale).ticks(8));
  g.append('g').call(d3.axisLeft(yScale).ticks(8));

  // Zero lines
  if (xScale.domain()[0] < 0 && xScale.domain()[1] > 0)
    g.append('line').attr('x1', xScale(0)).attr('x2', xScale(0)).attr('y1', 0).attr('y2', plotH)
      .attr('stroke', '#ccc').attr('stroke-dasharray', '3,3');
  if (yScale.domain()[0] < 0 && yScale.domain()[1] > 0)
    g.append('line').attr('x1', 0).attr('x2', plotW).attr('y1', yScale(0)).attr('y2', yScale(0))
      .attr('stroke', '#ccc').attr('stroke-dasharray', '3,3');

  g.append('text').attr('x', plotW / 2).attr('y', plotH + 42).attr('text-anchor', 'middle').attr('font-size', '12px')
    .text(`log\u2082(fold-change ${TEMP_LABELS[selectedTemp]} vs 30°C)`);
  g.append('text').attr('transform', 'rotate(-90)').attr('x', -plotH / 2).attr('y', -48)
    .attr('text-anchor', 'middle').attr('font-size', '12px').text('Escape from sedimentation, eSed (SDs)');
  g.append('text').attr('x', plotW - 5).attr('y', 15).attr('text-anchor', 'end')
    .attr('font-size', '13px').attr('font-weight', '600').attr('fill', COLORS[selectedTemp])
    .text(`${TEMP_LABELS[selectedTemp]} vs 30°C`);

  const clipped = g.append('g').attr('clip-path', 'url(#clip-esed)');
  const labelMap = getLabelMap();
  const actives = getActiveHighlights();

  const allHL = dataWithLog2FC
    .filter(d => highlightedORFs.has(d.orf))
    .map(d => ({ ...d, x: xScale(d.log2fc), y: yScale(d.eSed) }))
    .filter(d => d.x >= 0 && d.x <= plotW && d.y >= 0 && d.y <= plotH);

  // Individual gene entries
  const geneORFs = new Set();
  actives.filter(h => h.type === 'gene').forEach(h => h.orf_set.forEach(o => geneORFs.add(o)));

  clipped.selectAll('.highlight-point')
    .data(allHL.filter(d => geneORFs.has(d.orf)))
    .join('circle').attr('class', 'highlight-point')
    .attr('cx', d => d.x).attr('cy', d => d.y).attr('r', 4.5)
    .attr('fill', COLORS[selectedTemp]).attr('stroke', '#333').attr('stroke-width', 1)
    .on('mouseenter', (event, d) => showTooltip(event, d)).on('mouseleave', hideTooltip);

  // Individual gene labels
  const seen = new Set();
  allHL.filter(d => geneORFs.has(d.orf)).forEach(d => {
    if (seen.has(d.orf)) return;
    seen.add(d.orf);
    clipped.append('text').attr('x', d.x + 6).attr('y', d.y - 6)
      .attr('font-size', '11px').attr('font-weight', '600').attr('fill', '#333')
      .attr('stroke', '#fff').attr('stroke-width', 3).attr('paint-order', 'stroke')
      .text(labelMap[d.orf] || d.gene);
  });

  // Group summaries
  actives.filter(h => h.type === 'group').forEach(h => {
    const pts = allHL.filter(d => h.orf_set.has(d.orf));
    if (pts.length === 0) return;

    // Draw individual points (smaller)
    pts.forEach(d => {
      clipped.append('circle')
        .attr('cx', d.x).attr('cy', d.y).attr('r', 3)
        .attr('fill', COLORS[selectedTemp]).attr('fill-opacity', 0.6)
        .attr('stroke', '#333').attr('stroke-width', 0.5);
    });

    if (pts.length >= 2) {
      const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
      const medX = median(xs), medY = median(ys);
      const madX = mad(xs), madY = mad(ys);

      clipped.append('line')
        .attr('x1', medX - madX).attr('x2', medX + madX).attr('y1', medY).attr('y2', medY)
        .attr('stroke', COLORS[selectedTemp]).attr('stroke-width', 2).attr('stroke-opacity', 0.85);
      clipped.append('line')
        .attr('x1', medX).attr('x2', medX).attr('y1', medY - madY).attr('y2', medY + madY)
        .attr('stroke', COLORS[selectedTemp]).attr('stroke-width', 2).attr('stroke-opacity', 0.85);
      clipped.append('circle').attr('class', 'group-crosshair')
        .attr('cx', medX).attr('cy', medY).attr('r', 5)
        .attr('fill', COLORS[selectedTemp]).attr('stroke', '#333').attr('stroke-width', 1.2)
        .on('mouseenter', (event) => {
          showTooltipText(event,
            `${h.name} (${TEMP_LABELS[selectedTemp]})\n` +
            `n = ${pts.length}\n` +
            `median eSed: ${yScale.invert(medY).toFixed(3)} SDs\n` +
            `MAD eSed: ${Math.abs(yScale.invert(0) - yScale.invert(madY)).toFixed(3)} SDs\n` +
            `median log\u2082FC: ${xScale.invert(medX).toFixed(2)}`);
        })
        .on('mouseleave', hideTooltip);

      clipped.append('text')
        .attr('x', medX + 8).attr('y', medY - 8)
        .attr('font-size', '11px').attr('font-weight', '600').attr('fill', '#333')
        .attr('stroke', '#fff').attr('stroke-width', 3).attr('paint-order', 'stroke')
        .text(h.name);
    } else {
      // Single point in group — label it
      const d = pts[0];
      clipped.append('text')
        .attr('x', d.x + 6).attr('y', d.y - 6)
        .attr('font-size', '11px').attr('font-weight', '600').attr('fill', '#333')
        .attr('stroke', '#fff').attr('stroke-width', 3).attr('paint-order', 'stroke')
        .text(h.name);
    }
  });
}

// ============================================================
// Tooltip
// ============================================================
function showTooltip(event, d) {
  let text = `${(d.gene || d.orf).toUpperCase()} (${d.orf})\n`;
  if (d.pSup !== undefined) {
    text += `pSup: ${d.pSup.toFixed(3)}\nLength: ${d.length} nt\nTemp: ${TEMP_LABELS[d.temp]}`;
  } else if (d.eSed !== undefined) {
    text += `eSed: ${d.eSed.toFixed(3)} SDs\nlog\u2082FC: ${d.log2fc.toFixed(2)}\nFC: ${d.fc.toFixed(2)}`;
  }
  showTooltipText(event, text);
}

function showTooltipText(event, text) {
  const tip = document.getElementById('tooltip');
  tip.textContent = text;
  tip.style.display = 'block';
  tip.style.left = (event.clientX + 12) + 'px';
  tip.style.top = (event.clientY - 10) + 'px';
}

function hideTooltip() {
  document.getElementById('tooltip').style.display = 'none';
}

// ============================================================
// Gene input autocomplete
// ============================================================
function setupAutocomplete() {
  const input = document.getElementById('gene-input');
  const sugBox = document.getElementById('gene-suggestions');
  let activeIdx = -1, suggestions = [];

  input.addEventListener('input', () => {
    const val = input.value.trim().toUpperCase();
    if (val.length < 1 || val.includes('(')) { sugBox.style.display = 'none'; return; }
    const lastPart = val.split(/[,=(]/).pop().trim();
    if (lastPart.length < 1) { sugBox.style.display = 'none'; return; }
    suggestions = geneList.filter(g => g.gene && g.gene.toUpperCase().startsWith(lastPart)).slice(0, 12);
    if (!suggestions.length) { sugBox.style.display = 'none'; return; }
    activeIdx = -1;
    renderSuggestions();
    sugBox.style.display = 'block';
  });

  input.addEventListener('keydown', (e) => {
    if (sugBox.style.display === 'none') {
      if (e.key === 'Enter') { e.preventDefault(); addFromInput(); }
      return;
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); activeIdx = Math.min(activeIdx + 1, suggestions.length - 1); renderSuggestions(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); renderSuggestions(); }
    else if (e.key === 'Enter') { e.preventDefault(); activeIdx >= 0 ? applySuggestion(suggestions[activeIdx].gene) : addFromInput(); }
    else if (e.key === 'Escape') sugBox.style.display = 'none';
  });

  function renderSuggestions() {
    sugBox.innerHTML = '';
    suggestions.forEach((s, i) => {
      const div = document.createElement('div');
      div.className = 'sug-item' + (i === activeIdx ? ' active' : '');
      div.textContent = `${s.gene} (${s.orf})`;
      div.addEventListener('click', () => applySuggestion(s.gene));
      sugBox.appendChild(div);
    });
  }

  function applySuggestion(gene) {
    const parts = input.value.split(/([,=(])/);
    parts[parts.length - 1] = gene;
    input.value = parts.join('');
    sugBox.style.display = 'none';
    input.focus();
  }

  document.addEventListener('click', (e) => {
    if (!sugBox.contains(e.target) && e.target !== input) sugBox.style.display = 'none';
  });
}

function addFromInput() {
  const input = document.getElementById('gene-input');
  const text = input.value.trim();
  if (!text) return;
  const parsed = parseGeneInput(text);
  if (addHighlight(parsed)) {
    input.value = '';
    renderGeneList();
    renderAll();
  }
  document.getElementById('gene-suggestions').style.display = 'none';
}

// ============================================================
// Per-panel export
// ============================================================
function exportPanel(panel, format) {
  const W = parseInt(document.getElementById(`${panel}-export-w`).value) || 700;
  const H = parseInt(document.getElementById(`${panel}-export-h`).value) || 500;
  const plotW = W - MARGIN.left - MARGIN.right;
  const plotH = H - MARGIN.top - MARGIN.bottom;

  const svgNS = 'http://www.w3.org/2000/svg';
  const exportSvg = document.createElementNS(svgNS, 'svg');
  exportSvg.setAttribute('xmlns', svgNS);
  exportSvg.setAttribute('width', W);
  exportSvg.setAttribute('height', H);
  exportSvg.setAttribute('viewBox', `0 0 ${W} ${H}`);

  const bg = document.createElementNS(svgNS, 'rect');
  bg.setAttribute('width', W); bg.setAttribute('height', H); bg.setAttribute('fill', 'white');
  exportSvg.appendChild(bg);

  const gEl = document.createElementNS(svgNS, 'g');
  exportSvg.appendChild(gEl);

  if (panel === 'psup') renderPsupPlotSVG(gEl, W, H);
  else renderEsedPlotSVG(gEl, W, H);

  const svgString = new XMLSerializer().serializeToString(exportSvg);
  const filename = panel === 'psup' ? 'psup_vs_length' : 'esed_vs_induction';

  if (format === 'svg') {
    downloadBlob(new Blob([svgString], { type: 'image/svg+xml' }), `${filename}.svg`);
  } else if (format === 'png') {
    svgToPng(svgString, W, H, 2).then(blob => downloadBlob(blob, `${filename}.png`));
  } else if (format === 'pdf') {
    svgToPng(svgString, W, H, 3).then(blob => {
      downloadBlob(blob, `${filename}_hires.png`);
    });
  }
}

// ============================================================
// SVG renderers for export (pure SVG, no canvas)
// ============================================================
function renderPsupPlotSVG(gEl, W, H) {
  const plotW = W - MARGIN.left - MARGIN.right;
  const plotH = H - MARGIN.top - MARGIN.bottom;
  const ns = 'http://www.w3.org/2000/svg';
  const { xScale, yScale } = getPsupScales(plotW, plotH);

  const inner = document.createElementNS(ns, 'g');
  inner.setAttribute('transform', `translate(${MARGIN.left},${MARGIN.top})`);
  gEl.appendChild(inner);

  // Clip
  const defs = document.createElementNS(ns, 'defs');
  const cp = document.createElementNS(ns, 'clipPath');
  cp.setAttribute('id', 'clip-psup-export');
  const cr = document.createElementNS(ns, 'rect');
  cr.setAttribute('width', plotW); cr.setAttribute('height', plotH);
  cp.appendChild(cr); defs.appendChild(cp); inner.appendChild(defs);

  const clipped = document.createElementNS(ns, 'g');
  clipped.setAttribute('clip-path', 'url(#clip-psup-export)');
  inner.appendChild(clipped);

  const highlightedORFs = getHighlightedORFs();

  // Background points
  ['30C', '42C', '46C'].forEach(temp => {
    psupData.filter(d => d.temp === temp && !highlightedORFs.has(d.orf)).forEach(d => {
      const cx = xScale(d.length), cy = yScale(d.pSup);
      if (cx >= 0 && cx <= plotW && cy >= 0 && cy <= plotH) {
        const c = document.createElementNS(ns, 'circle');
        c.setAttribute('cx', cx); c.setAttribute('cy', cy); c.setAttribute('r', 1.5);
        c.setAttribute('fill', COLORS[temp]); c.setAttribute('opacity', 0.15);
        clipped.appendChild(c);
      }
    });
  });

  // Window curves
  ['30C', '42C', '46C'].forEach(temp => {
    const curve = windowCurves[temp];
    if (!curve) return;
    const pts = curve.filter(d => d.length >= xScale.domain()[0] && d.length <= xScale.domain()[1])
      .map(d => `${xScale(d.length)},${yScale(d.pSupWindow)}`);
    if (pts.length > 1) {
      const path = document.createElementNS(ns, 'polyline');
      path.setAttribute('points', pts.join(' '));
      path.setAttribute('fill', 'none'); path.setAttribute('stroke', '#333');
      path.setAttribute('stroke-width', '1.5'); path.setAttribute('stroke-opacity', '0.5');
      clipped.appendChild(path);
    }
  });

  // Highlighted points
  const actives = getActiveHighlights();
  const labelMap = getLabelMap();
  const hlPoints = [];
  ['30C', '42C', '46C'].forEach(temp => {
    psupData.filter(d => d.temp === temp && highlightedORFs.has(d.orf)).forEach(d => {
      const cx = xScale(d.length), cy = yScale(d.pSup);
      if (cx >= 0 && cx <= plotW && cy >= 0 && cy <= plotH)
        hlPoints.push({ ...d, x: cx, y: cy, color: COLORS[temp] });
    });
  });

  // Individual genes
  const geneORFs = new Set();
  actives.filter(h => h.type === 'gene').forEach(h => h.orf_set.forEach(o => geneORFs.add(o)));
  hlPoints.filter(d => geneORFs.has(d.orf)).forEach(d => {
    appendCircle(clipped, ns, d.x, d.y, 4, d.color, '#333', 0.8);
  });
  const labelledORFs = new Set();
  hlPoints.filter(d => geneORFs.has(d.orf)).forEach(d => {
    if (labelledORFs.has(d.orf)) return;
    labelledORFs.add(d.orf);
    const best = hlPoints.find(p => p.orf === d.orf && p.temp === '42C')
      || hlPoints.find(p => p.orf === d.orf && p.temp === '46C') || d;
    appendText(clipped, ns, best.x + 6, best.y - 6, labelMap[d.orf] || d.gene, '10px', '600');
  });

  // Groups
  actives.filter(h => h.type === 'group').forEach(h => {
    ['30C', '42C', '46C'].forEach(temp => {
      const pts = hlPoints.filter(d => h.orf_set.has(d.orf) && d.temp === temp);
      pts.forEach(d => appendCircle(clipped, ns, d.x, d.y, 2.5, d.color, '#333', 0.5, 0.6));
      if (pts.length >= 2) {
        const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
        const mx = median(xs), my = median(ys), madx = mad(xs), mady = mad(ys);
        appendLine(clipped, ns, mx - madx, my, mx + madx, my, COLORS[temp], 2, 0.85);
        appendLine(clipped, ns, mx, my - mady, mx, my + mady, COLORS[temp], 2, 0.85);
        appendCircle(clipped, ns, mx, my, 5, COLORS[temp], '#333', 1.2);
      }
    });
    const pts42 = hlPoints.filter(d => h.orf_set.has(d.orf) && d.temp === '42C');
    const ptsL = pts42.length ? pts42 : hlPoints.filter(d => h.orf_set.has(d.orf));
    if (ptsL.length) {
      const mx = median(ptsL.map(p => p.x)), my = median(ptsL.map(p => p.y));
      appendText(clipped, ns, mx + 8, my - 8, h.name, '10px', '600');
    }
  });

  addSVGAxes(inner, ns, xScale, yScale, plotW, plotH, 'mRNA length (nt)', 'pSup', true);
}

function renderEsedPlotSVG(gEl, W, H) {
  const plotW = W - MARGIN.left - MARGIN.right;
  const plotH = H - MARGIN.top - MARGIN.bottom;
  const ns = 'http://www.w3.org/2000/svg';
  const { selectedTemp, dataWithLog2FC } = getEsedData();
  const { xScale, yScale } = getEsedScales(plotW, plotH, dataWithLog2FC);

  const inner = document.createElementNS(ns, 'g');
  inner.setAttribute('transform', `translate(${MARGIN.left},${MARGIN.top})`);
  gEl.appendChild(inner);

  const defs = document.createElementNS(ns, 'defs');
  const cp = document.createElementNS(ns, 'clipPath');
  cp.setAttribute('id', 'clip-esed-export');
  const cr = document.createElementNS(ns, 'rect');
  cr.setAttribute('width', plotW); cr.setAttribute('height', plotH);
  cp.appendChild(cr); defs.appendChild(cp); inner.appendChild(defs);

  const clipped = document.createElementNS(ns, 'g');
  clipped.setAttribute('clip-path', 'url(#clip-esed-export)');
  inner.appendChild(clipped);

  const highlightedORFs = getHighlightedORFs();

  dataWithLog2FC.filter(d => !highlightedORFs.has(d.orf)).forEach(d => {
    const cx = xScale(d.log2fc), cy = yScale(d.eSed);
    if (cx >= 0 && cx <= plotW && cy >= 0 && cy <= plotH)
      appendCircle(clipped, ns, cx, cy, 1.5, '#888', null, null, 0.2);
  });

  const actives = getActiveHighlights();
  const labelMap = getLabelMap();
  const allHL = dataWithLog2FC.filter(d => highlightedORFs.has(d.orf))
    .map(d => ({ ...d, x: xScale(d.log2fc), y: yScale(d.eSed) }))
    .filter(d => d.x >= 0 && d.x <= plotW && d.y >= 0 && d.y <= plotH);

  const geneORFs = new Set();
  actives.filter(h => h.type === 'gene').forEach(h => h.orf_set.forEach(o => geneORFs.add(o)));
  allHL.filter(d => geneORFs.has(d.orf)).forEach(d => {
    appendCircle(clipped, ns, d.x, d.y, 4, COLORS[selectedTemp], '#333', 0.8);
  });
  const seen = new Set();
  allHL.filter(d => geneORFs.has(d.orf)).forEach(d => {
    if (seen.has(d.orf)) return; seen.add(d.orf);
    appendText(clipped, ns, d.x + 6, d.y - 6, labelMap[d.orf] || d.gene, '10px', '600');
  });

  actives.filter(h => h.type === 'group').forEach(h => {
    const pts = allHL.filter(d => h.orf_set.has(d.orf));
    pts.forEach(d => appendCircle(clipped, ns, d.x, d.y, 2.5, COLORS[selectedTemp], '#333', 0.5, 0.6));
    if (pts.length >= 2) {
      const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
      const mx = median(xs), my = median(ys), madx = mad(xs), mady = mad(ys);
      appendLine(clipped, ns, mx - madx, my, mx + madx, my, COLORS[selectedTemp], 2, 0.85);
      appendLine(clipped, ns, mx, my - mady, mx, my + mady, COLORS[selectedTemp], 2, 0.85);
      appendCircle(clipped, ns, mx, my, 5, COLORS[selectedTemp], '#333', 1.2);
      appendText(clipped, ns, mx + 8, my - 8, h.name, '10px', '600');
    } else if (pts.length === 1) {
      appendText(clipped, ns, pts[0].x + 6, pts[0].y - 6, h.name, '10px', '600');
    }
  });

  addSVGAxes(inner, ns, xScale, yScale, plotW, plotH,
    `log\u2082(FC ${TEMP_LABELS[selectedTemp]} vs 30°C)`, 'eSed (SDs)', false);
}

// ============================================================
// SVG helpers
// ============================================================
function appendCircle(parent, ns, cx, cy, r, fill, stroke, strokeWidth, opacity) {
  const c = document.createElementNS(ns, 'circle');
  c.setAttribute('cx', cx); c.setAttribute('cy', cy); c.setAttribute('r', r);
  c.setAttribute('fill', fill);
  if (stroke) c.setAttribute('stroke', stroke);
  if (strokeWidth) c.setAttribute('stroke-width', strokeWidth);
  if (opacity != null) c.setAttribute('opacity', opacity);
  parent.appendChild(c);
  return c;
}

function appendLine(parent, ns, x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  const l = document.createElementNS(ns, 'line');
  l.setAttribute('x1', x1); l.setAttribute('y1', y1);
  l.setAttribute('x2', x2); l.setAttribute('y2', y2);
  l.setAttribute('stroke', stroke); l.setAttribute('stroke-width', strokeWidth);
  if (opacity != null) l.setAttribute('stroke-opacity', opacity);
  parent.appendChild(l);
  return l;
}

function appendText(parent, ns, x, y, text, fontSize, fontWeight) {
  const t = document.createElementNS(ns, 'text');
  t.setAttribute('x', x); t.setAttribute('y', y);
  t.setAttribute('font-size', fontSize || '10px');
  t.setAttribute('font-weight', fontWeight || '600');
  t.setAttribute('fill', '#333');
  t.textContent = text;
  parent.appendChild(t);
  return t;
}

function addSVGAxes(g, ns, xScale, yScale, plotW, plotH, xLabel, yLabel, logX) {
  appendLine(g, ns, 0, plotH, plotW, plotH, '#333', 1);
  appendLine(g, ns, 0, 0, 0, plotH, '#333', 1);

  (logX ? xScale.ticks(5) : xScale.ticks(8)).forEach(v => {
    const x = xScale(v);
    appendLine(g, ns, x, plotH, x, plotH + 5, '#333', 1);
    const t = appendText(g, ns, x, plotH + 16, logX ? d3.format('~s')(v) : v.toFixed(1), '9px', 'normal');
    t.setAttribute('text-anchor', 'middle');
  });

  yScale.ticks(6).forEach(v => {
    const y = yScale(v);
    appendLine(g, ns, -5, y, 0, y, '#333', 1);
    const t = appendText(g, ns, -8, y + 3, v.toFixed(1), '9px', 'normal');
    t.setAttribute('text-anchor', 'end');
  });

  const xl = appendText(g, ns, plotW / 2, plotH + 38, xLabel, '11px', 'normal');
  xl.setAttribute('text-anchor', 'middle');

  const yl = document.createElementNS(ns, 'text');
  yl.setAttribute('transform', `rotate(-90) translate(${-plotH / 2}, -45)`);
  yl.setAttribute('text-anchor', 'middle');
  yl.setAttribute('font-size', '11px'); yl.textContent = yLabel;
  g.appendChild(yl);
}

function svgToPng(svgString, w, h, scale) {
  return new Promise(resolve => {
    const img = new Image();
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = w * scale; canvas.height = h * scale;
      const ctx = canvas.getContext('2d');
      ctx.scale(scale, scale);
      ctx.fillStyle = 'white'; ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      canvas.toBlob(b => { URL.revokeObjectURL(url); resolve(b); }, 'image/png');
    };
    img.src = url;
  });
}

function downloadBlob(blob, filename) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

// ============================================================
// Panel settings
// ============================================================
function readPanelLimits(panel) {
  const get = id => { const v = document.getElementById(id).value; return v === '' ? null : parseFloat(v); };
  panelLimits[panel] = {
    xmin: get(`${panel}-xmin`), xmax: get(`${panel}-xmax`),
    ymin: get(`${panel}-ymin`), ymax: get(`${panel}-ymax`)
  };
}

// ============================================================
// Render all
// ============================================================
function renderAll() {
  try {
    renderPsupPlot();
  } catch (e) {
    console.error('renderPsupPlot error:', e);
  }
  try {
    renderEsedPlot();
  } catch (e) {
    console.error('renderEsedPlot error:', e);
  }
}

// ============================================================
// Init & event wiring
// ============================================================
async function init() {
  // Wire up all UI event handlers first, before data load,
  // so buttons work even if data loading is slow

  document.getElementById('add-gene-btn').addEventListener('click', addFromInput);

  // Settings toggles
  document.querySelectorAll('.settings-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.dataset.panel;
      const el = document.getElementById(`${panel}-settings`);
      el.style.display = el.style.display === 'none' ? '' : 'none';
    });
  });

  // Apply buttons
  document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      readPanelLimits(btn.dataset.panel);
      renderAll();
    });
  });

  // Export buttons
  document.querySelectorAll('.export-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      readPanelLimits(btn.dataset.panel);
      exportPanel(btn.dataset.panel, btn.dataset.fmt);
    });
  });

  // eSed temperature toggle
  document.querySelectorAll('input[name="esed-temp"]').forEach(r => {
    r.addEventListener('change', () => renderEsedPlot());
  });

  window.addEventListener('resize', debounce(renderAll, 200));

  // Load data
  try {
    await loadData();
  } catch (e) {
    console.error('Failed to load data:', e);
    document.getElementById('psup-plot').textContent = 'Error loading data. Check console.';
    return;
  }

  setupAutocomplete();

  // Presets
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const genes = btn.dataset.genes.split(',').map(g => g.trim());
      const type = btn.dataset.type || 'genes';
      if (type === 'group') {
        addHighlight({ type: 'group', name: btn.dataset.name, genes });
      } else {
        genes.forEach(g => addHighlight({ type: 'gene', name: g, genes: [g] }));
      }
      renderGeneList();
      renderAll();
    });
  });

  renderAll();
}

function debounce(fn, ms) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };
}

init();
