---
layout: paper
title: "Automated annotation of functional imaging experiments via multi-label classification."
nickname: 2013-10-23-turner-automated-annotation-of
authors: "Turner MD, Chakrabarti C, Jones TB, Xu JF, Fox PT, Luger GF, Laird AR, Turner JA"
year: "2013"
journal: "Front Neurosci"
volume: 7
issue: 
pages: 240
is_published: true
image: /assets/images/papers/front-neurosci.png
projects: []
tags: []

# Text
fulltext:
pdf:
pdflink:
pmcid: PMC3864256
preprint:
supplement:

# Links
doi: "10.3389/fnins.2013.00240"
pmid: 24409112

# Data and code
github:
neurovault:
openfmri:
osf:
---
{% include JB/setup %}

# Abstract

Identifying the experimental methods in human neuroimaging papers is important for grouping meaningfully similar experiments for meta-analyses. Currently, this can only be done by human readers. We present the performance of common machine learning (text mining) methods applied to the problem of automatically classifying or labeling this literature. Labeling terms are from the Cognitive Paradigm Ontology (CogPO), the text corpora are abstracts of published functional neuroimaging papers, and the methods use the performance of a human expert as training data. We aim to replicate the expert's annotation of multiple labels per abstract identifying the experimental stimuli, cognitive paradigms, response types, and other relevant dimensions of the experiments. We use several standard machine learning methods: naive Bayes (NB), k-nearest neighbor, and support vector machines (specifically SMO or sequential minimal optimization). Exact match performance ranged from only 15% in the worst cases to 78% in the best cases. NB methods combined with binary relevance transformations performed strongly and were robust to overfitting. This collection of results demonstrates what can be achieved with off-the-shelf software components and little to no pre-processing of raw text.
