---
layout: poster
title: "Intrinsic connectivity and behavioral parcellation of the cerebellum through meta-analytic modeling"
year: "2013"
nickname: 2013-06-17-riedel-cerebellum-poster
conference: "HBM"
authors: "Riedel MC, Ray KL, Hernandez Z, Fox PM, Uecker A, Eickhoff SB, Fox PT, Laird AR"
image: /assets/images/posters/2013-06-17-riedel-cerebellum-poster.png
redirect_from:
pdf: https://osf.io/n8r2t/
fulltext:
osf: https://osf.io/hfs8p/
github:
f1000:
doi:
dryad_doi:
figshare_doi:
category: posters
tags: []
---
{% include JB/setup %}

# Introduction
Meta-analytic methods have recently been developed that pool results from a broad range of independently published experiments to draw statistically significant conclusions about brain connectivity. These meta-analytic co-activation patterns provide results that are analogous to resting state functional connectivity maps, but the behavioral specificity of the observed patterns may be examined from the behavioral conditions employed in the contributing task-specific experiments. MACM provides an opportunity to model the connectivity of cerebellar structures from a functional perspective.

# Methods
The regions of the cerebellum were defined according to the probabilistic atlas developed by Diedrichsen et al. (2009), as this is the best and most widely accepted structural parcellation strategy of the human cerebellum.
Sleuth was used to search the BrainMap database for all experiments, under the context of normal mapping, reporting a coordinate of activation within each of the cerebellar structures. The following structures were omitted from further analysis due to insufficient data: X, Dentate, Fastigial, and Interposed of the Left and Right hemispheres, and VIIa Crus I, VIIa Crus II, VIIb, VIIIb, and X Vermis. GingerALE was then used to generate a MACM for each of the remaining 21 cerebellar structures based on the coordinates reported from each Sleuth search.
Structures with similar connectivity patterns were identified through hierarchical clustering analysis (HCA) of a correlation matrix of the cerebellar MACMs. In a separate, but parallel analysis, metadata histograms were created by determining the number of coordinates reported for each behavioral domain, paradigm class, and stimulus type that were located within each cerebellar structure.  Then, structures with similar metadata properties were identified through HCA of a correlation matrix of the metadata histograms. The “correlation” distance method, and “complete” linkage methods were used to produce a dendrogram from which the clusters of structures were visually identified.

# Results
The dendrograms produced from each clustering analysis (Figure 1) may be examined from a two-cluster or four-cluster solution.
Two distinct clusters with cophenetic distances greater than 1.5 can be visually identified in each dendrogram. The top cluster in the Behavioral Metadata histogram shows 88% concordance with the top cluster in the MACM-Based Connectivity histogram. The bottom cluster in the Behavioral Metadata histogram shows 77% concordance with the bottom cluster in the MACM-Based Connectivity histogram. Interestingly, the clusters do not show preference toward lateralization. The two clusters may further be decomposed into four distinctly different clusters. The clusters in the Behavioral Metadata histogram show 100%, 67%, 67%, and 40% concordance, respectively, with the clusters in the MACM-Based Connectivity histogram.
Behaviorally, the first cluster of the four-cluster solution in the MACM-Based Connectivity analysis shows preference toward emotion, the second shows preference toward action and perception, the third cluster shows uniform behavioral preference, and the fourth cluster shows preference toward interoception, pain, and cognition. Additionally, the clusters from the Behavioral Metadata analysis showed similar behavioral preferences.

# Conclusions
Functional connectivity of the human cerebellum was explored through MACM, and HCA was used to identify those structures with similar connectivity patterns. Additionally, clusters with similar structural contribution were identified through HCA of cerebellar structure metadata histograms. The cerebellum has been believed to be a functionally homogeneous structure, however, behavioral preferences have been inferred for clusters of cerebellar structures.

# References
- Diedrichsen J, Balsters, JH, Flavell J, Cussans E, Ramnani N. A probabilistic MR atlas of the human cerebellum. NeuroImage. 2009 Feb. 5;46:39-46.
- Robinson JL, Laird AR, Glahn DC, Lovallo WR, Fox PT. Metaanalytic Connectivity Modeling: Delineating the Functional Connectivity of the Human Amygdala. Human Brain Mapping. 2009 July 14;31:173-184.
