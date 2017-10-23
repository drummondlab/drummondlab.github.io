---
layout: paper
title: "Recovery of correlated neuronal sources from EEG: the good and bad ways of using SOBI."
nickname: 2005-11-01-tang-recovery-of-correlated
authors: "Tang AC, Liu JY, Sutherland MT"
year: "2005"
journal: "Neuroimage"
volume: 28
issue: 2
pages: 507-19
is_published: true
image: /assets/images/papers/neuroimage.png
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
doi: "10.1016/j.neuroimage.2005.06.062"
pmid: 16139528

# Data and code
github:
neurovault:
openfmri:
osf:
---
{% include JB/setup %}

# Abstract

Second-order blind identification (SOBI) is a blind source separation (BSS) algorithm that has been applied to MEG and EEG data collected during a range of sensory, motor, and cognitive tasks. SOBI can decompose mixtures of electric or magnetic signals by utilizing detailed temporal structures present in the continuously recorded signals. Successful decomposition critically depends on the choice of temporal delay parameters used for computing multiple covariance matrices. Here, we present empirical findings from high-density EEG data (128 channels) to show that SOBI's ability to recover correlated neuronal sources critically depends on the appropriate use of these temporal delay parameters. Specifically, we applied SOBI to EEG data collected during correlated activation of the left and right primary somatosensory cortices (SI). We show that separation of signals originating from the left and right SI is better achieved by using a large number and a wide range of temporal delays between a few and several hundred milliseconds when compared to results using various subsets of these delays. The paper also offers non-mathematician/engineer users a gentle introduction to the inner workings of SOBI.
