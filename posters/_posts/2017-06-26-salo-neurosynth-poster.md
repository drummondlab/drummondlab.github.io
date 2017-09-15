---
layout: poster
title: "A quantitative evaluation of Neurosynth's annotation methods"
year: "2017"
shortref: "Salo <i>et al. OHBM</i> 2017"
nickname: salo-neurosynth-poster
conference: "HBM"
authors: "Salo T, Riedel MC, Bartley JE, Bottenhorn KL, Yarkoni T, Turner MD, Turner JA, Sutherland MT, Laird AR"
image: https://files.aievolution.com/hbm1701/abstracts/36156/1674_Salo.pdf
redirect_from:
pdf: https://files.aievolution.com/hbm1701/abstracts/36156/1674_Salo.pdf
fulltext: https://ww5.aievolution.com/hbm1701/index.cfm?do=abs.viewAbs&abs=3219
github:
f1000:
doi:
dryad_doi:
figshare_doi:
altmetric_id:
category: poster
projects: [athena]
tags: []
---
{% include JB/setup %}

# Introduction

Neurosynth is a meta-analytic neuroimaging resource that provides users with tools to synthesize the fMRI literature. Neurosynth's large-scale analyses are made possible by automated data extraction and annotation. While noise rates have been estimated for Neurosynth's data extraction routines [1], no research has evaluated its annotation process or examined how this process influences meta-analytic results. As such, we applied Neurosynth's annotation method to an expert-annotated corpus to compare the two types of annotations. Additionally, we performed simulations using Neurosynth's chi-square test to measure how prediction precision and sample size affect power to detect true meta-analytic effects (i.e., activity associated with a given experimental manipulation in the underlying population).

# Methods

We utilized a corpus of 2,978 articles, where each paper was annotated using CogPO [2], a taxonomy for describing fMRI research. For a subset of 60 labels drawn from 4 fields (Behavioral Domain, Paradigm Class, Diagnosis, and Instruction), search terms were composed to combine the most relevant terms to identify each label (e.g., "pain" or "painful" for the label Pain). Labels were predicted by applying the searches to Neurosynth's annotation model. From these predictions, the proportion of selected papers that are relevant to a given label (PPV) and the proportion of papers not selected for the sample that were correctly excluded (NPV) were calculated. These measures were combined with assumptions of average true (8%; cf. [3]) and false positive rates (0.75%, using results from [4]) in fMRI experiments to perform chi-square tests (as in Neurosynth). These tests were performed to estimate a minimum necessary sample size (NMIN) for a given level of performance. In essence, the ability of a Neurosynth meta-analysis (threshold: punc<0.001) to detect a true effect associated with a construct labeled in CogPO is dependent on both Neurosynth's annotation performance (PPV/NPV) and the representation of that search term in Neurosynth's database (NDB). Finally, NMIN was compared against NDB to determine if performance was sufficient for that label. To characterize the distribution of expected values for each label, 25 iterations of 5-fold cross-validation were employed, producing 125 estimates per label.

# Results

Neurosynth's predictions were accurate enough to detect true effects meta-analytically in 43 of the 60 labels, with >50% reaching sufficient performance (i.e., NDB > NMIN) in >90% of iterations (Fig. 1). NMIN tended to decrease as the fraction of significant iterations increased (Fig. 2).
Both high- and low-performing labels were represented across all four fields, indicating that the performance of Neurosynth's annotations depends more on each label's linguistic properties than on differences between fields. Qualitatively, labels best described by a small set of relatively monosemous terms (e.g., "pain"/"painful" for the label Pain) were the most accurate. Conversely, labels described by common or long (>2 words) terms (e.g., substance use disorder) tended to perform worse. However, regardless of the terms used to describe each label, many labels contain information that is rarely reported in abstracts and may be implicitly encoded via the paradigm.

# Conclusions

Neurosynth's annotation method is able to detect true effects for most common labels. However, in spite of the tool's high performance, many labels do not achieve significance (i.e., NDB < NMIN). This includes several paradigms/domains of interest to researchers and diagnostic terms needed to exclude clinical samples.
Based on these performance estimates, it is possible that Neurosynth could benefit from a more advanced annotation procedure, such as the classifiers proposed in [5], which may provide more content-relevant patterns. These performance estimates may also aid users in determining which searches are more meaningful when they perform meta-analyses.
