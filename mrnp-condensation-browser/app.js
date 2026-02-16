// RNA Condensation Data Browser — Main application
// ============================================================

// Dataset configurations
const DATASETS = {
  ew_tspp: {
    id: 'ew_tspp',
    label: 'Heat Shock (WT)',
    subtitle: 'Wild-type heat-shock sedimentation data',
    series: ['30C', '42C', '46C'],
    colors: { '30C': '#7F7F7F', '42C': '#FD8D3C', '46C': '#D94801' },
    seriesLabels: { '30C': '30\u00b0C', '42C': '42\u00b0C', '46C': '46\u00b0C' },
    esedComparisons: ['42C', '46C'],
    esedRefLabel: '30\u00b0C',
    labelPreferredSeries: '42C',
    dataPath: 'data/ew_tspp'
  },
  eif3b_deplete: {
    id: 'eif3b_deplete',
    label: 'eIF3b Depletion + Heat Shock',
    subtitle: 'eIF3b-depleted, heat-shock sedimentation data',
    series: ['30C', '42C', '46C'],
    colors: { '30C': '#7F7F7F', '42C': '#FD8D3C', '46C': '#D94801' },
    seriesLabels: { '30C': '30\u00b0C', '42C': '42\u00b0C', '46C': '46\u00b0C' },
    esedComparisons: ['42C', '46C'],
    esedRefLabel: '30\u00b0C',
    labelPreferredSeries: '42C',
    dataPath: 'data/eif3b_deplete'
  },
  azide3: {
    id: 'azide3',
    label: 'Azide 0.8%',
    subtitle: 'Sodium azide 0.8% (pH 6.8) sedimentation data',
    series: ['mock', 'treated'],
    colors: { 'mock': '#7F7F7F', 'treated': '#006D2C' },
    seriesLabels: { 'mock': 'Mock', 'treated': 'Azide 0.8%' },
    esedComparisons: ['treated'],
    esedRefLabel: 'mock',
    labelPreferredSeries: 'treated',
    dataPath: 'data/azide3'
  },
  ethanol: {
    id: 'ethanol',
    label: 'Ethanol',
    subtitle: 'Ethanol stress sedimentation data (multiple concentrations)',
    series: ['mock', 'EtOH_5%', 'EtOH_7.5%', 'EtOH_10%', 'EtOH_15%'],
    colors: {
      'mock': '#7F7F7F',
      'EtOH_5%': '#BCBDDC',
      'EtOH_7.5%': '#807DBA',
      'EtOH_10%': '#6A51A3',
      'EtOH_15%': '#4A1486'
    },
    seriesLabels: {
      'mock': 'Mock',
      'EtOH_5%': '5% EtOH',
      'EtOH_7.5%': '7.5% EtOH',
      'EtOH_10%': '10% EtOH',
      'EtOH_15%': '15% EtOH'
    },
    esedComparisons: ['EtOH_7.5%'],
    esedRefLabel: 'mock',
    labelPreferredSeries: 'EtOH_15%',
    dataPath: 'data/ethanol'
  },
  dtt: {
    id: 'dtt',
    label: 'DTT 10 mM (UPR)',
    subtitle: 'DTT 10 mM (unfolded protein response) sedimentation data',
    series: ['mock', 'treated'],
    colors: { 'mock': '#7F7F7F', 'treated': '#CC79A7' },
    seriesLabels: { 'mock': 'Mock', 'treated': 'DTT 10 mM' },
    esedComparisons: ['treated'],
    esedRefLabel: 'mock',
    labelPreferredSeries: 'treated',
    dataPath: 'data/dtt'
  }
};

const MARGIN = { top: 30, right: 30, bottom: 55, left: 65 };

// Active dataset state
let activeDatasetId = 'ew_tspp';
let loadedDatasets = {};  // cache: { id: { psupData, esedData, windowCurves } }
let geneList = [], geneMap = {};

// Convenience accessors
function ds() { return DATASETS[activeDatasetId]; }

// Highlight entries: {id, type:'gene'|'group', name, genes:[], orf_set:Set, enabled:bool}
let highlights = [];
let nextId = 1;

