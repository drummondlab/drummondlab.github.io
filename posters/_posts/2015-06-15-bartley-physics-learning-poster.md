---
layout: poster
title: "Physics Learning Facilitates Enhanced Resting State Connectivity in Problem Solving Network"
year: "2015"
shortref: "Bartley <i>et al. OHBM</i> 2015"
nickname: 2015-06-15-bartley-physics-learning-poster
conference: "HBM"
authors: "Bartley JB, Sutherland MT, Falcone KE, Nazareth A, Riedel MC, Laird RW, Marguglio D, MacNamara K, Pruden SM, Brewe E, Laird AR"
image: /assets/images/posters/2015-06-15-bartley-physics-learning-poster.png
redirect_from:
pdf: https://osf.io/98gcq/
fulltext: https://osf.io/tajkx/
github:
f1000:
doi:
dryad_doi:
figshare_doi:
altmetric_id:
category: posters
tags: []
projects: [physics-learning]
---
{% include JB/setup %}

# Introduction
Ongoing educational research seeks to optimize effective strategies for training undergraduate students who seek to enter the STEM workforce. To this end, physics education research studies socio-cognitive models of how students think about physics to facilitate meaningful learning, which is often measured via physics problem solving abilities. No neuroimaging studies to date have examined the mechanisms by which students learn scientific problem-solving skills in a STEM discipline, although a recent resting-state functional connectivity (rsFC) study [1] observed increased coupling between neural areas implicated in reasoning among participants who received long- term reasoning training. Thus, to provide insight into the neural mechanisms of STEM learning in physics, we examined rsFC in brain regions associated with problem solving skills. We hypothesized that extensive scientific training in problem solving as part of a college-level introductory physics course would alter rsFC in a single student cohort when assessed across a semester of instruction.

# Methods
Resting state fMRI data (12-min) were acquired in 8 healthy, right-handed participants (4 female, 4 male; aged 18-21) on a 3T GE 750W scanner. Participants were undergraduates at Florida International University who held a GPA>2.5 and were first- time enrollees in a college-level introductory physics course. The 13-week course emphasized training in problem solving skills; students completed one fMRI session at the beginning of the semester (pre-instruction) and a second identical session at the end of the semester (post-instruction).
To identify candidate neural regions for further analysis, we performed an activation likelihood estimation (ALE) meta-analysis [2] on studies investigating the neural correlates of problem solving in mathematical, verbal, and visuospatial domains (Fig. 1). A mask of the ROI representing the strongest convergence across domains was extracted. Subject-level seed-based correlation analyses were carried out using the meta-analytic mask as a seed region. Analyses were performed in FSL using FEAT, registration to structural images was carried out using FLIRT, and task-free functional connectivity maps were generated and thresholded at a significance of P<0.05 for clusters of z>2.3 using FLAME [3-5].

# Results
The ALE meta-analysis identified the dorsal aspect of the left inferior frontal gyrus (IFG) as most consistently implicated across problem solving domains. Seed-based correlation
results indicated that the left IFG exhibited significant rsFC with the left middle frontal and precentral gyri across both pre- and post-instruction. Pre-instruction revealed IFG- correlated activity in a relatively broader region of the anterior aspect of the middle frontal gyrus, as compared to post-instruction. Additionally, while pre-instruction showed a small volume in the medial precuneus, post-instruction revealed much larger extent across the left precuneus and superior parietal lobule, from the inferior parietal lobule into the supramarginal gyrus (Fig. 2). Overall, Fig. 3 illustrates minimal overlap between pre-instruction and the parietal meta-analytic network associated with problem solving, while post-instruction results suggest left-lateralized recruitment of this network.

# Conclusions
Seed-based correlation analyses on pre- and post-instruction resting state data from a cohort of introductory-level college physics students revealed differential patterns of rsFC using a seed located in the left IFG. Correspondence between post-instruction and meta-analytic results suggests that a semester of physics facilitates enhanced recruitment of the posterior parietal cortex as a result of the development of problem solving skills. The observed changes in IFG-correlated activity in pre- vs. post-instruction data are consistent with the notion that intrinsic connectivity may be modulated as a result of educational experience at the university level.

# References
1.  Mackey AP, Miller Singley AT, Bunge SA. Intensive reasoning training alters patterns of brain connectivity at rest. J of Neurosci 33, 4796-803, 2013.  
2.  Eickhoff http://www.ncbi.nlm.nih.gov/pubmed/21963913  
3.  Jenkinson M, Smith SM. A Global Optimisation Method for Robust Affine Registration of Brain Images. Medical Image Analysis 5, 143-156, 2001.  
4.  Jenkinson M, Bannister P, Brady M, Smith S. Improved Optimisation for the Robust and Accurate Linear Registration and Motion Correction of Brain Images. NeuroImage 17, 825-841, 2002.  
5.  Worsley KJ. Statistical analysis of activation images. Ch 14, in Functional MRI: An Introduction to Methods, eds. Jezzard P, Matthews PM, Smith SM. OUP, 2001.
