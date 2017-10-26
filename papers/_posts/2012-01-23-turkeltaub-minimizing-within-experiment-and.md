---
layout: paper
title: "Minimizing within-experiment and within-group effects in Activation Likelihood Estimation meta-analyses."
nickname: 2012-01-23-turkeltaub-minimizing-within-experiment-and
authors: "Turkeltaub PE, Eickhoff SB, Laird AR, Fox M, Wiener M, Fox P"
year: "2012"
journal: "Hum Brain Mapp"
volume: 33
issue: 1
pages: 1-13
is_published: true
image: /assets/images/papers/hum-brain-mapp.png
projects: []
tags: []

# Text
fulltext:
pdf:
pdflink:
pmcid: PMC4791073
preprint:
supplement:

# Links
doi: "10.1002/hbm.21186"
pmid: 21305667

# Data and code
github:
neurovault:
openfmri:
osf:
---
{% include JB/setup %}

# Abstract

Activation Likelihood Estimation (ALE) is an objective, quantitative technique for coordinate-based meta-analysis (CBMA) of neuroimaging results that has been validated for a variety of uses. Stepwise modifications have improved ALE's theoretical and statistical rigor since its introduction. Here, we evaluate two avenues to further optimize ALE. First, we demonstrate that the maximum contribution of an experiment makes to an ALE map is related to the number of foci it reports and their proximity. We present a modified ALE algorithm that eliminates these within-experiment effects. However, we show that these effects only account for 2-3% of cumulative ALE values, and removing them has little impact on thresholded ALE maps. Next, we present an alternate organizational approach to datasets that prevents subject groups with multiple experiments in a dataset from influencing ALE values more than others. This modification decreases cumulative ALE values by 7-9%, changes the relative magnitude of some clusters, and reduces cluster extents. Overall, differences between results of the standard approach and these new methods were small. This finding validates previous ALE reports against concerns that they were driven by within-experiment or within-group effects. We suggest that the modified ALE algorithm is theoretically advantageous compared with the current algorithm, and that the alternate organization of datasets is the most conservative approach for typical ALE analyses and other CBMA methods. Combining the two modifications minimizes both within-experiment and within-group effects, optimizing the degree to which ALE values represent concordance of findings across independent reports.
