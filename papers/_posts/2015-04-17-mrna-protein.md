---
layout: paper
title: "Accounting for experimental noise reveals that mRNA levels, amplified by post-transcriptional processes, largely determine steady-state protein levels in yeast"
year: "2015"
shortref: "Csárdi, Franks <i>et al. PLOS Genetics</i> 2015"
shorttitle: "mRNA levels amplified to set protein levels"
nickname: mrna-prot
journal: "PLOS Genetics"
volume: 11
issue: 5
pages: e1005206
authors: "Csárdi G, Franks AM, Choi DS, Airoldi EM, Drummond DA"
image: /assets/images/papers/mrna-prot.png
fulltext: http://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.1005206
pdf: 
pdflink: https://journals.plos.org/plosgenetics/article/file?id=10.1371/journal.pgen.1005206&type=printable
pmid: 25950722
pmcid: PMC4423881
github: https://github.com/dad/mrna-prot
doi: "10.1371/journal.pgen.1005206"
f1000: 
dryad_doi: "10.5061/dryad.d644f"
altmetric_id: 3976460
category: paper
peerreview: true
review: false
published: true
tags: [yeast, translation, gene expression]
---
{% include JB/setup %}

# Abstract 

Cells respond to their environment by modulating protein levels
through mRNA transcription and post-transcriptional control. Modest observed
correlations between global steady-state mRNA and protein measurements
have been interpreted as evidence that mRNA levels determine
roughly 40% of the variation in protein levels, indicating dominant
post-transcriptional effects. However, the techniques underlying these
conclusions, such as correlation and regression, yield biased results
when data are noisy, missing systematically, and collinear&mdash;properties
of mRNA and protein measurements&mdash;which motivated us to revisit this
subject. Noise-robust analyses of 24 studies of budding yeast reveal
that mRNA levels explain more than 85% of the variation in steady-state
protein levels. Protein levels are not proportional to mRNA levels, but rise much more rapidly. Regulation of translation suffices to explain this nonlinear effect, revealing post-transcriptional amplification of, rather than competition with, transcriptional signals. These results substantially revise widely credited models of protein-level regulation, and introduce multiple noise-aware approaches essential for proper analysis of many biological phenomena.

# Source code

Code is available on [GitHub](http://github.com) (see sidebar).

```sh
git clone git@github.com:dad/mrna-prot.git
```


