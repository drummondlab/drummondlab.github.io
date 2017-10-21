---
layout: paper
title: "Automated analysis of meta-analysis networks."
nickname: 2005-05-20-lancaster-automated-analysis-of
authors: "Lancaster JL, Laird AR, Fox PM, Glahn DE, Fox PT"
year: "2005"
journal: "Hum Brain Mapp"
volume: 25
issue: 1
pages: 174-84
is_published: true
image: /assets/images/papers/hum-brain-mapp.png
projects: []
tags: []

# Text
fulltext:
pdf:
pdflink:
pmcid: 
preprint:
supplement:

# Links
doi: "10.1002/hbm.20135"
pmid: 15846809

# Data and code
github:
neurovault:
openfmri:
osf:
---
{% include JB/setup %}

# Abstract

The high information content in large data sets from voxel-based meta-analyses is complex, making it hard to readily resolve details. Using the meta-analysis network as a standardized data structure, network analysis algorithms can examine complex interrelationships and resolve hidden details. Two new network analysis algorithms have been adapted for use with meta-analysis networks. The first, called replicator dynamics network analysis (RDNA), analyzes co-occurrence of activations, whereas the second, called fractional similarity network analysis (FSNA), uses binary pattern matching to form similarity subnets. These two network analysis methods were evaluated using data from activation likelihood estimation (ALE)-based meta-analysis of the Stroop paradigm. Two versions of these data were evaluated, one using a more strict ALE threshold (P < 0.01) with a 13-node meta-analysis network, and the other a more lax threshold (P < 0.05) with a 22-node network. Java-based applications were developed for both RDNA and FSNA. The RDNA algorithm was modified to provide multiple subnets or maximal cliques for meta-analysis networks. Three different similarity measures were evaluated with FSNA to form subsets of nodes and experiments. RDNA provides a means to gauge importance of metanalysis subnets and complements FSNA, which provides a more comprehensive assessment of node similarity subsets, experiment similarity subsets, and overall node-to-factors similarity. The need to use both presence and absence of activations was an important finding in similarity analyses. FSNA revealed details from the pooled Stroop meta-analysis that would otherwise require separate highly filtered meta-analyses. These new analysis tools demonstrate how network analysis strategies can simplify greatly and enhance voxel-based meta-analyses.