// Per-panel axis overrides (null = auto)
const panelLimits = {
  psup: { xmin: null, xmax: null, ymin: 0, ymax: 1 },
  esed: { xmin: null, xmax: null, ymin: null, ymax: null }
};

// ============================================================
// Data loading (lazy, per-dataset)
// ============================================================
async function loadDatasetData(id) {
  if (loadedDatasets[id]) return loadedDatasets[id];
  const cfg = DATASETS[id];
  const [psup, esed, curves] = await Promise.all([
    d3.json(`${cfg.dataPath}/psup_data.json`),
    d3.json(`${cfg.dataPath}/esed_data.json`),
    d3.json(`${cfg.dataPath}/window_curves.json`)
  ]);
  loadedDatasets[id] = { psupData: psup, esedData: esed, windowCurves: curves };
  return loadedDatasets[id];
}

async function loadGeneList() {
  const genes = await d3.json('data/gene_list.json');
  geneList = genes;
  geneMap = {};
  genes.forEach(g => { if (g.gene) geneMap[g.gene.toUpperCase()] = g; });
}

function getPsupData() { return loadedDatasets[activeDatasetId]?.psupData || []; }
function getEsedDataRaw() { return loadedDatasets[activeDatasetId]?.esedData || []; }
function getWindowCurves() { return loadedDatasets[activeDatasetId]?.windowCurves || {}; }

// ============================================================
// Dataset switching
// ============================================================
async function switchDataset(newId) {
  activeDatasetId = newId;
  document.getElementById('psup-plot').textContent = 'Loading\u2026';
  document.getElementById('esed-plot').textContent = 'Loading\u2026';

  try {
    await loadDatasetData(newId);
  } catch (e) {
    console.error('Failed to load dataset:', e);
    document.getElementById('psup-plot').textContent = 'Error loading data.';
    return;
  }

  // Reset panel limits to auto
  panelLimits.psup = { xmin: null, xmax: null, ymin: 0, ymax: 1 };
  panelLimits.esed = { xmin: null, xmax: null, ymin: null, ymax: null };
  // Clear limit inputs
  ['psup', 'esed'].forEach(p => {
    ['xmin','xmax','ymin','ymax'].forEach(k => {
      const el = document.getElementById(`${p}-${k}`);
      if (el) el.value = '';
    });
  });

  updateEsedComparisonUI();
  document.getElementById('app-subtitle').textContent =
    `Drummond Lab \u2014 ${ds().subtitle}`;
  renderAll();
}

// ============================================================
// Dynamic eSed comparison UI
// ============================================================
function updateEsedComparisonUI() {
  const cfg = ds();
  const container = document.getElementById('esed-comparison-options');
  container.innerHTML = '';

  if (cfg.esedComparisons.length <= 1) {
    const comp = cfg.esedComparisons[0];
    const label = comp
      ? `${cfg.seriesLabels[comp]} vs ${cfg.esedRefLabel}`
      : 'No comparison available';
    container.innerHTML = `<span class="esed-label">${label}</span>`;
  } else {
    cfg.esedComparisons.forEach((comp, i) => {
      const lbl = document.createElement('label');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'esed-comp';
      radio.value = comp;
      if (i === 0) radio.checked = true;
      radio.addEventListener('change', () => {
        try { renderEsedPlot(); } catch(e) { console.error('renderEsedPlot:', e); }
      });
      lbl.appendChild(radio);
      lbl.appendChild(document.createTextNode(
        ` ${cfg.seriesLabels[comp]} vs ${cfg.esedRefLabel}`
      ));
      container.appendChild(lbl);
    });
  }
}

