---
layout: paper
title: "Activation likelihood estimation meta-analysis revisited."
nickname: 2012-02-01-eickhoff-activation-likelihood-estimation
authors: "Eickhoff SB, Bzdok D, Laird AR, Kurth F, Fox PT"
year: "2012"
journal: "Neuroimage"
volume: 59
issue: 3
pages: 2349-61
is_published: true
image: /assets/images/papers/neuroimage.png
projects: []
tags: []

# Text
fulltext:
pdf:
pdflink:
pmcid: PMC3254820
preprint:
supplement:

# Links
doi: "10.1016/j.neuroimage.2011.09.017"
pmid: 21963913

# Data and code
github:
neurovault:
openfmri:
osf:
---
{% include JB/setup %}

# Abstract

A widely used technique for coordinate-based meta-analysis of neuroimaging data is activation likelihood estimation (ALE), which determines the convergence of foci reported from different experiments. ALE analysis involves modelling these foci as probability distributions whose width is based on empirical estimates of the spatial uncertainty due to the between-subject and between-template variability of neuroimaging data. ALE results are assessed against a null-distribution of random spatial association between experiments, resulting in random-effects inference. In the present revision of this algorithm, we address two remaining drawbacks of the previous algorithm. First, the assessment of spatial association between experiments was based on a highly time-consuming permutation test, which nevertheless entailed the danger of underestimating the right tail of the null-distribution. In this report, we outline how this previous approach may be replaced by a faster and more precise analytical method. Second, the previously applied correction procedure, i.e. controlling the false discovery rate (FDR), is supplemented by new approaches for correcting the family-wise error rate and the cluster-level significance. The different alternatives for drawing inference on meta-analytic results are evaluated on an exemplary dataset on face perception as well as discussed with respect to their methodological limitations and advantages. In summary, we thus replaced the previous permutation algorithm with a faster and more rigorous analytical solution for the null-distribution and comprehensively address the issue of multiple-comparison corrections. The proposed revision of the ALE-algorithm should provide an improved tool for conducting coordinate-based meta-analyses on functional imaging data.
