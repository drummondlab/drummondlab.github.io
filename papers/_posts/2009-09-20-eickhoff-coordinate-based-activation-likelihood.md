---
layout: paper
title: "Coordinate-based activation likelihood estimation meta-analysis of neuroimaging data: a random-effects approach based on empirical estimates of spatial uncertainty."
nickname: 2009-09-20-eickhoff-coordinate-based-activation-likelihood
authors: "Eickhoff SB, Laird AR, Grefkes C, Wang LE, Zilles K, Fox PT"
year: "2009"
journal: "Hum Brain Mapp"
volume: 30
issue: 9
pages: 2907-26
is_published: true
image: /assets/images/papers/hum-brain-mapp.png
projects: []
tags: []

# Text
fulltext:
pdf:
pdflink:
pmcid: PMC2872071
preprint:
supplement:

# Links
doi: "10.1002/hbm.20718"
pmid: 19172646

# Data and code
github:
neurovault:
openfmri:
osf:
---
{% include JB/setup %}

# Abstract

A widely used technique for coordinate-based meta-analyses of neuroimaging data is activation likelihood estimation (ALE). ALE assesses the overlap between foci based on modeling them as probability distributions centered at the respective coordinates. In this Human Brain Project/Neuroinformatics research, the authors present a revised ALE algorithm addressing drawbacks associated with former implementations. The first change pertains to the size of the probability distributions, which had to be specified by the used. To provide a more principled solution, the authors analyzed fMRI data of 21 subjects, each normalized into MNI space using nine different approaches. This analysis provided quantitative estimates of between-subject and between-template variability for 16 functionally defined regions, which were then used to explicitly model the spatial uncertainty associated with each reported coordinate. Secondly, instead of testing for an above-chance clustering between foci, the revised algorithm assesses above-chance clustering between experiments. The spatial relationship between foci in a given experiment is now assumed to be fixed and ALE results are assessed against a null-distribution of random spatial association between experiments. Critically, this modification entails a change from fixed- to random-effects inference in ALE analysis allowing generalization of the results to the entire population of studies analyzed. By comparative analysis of real and simulated data, the authors showed that the revised ALE-algorithm overcomes conceptual problems of former meta-analyses and increases the specificity of the ensuing results without loosing the sensitivity of the original approach. It may thus provide a methodologically improved tool for coordinate-based meta-analyses on functional imaging data.
