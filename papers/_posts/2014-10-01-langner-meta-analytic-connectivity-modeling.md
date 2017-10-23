---
layout: paper
title: "Meta-analytic connectivity modeling revisited: controlling for activation base rates."
nickname: 2014-10-01-langner-meta-analytic-connectivity-modeling
authors: "Langner R, Rottschy C, Laird AR, Fox PT, Eickhoff SB"
year: "2014"
journal: "Neuroimage"
volume: 99
issue: 
pages: 559-70
is_published: true
image: /assets/images/papers/neuroimage.png
projects: []
tags: []

# Text
fulltext:
pdf:
pdflink:
pmcid: PMC4112007
preprint:
supplement:

# Links
doi: "10.1016/j.neuroimage.2014.06.007"
pmid: 24945668

# Data and code
github:
neurovault:
openfmri:
osf:
---
{% include JB/setup %}

# Abstract

Co-activation of distinct brain regions is a measure of functional interaction, or connectivity, between those regions. The co-activation pattern of a given region can be investigated using seed-based activation likelihood estimation meta-analysis of functional neuroimaging data stored in databases such as BrainMap. This method reveals inter-regional functional connectivity by determining brain regions that are consistently co-activated with a given region of interest (the "seed") across a broad range of experiments. In current implementations of this meta-analytic connectivity modeling (MACM), significant spatial convergence (i.e. consistent co-activation) is distinguished from noise by comparing it against an unbiased null-distribution of random spatial associations between experiments according to which all gray-matter voxels have the same chance of convergence. As the a priori probability of finding activation in different voxels markedly differs across the brain, computing such a quasi-rectangular null-distribution renders the detection of significant convergence more likely in those voxels that are frequently activated. Here, we propose and test a modified MACM approach that takes this activation frequency bias into account. In this new specific co-activation likelihood estimation (SCALE) algorithm, a null-distribution is generated that reflects the base rate of reporting activation in any given voxel and thus equalizes the a priori chance of finding across-study convergence in each voxel of the brain. Using four exemplary seed regions (right visual area V4, left anterior insula, right intraparietal sulcus, and subgenual cingulum), our tests corroborated the enhanced specificity of the modified algorithm, indicating that SCALE may be especially useful for delineating distinct core networks of co-activation.
