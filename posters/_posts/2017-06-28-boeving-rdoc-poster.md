---
layout: poster
title: "Social Neuroimaging Meta-Analysis through the RDoC Lens Yields Distinct Context-Driven Cliques"
nickname: 2017-06-28-boeving-rdoc-poster
authors: "Boeving ER, Toma A, Riedel MC, Bartley JE, Bottenhorn KL, Bzdok D, Eickhoff SB, Sutherland MT, Glahn D, Laird AR"
year: "2017"
conference: "HBM"
image: /assets/images/posters/2017-06-28-boeving-rdoc-poster.png
projects: [physics-learning]
tags: [fmri]

# Content
fulltext: https://ww5.aievolution.com/hbm1701/index.cfm?do=abs.viewAbs&abs=3733
pdf: /assets/pdfs/posters/2017-06-28-boeving-rdoc-poster.pdf

# Links
doi:

# Data and code
github: 
neurovault:
openfmri:
osf:
---
{% include JB/setup %}

# Introduction

The ultimate goal of the NIMH's Research Domain Criteria (RDoC) [1] is a multidimensional approach to precision medicine for psychiatry [2]. This includes a diagnostic system based on core criteria, yet the correspondence of RDoC domain definitions to existing neurobiological data has not been fully established. Evolution from an organizational framework to diagnostic implementation necessitates characterizing how RDoC domains map onto the healthy human brain. RDoC designates social processing as one of five domains of mental function, and is fractionated into four constructs (Fig. 1): affiliation and attachment, social communication, perception of self, and perception of others. Our present objective was to unpack these social processing constructs from a data-driven perspective in order to: (1) investigate the feasibility of neuroimaging task classification under RDoC domain definitions, (2) ascertain if the RDoC framework corresponds to different or overlapping social brain regions using brain meta-analysis, (3) evaluate the correspondence between the specialized function-structure relationships of the social brain across all domains of brain function and social task themes.

# Methods

To better understand how RDoC social processing constructs correspond to task-based fMRI activation, we performed a PubMed search to identify a corpus of social neuroimaging experiments. For each published experiment, the task was identified, assigned a task label, and categorized according to the RDoC social processing construct definitions. Whole-brain coordinates were extracted, meta-analyzed using ALE, and significance tested at a cluster-level corrected threshold of p<0.05 (cluster forming threshold at voxel-level p<0.001) [3]. Neurosynth [4] functional decoding was performed on the ALE maps, providing a broad range of associated mental function terms. Term-based social network analysis (SNA) was performed using R and Cytoscape to identify the strength of thematic associations between task labels assigned during the literature search and Neurosynth terms, thus creating a data-driven exploration of the correspondence of RDoC constructs to broad function-structure relationships in the social brain.

# Results

The social neuroimaging corpus included 132 experiments reporting 1,425 foci. The ensuing meta-analysis results revealed different regions of convergence across RDoC social constructs, including amygdala and bilateral temporo-occipital cortex for affiliation and attachment; dorsolateral PFC extending into Broca's area, fusiform gyrus, and cerebellum for social communication; medial PFC, right insula and claustrum for perception of self; and left dorsomedial PFC, medial PFC, and medial posterior cortex for perception others. SNA of the Neurosynth decoding results revealed functional roles unique to each construct (e.g., reward, autobiographical, language), as well as versatile functional attributions shared between constructs (e.g., social, emotion, faces). SNA of construct thematic task associations revealed distinct collections of social task themes (e.g., mother view infant, imitation) and strength of task correspondence to each construct (Fig. 2).

# Conclusions

We observed that classification of the neuroimaging literature according to distinct social processing constructs within the RDoC framework consistently activates separate nodes within the extended social brain. Moreover, the combined functional decoding and SNA demonstrated that activation of cliques within the social brain are context-driven and rely on the unique experimental design and task selection of a given neuroimaging study. Our results establish a comparison of specialized tasks utilized in social neuroimaging with the full range of automated terms comprising human mental function, thus providing a comprehensive aperture into differences between theory driven specialization and large scale, data-driven reverse inference.