function getSelectedEsedComparison() {
  const cfg = ds();
  if (cfg.esedComparisons.length <= 1) return cfg.esedComparisons[0];
  const checked = document.querySelector('input[name="esed-comp"]:checked');
  return checked ? checked.value : cfg.esedComparisons[0];
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
  const psupData = getPsupData();
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
  const psupData = getPsupData();
  if (W < 100 || H < 100 || psupData.length === 0) return;
  const plotW = W - MARGIN.left - MARGIN.right;
  const plotH = H - MARGIN.top - MARGIN.bottom;
  const { xScale, yScale } = getPsupScales(plotW, plotH);

  const cfg = ds();
  const colors = cfg.colors;
  const labels = cfg.seriesLabels;
  const seriesList = cfg.series;
  const windowCurves = getWindowCurves();

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

  seriesList.forEach(s => {
    ctx.fillStyle = colors[s];
    ctx.globalAlpha = 0.15;
    psupData.filter(d => d.series === s).forEach(d => {
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
  seriesList.forEach(s => {
    const curve = windowCurves[s];
    if (!curve) return;
    const line = d3.line()
      .x(d => xScale(d.length)).y(d => yScale(d.pSupWindow))
      .defined(d => d.length >= xScale.domain()[0] && d.length <= xScale.domain()[1]);
    clipped.append('path').datum(curve).attr('d', line)
      .attr('fill', 'none').attr('stroke', '#333').attr('stroke-width', 1.5).attr('stroke-opacity', 0.5);
  });

  // Legend
  const legendX = plotW - (seriesList.length > 3 ? 130 : 110);
  const legend = g.append('g').attr('transform', `translate(${legendX}, 5)`);
  seriesList.forEach((s, i) => {
    const lg = legend.append('g').attr('transform', `translate(0, ${i * 18})`);
    lg.append('circle').attr('r', 5).attr('fill', colors[s]);
    lg.append('text').attr('x', 10).attr('y', 4).attr('font-size', '11px').text(labels[s]);
  });

  // Highlighted points & group summaries
  const labelMap = getLabelMap();
  const actives = getActiveHighlights();
  const hlPoints = [];

  seriesList.forEach(s => {
    psupData.filter(d => d.series === s && highlightedORFs.has(d.orf)).forEach(d => {
      const x = xScale(d.length), y = yScale(d.pSup);
      if (x >= 0 && x <= plotW && y >= 0 && y <= plotH)
        hlPoints.push({ ...d, x, y, color: colors[s] });
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

  // Individual gene labels at preferred series position
  const prefSeries = cfg.labelPreferredSeries;
  const labelledORFs = new Set();
  const geneLabelData = [];
  hlPoints.filter(d => geneORFs.has(d.orf)).forEach(d => {
    if (labelledORFs.has(d.orf)) return;
    const best = hlPoints.find(p => p.orf === d.orf && p.series === prefSeries)
      || hlPoints.find(p => p.orf === d.orf) || d;
    labelledORFs.add(d.orf);
    geneLabelData.push({ x: best.x, y: best.y, label: labelMap[d.orf] || d.gene });
  });
  clipped.selectAll('.gene-label')
    .data(geneLabelData).join('text').attr('class', 'gene-label')
    .attr('x', d => d.x + 6).attr('y', d => d.y - 6)
    .attr('font-size', '11px').attr('font-weight', '600').attr('fill', '#333')
    .attr('stroke', '#fff').attr('stroke-width', 3).attr('paint-order', 'stroke')
    .text(d => d.label);

  // Group summaries: median crosshair + MAD bars per series
  const groupHighlights = actives.filter(h => h.type === 'group');
  groupHighlights.forEach(h => {
    seriesList.forEach(s => {
      const pts = hlPoints.filter(d => h.orf_set.has(d.orf) && d.series === s);
      if (pts.length < 2) {
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

      pts.forEach(d => {
        clipped.append('circle')
          .attr('cx', d.x).attr('cy', d.y).attr('r', 3)
          .attr('fill', d.color).attr('fill-opacity', 0.6)
          .attr('stroke', '#333').attr('stroke-width', 0.5);
      });

      const col = colors[s];
      clipped.append('line')
        .attr('x1', medX - madX).attr('x2', medX + madX)
        .attr('y1', medY).attr('y2', medY)
        .attr('stroke', col).attr('stroke-width', 2).attr('stroke-opacity', 0.85);
      clipped.append('line')
        .attr('x1', medX).attr('x2', medX)
        .attr('y1', medY - madY).attr('y2', medY + madY)
        .attr('stroke', col).attr('stroke-width', 2).attr('stroke-opacity', 0.85);
      clipped.append('circle').attr('class', 'group-crosshair')
        .attr('cx', medX).attr('cy', medY).attr('r', 5)
        .attr('fill', col).attr('stroke', '#333').attr('stroke-width', 1.2)
        .on('mouseenter', (event) => {
          showTooltipText(event,
            `${h.name} (${labels[s]})\n` +
            `n = ${pts.length}\n` +
            `median pSup: ${invScaleY(medY, yScale).toFixed(3)}\n` +
            `MAD pSup: ${madFromPixels(madY, yScale).toFixed(3)}\n` +
            `median length: ${Math.round(invScaleX(medX, xScale))} nt`);
        })
        .on('mouseleave', hideTooltip);
    });

    // Group label at preferred series median position
    const ptsLabel = hlPoints.filter(d => h.orf_set.has(d.orf) && d.series === prefSeries);
    const ptsFallback = ptsLabel.length ? ptsLabel : hlPoints.filter(d => h.orf_set.has(d.orf));
    if (ptsFallback.length > 0) {
      const mx = median(ptsFallback.map(p => p.x));
      const my = median(ptsFallback.map(p => p.y));
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
  const y0 = yScale.invert(0);
  const y1 = yScale.invert(madPx);
  return Math.abs(y0 - y1);
}

// ============================================================
// Plotting: eSed vs Transcript Induction
// ============================================================
function getEsedData() {
  const selectedComp = getSelectedEsedComparison();
  const esedData = getEsedDataRaw();
  const data = esedData.filter(d => d.series === selectedComp);
  return {
    selectedComp,
    dataWithFC: data.filter(d => d.fc > 0 && isFinite(d.fc))
  };
}

function getEsedScales(plotW, plotH, dataWithFC) {
  const lim = panelLimits.esed;
  const xExt = d3.extent(dataWithFC, d => d.fc);
  const yExt = d3.extent(dataWithFC, d => d.eSed);
  const yPad = (yExt[1] - yExt[0]) * 0.05;
  return {
    xScale: d3.scaleLog()
      .domain([lim.xmin != null ? lim.xmin : xExt[0] * 0.9, lim.xmax != null ? lim.xmax : xExt[1] * 1.1])
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
  const esedDataRaw = getEsedDataRaw();
  if (W < 100 || H < 100 || esedDataRaw.length === 0) return;
  const plotW = W - MARGIN.left - MARGIN.right;
  const plotH = H - MARGIN.top - MARGIN.bottom;
  const { selectedComp, dataWithFC } = getEsedData();
  if (dataWithFC.length === 0) {
    container.textContent = 'No fold-change data for this comparison.';
    return;
  }
  const { xScale, yScale } = getEsedScales(plotW, plotH, dataWithFC);

  const cfg = ds();
  const compColor = cfg.colors[selectedComp] || '#888';
  const compLabel = cfg.seriesLabels[selectedComp] || selectedComp;
  const refLabel = cfg.esedRefLabel;

  const canvas = document.createElement('canvas');
  canvas.width = W * devicePixelRatio; canvas.height = H * devicePixelRatio;
  canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  ctx.scale(devicePixelRatio, devicePixelRatio);

  const highlightedORFs = getHighlightedORFs();
  ctx.fillStyle = '#888'; ctx.globalAlpha = 0.2;
  dataWithFC.forEach(d => {
    if (highlightedORFs.has(d.orf)) return;
    const x = MARGIN.left + xScale(d.fc), y = MARGIN.top + yScale(d.eSed);
    if (x >= MARGIN.left && x <= W - MARGIN.right && y >= MARGIN.top && y <= H - MARGIN.bottom) {
      ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2); ctx.fill();
    }
  });
  ctx.globalAlpha = 1.0;

  const svg = d3.select(container).append('svg').attr('width', W).attr('height', H);
  const g = svg.append('g').attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);
  g.append('clipPath').attr('id', 'clip-esed')
    .append('rect').attr('width', plotW).attr('height', plotH);

  g.append('g').attr('transform', `translate(0,${plotH})`)
    .call(d3.axisBottom(xScale).ticks(8, '~g'));
  g.append('g').call(d3.axisLeft(yScale).ticks(8));

  // Reference line at FC = 1 (no change)
  if (xScale.domain()[0] < 1 && xScale.domain()[1] > 1)
    g.append('line').attr('x1', xScale(1)).attr('x2', xScale(1)).attr('y1', 0).attr('y2', plotH)
      .attr('stroke', '#ccc').attr('stroke-dasharray', '3,3');
  if (yScale.domain()[0] < 0 && yScale.domain()[1] > 0)
    g.append('line').attr('x1', 0).attr('x2', plotW).attr('y1', yScale(0)).attr('y2', yScale(0))
      .attr('stroke', '#ccc').attr('stroke-dasharray', '3,3');

  g.append('text').attr('x', plotW / 2).attr('y', plotH + 42).attr('text-anchor', 'middle').attr('font-size', '12px')
    .text(`Fold-change (${compLabel} vs ${refLabel})`);
  g.append('text').attr('transform', 'rotate(-90)').attr('x', -plotH / 2).attr('y', -48)
    .attr('text-anchor', 'middle').attr('font-size', '12px').text('Escape from sedimentation, eSed (SDs)');
  g.append('text').attr('x', plotW - 5).attr('y', 15).attr('text-anchor', 'end')
    .attr('font-size', '13px').attr('font-weight', '600').attr('fill', compColor)
    .text(`${compLabel} vs ${refLabel}`);

  const clipped = g.append('g').attr('clip-path', 'url(#clip-esed)');
  const labelMap = getLabelMap();
  const actives = getActiveHighlights();

  const allHL = dataWithFC
    .filter(d => highlightedORFs.has(d.orf))
    .map(d => ({ ...d, x: xScale(d.fc), y: yScale(d.eSed) }))
    .filter(d => d.x >= 0 && d.x <= plotW && d.y >= 0 && d.y <= plotH);

  // Individual gene entries
  const geneORFs = new Set();
  actives.filter(h => h.type === 'gene').forEach(h => h.orf_set.forEach(o => geneORFs.add(o)));

  clipped.selectAll('.highlight-point')
    .data(allHL.filter(d => geneORFs.has(d.orf)))
    .join('circle').attr('class', 'highlight-point')
    .attr('cx', d => d.x).attr('cy', d => d.y).attr('r', 4.5)
    .attr('fill', compColor).attr('stroke', '#333').attr('stroke-width', 1)
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

    pts.forEach(d => {
      clipped.append('circle')
        .attr('cx', d.x).attr('cy', d.y).attr('r', 3)
        .attr('fill', compColor).attr('fill-opacity', 0.6)
        .attr('stroke', '#333').attr('stroke-width', 0.5);
    });

    if (pts.length >= 2) {
      const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
      const medX = median(xs), medY = median(ys);
      const madX = mad(xs), madY = mad(ys);

      clipped.append('line')
        .attr('x1', medX - madX).attr('x2', medX + madX).attr('y1', medY).attr('y2', medY)
        .attr('stroke', compColor).attr('stroke-width', 2).attr('stroke-opacity', 0.85);
      clipped.append('line')
        .attr('x1', medX).attr('x2', medX).attr('y1', medY - madY).attr('y2', medY + madY)
        .attr('stroke', compColor).attr('stroke-width', 2).attr('stroke-opacity', 0.85);
      clipped.append('circle').attr('class', 'group-crosshair')
        .attr('cx', medX).attr('cy', medY).attr('r', 5)
        .attr('fill', compColor).attr('stroke', '#333').attr('stroke-width', 1.2)
        .on('mouseenter', (event) => {
          showTooltipText(event,
            `${h.name} (${compLabel})\n` +
            `n = ${pts.length}\n` +
            `median eSed: ${yScale.invert(medY).toFixed(3)} SDs\n` +
            `MAD eSed: ${Math.abs(yScale.invert(0) - yScale.invert(madY)).toFixed(3)} SDs\n` +
            `median FC: ${xScale.invert(medX).toFixed(2)}`);
        })
        .on('mouseleave', hideTooltip);

      clipped.append('text')
        .attr('x', medX + 8).attr('y', medY - 8)
        .attr('font-size', '11px').attr('font-weight', '600').attr('fill', '#333')
        .attr('stroke', '#fff').attr('stroke-width', 3).attr('paint-order', 'stroke')
        .text(h.name);
    } else {
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
  const cfg = ds();
  let text = `${(d.gene || d.orf).toUpperCase()} (${d.orf})\n`;
  if (d.pSup !== undefined) {
    text += `pSup: ${d.pSup.toFixed(3)}\nLength: ${d.length} nt\n${cfg.seriesLabels[d.series] || d.series}`;
  } else if (d.eSed !== undefined) {
    text += `eSed: ${d.eSed.toFixed(3)} SDs\nFC: ${d.fc.toFixed(2)}`;
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

  const cfg = ds();
  const colors = cfg.colors;
  const seriesList = cfg.series;
  const psupData = getPsupData();
  const windowCurves = getWindowCurves();

  const inner = document.createElementNS(ns, 'g');
  inner.setAttribute('transform', `translate(${MARGIN.left},${MARGIN.top})`);
  gEl.appendChild(inner);

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
  seriesList.forEach(s => {
    psupData.filter(d => d.series === s && !highlightedORFs.has(d.orf)).forEach(d => {
      const cx = xScale(d.length), cy = yScale(d.pSup);
      if (cx >= 0 && cx <= plotW && cy >= 0 && cy <= plotH) {
        const c = document.createElementNS(ns, 'circle');
        c.setAttribute('cx', cx); c.setAttribute('cy', cy); c.setAttribute('r', 1.5);
        c.setAttribute('fill', colors[s]); c.setAttribute('opacity', 0.15);
        clipped.appendChild(c);
      }
    });
  });

  // Window curves
  seriesList.forEach(s => {
    const curve = windowCurves[s];
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
  const prefSeries = cfg.labelPreferredSeries;

  seriesList.forEach(s => {
    psupData.filter(d => d.series === s && highlightedORFs.has(d.orf)).forEach(d => {
      const cx = xScale(d.length), cy = yScale(d.pSup);
      if (cx >= 0 && cx <= plotW && cy >= 0 && cy <= plotH)
        hlPoints.push({ ...d, x: cx, y: cy, color: colors[s] });
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
    const best = hlPoints.find(p => p.orf === d.orf && p.series === prefSeries)
      || hlPoints.find(p => p.orf === d.orf) || d;
    appendText(clipped, ns, best.x + 6, best.y - 6, labelMap[d.orf] || d.gene, '10px', '600');
  });

  // Groups
  actives.filter(h => h.type === 'group').forEach(h => {
    seriesList.forEach(s => {
      const pts = hlPoints.filter(d => h.orf_set.has(d.orf) && d.series === s);
      pts.forEach(d => appendCircle(clipped, ns, d.x, d.y, 2.5, d.color, '#333', 0.5, 0.6));
      if (pts.length >= 2) {
        const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
        const mx = median(xs), my = median(ys), madx = mad(xs), mady = mad(ys);
        appendLine(clipped, ns, mx - madx, my, mx + madx, my, colors[s], 2, 0.85);
        appendLine(clipped, ns, mx, my - mady, mx, my + mady, colors[s], 2, 0.85);
        appendCircle(clipped, ns, mx, my, 5, colors[s], '#333', 1.2);
      }
    });
    const ptsL = hlPoints.filter(d => h.orf_set.has(d.orf) && d.series === prefSeries);
    const ptsFallback = ptsL.length ? ptsL : hlPoints.filter(d => h.orf_set.has(d.orf));
    if (ptsFallback.length) {
      const mx = median(ptsFallback.map(p => p.x)), my = median(ptsFallback.map(p => p.y));
      appendText(clipped, ns, mx + 8, my - 8, h.name, '10px', '600');
    }
  });

  addSVGAxes(inner, ns, xScale, yScale, plotW, plotH, 'mRNA length (nt)', 'pSup', true);
}

function renderEsedPlotSVG(gEl, W, H) {
  const plotW = W - MARGIN.left - MARGIN.right;
  const plotH = H - MARGIN.top - MARGIN.bottom;
  const ns = 'http://www.w3.org/2000/svg';
  const { selectedComp, dataWithFC } = getEsedData();
  const { xScale, yScale } = getEsedScales(plotW, plotH, dataWithFC);

  const cfg = ds();
  const compColor = cfg.colors[selectedComp] || '#888';
  const compLabel = cfg.seriesLabels[selectedComp] || selectedComp;
  const refLabel = cfg.esedRefLabel;

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

  dataWithFC.filter(d => !highlightedORFs.has(d.orf)).forEach(d => {
    const cx = xScale(d.fc), cy = yScale(d.eSed);
    if (cx >= 0 && cx <= plotW && cy >= 0 && cy <= plotH)
      appendCircle(clipped, ns, cx, cy, 1.5, '#888', null, null, 0.2);
  });

  const actives = getActiveHighlights();
  const labelMap = getLabelMap();
  const allHL = dataWithFC.filter(d => highlightedORFs.has(d.orf))
    .map(d => ({ ...d, x: xScale(d.fc), y: yScale(d.eSed) }))
    .filter(d => d.x >= 0 && d.x <= plotW && d.y >= 0 && d.y <= plotH);

  const geneORFs = new Set();
  actives.filter(h => h.type === 'gene').forEach(h => h.orf_set.forEach(o => geneORFs.add(o)));
  allHL.filter(d => geneORFs.has(d.orf)).forEach(d => {
    appendCircle(clipped, ns, d.x, d.y, 4, compColor, '#333', 0.8);
  });
  const seen = new Set();
  allHL.filter(d => geneORFs.has(d.orf)).forEach(d => {
    if (seen.has(d.orf)) return; seen.add(d.orf);
    appendText(clipped, ns, d.x + 6, d.y - 6, labelMap[d.orf] || d.gene, '10px', '600');
  });

  actives.filter(h => h.type === 'group').forEach(h => {
    const pts = allHL.filter(d => h.orf_set.has(d.orf));
    pts.forEach(d => appendCircle(clipped, ns, d.x, d.y, 2.5, compColor, '#333', 0.5, 0.6));
    if (pts.length >= 2) {
      const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
      const mx = median(xs), my = median(ys), madx = mad(xs), mady = mad(ys);
      appendLine(clipped, ns, mx - madx, my, mx + madx, my, compColor, 2, 0.85);
      appendLine(clipped, ns, mx, my - mady, mx, my + mady, compColor, 2, 0.85);
      appendCircle(clipped, ns, mx, my, 5, compColor, '#333', 1.2);
      appendText(clipped, ns, mx + 8, my - 8, h.name, '10px', '600');
    } else if (pts.length === 1) {
      appendText(clipped, ns, pts[0].x + 6, pts[0].y - 6, h.name, '10px', '600');
    }
  });

  addSVGAxes(inner, ns, xScale, yScale, plotW, plotH,
    `Fold-change (${compLabel} vs ${refLabel})`, 'eSed (SDs)', true);
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
    const t = appendText(g, ns, x, plotH + 16, logX ? d3.format('~g')(v) : v.toFixed(1), '9px', 'normal');
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
  // Dataset selector
  document.getElementById('dataset-select').addEventListener('change', (e) => {
    switchDataset(e.target.value);
  });

  // Gene input
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

  window.addEventListener('resize', debounce(renderAll, 200));

  // Load gene list (shared)
  try {
    await loadGeneList();
  } catch (e) {
    console.error('Failed to load gene list:', e);
  }

  // Load default dataset
  try {
    await loadDatasetData('ew_tspp');
  } catch (e) {
    console.error('Failed to load data:', e);
    document.getElementById('psup-plot').textContent = 'Error loading data. Check console.';
    return;
  }

  setupAutocomplete();
  updateEsedComparisonUI();

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
