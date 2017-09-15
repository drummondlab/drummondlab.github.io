---
layout: poster
title: "Connectivity of the human habenula using 7T resting state and meta-analytic coactivation modeling"
year: "2017"
shortref: "Bottenhorn <i>et al. OHBM</i> 2017"
nickname: bottenhorn-habenula-poster
conference: "HBM"
authors: "Bottenhorn KL, Flannery JS, Boeving ER, Riedel MC, Eickhoff SB, Sutherland MT, Laird AR"
image: /assets/pdfs/posters/bottenhorn-habenula-poster.pdf
redirect_from:
pdf: /assets/pdfs/posters/bottenhorn-habenula-poster.pdf
fulltext: https://ww5.aievolution.com/hbm1701/index.cfm?do=abs.viewAbs&abs=4059
github:
f1000:
doi:
dryad_doi:
figshare_doi:
altmetric_id:
category: posters
tags: []
---
{% include JB/setup %}

# Introduction

The habenula, a small, bilateral region posterior to the medial thalamus and dorsal to the posterior commissure, has been of interest in research on reward processing and goal-directed behavior. It receives input from the prefrontal cortex and several subcortical regions and projects to the serotonergic dorsal raphe nucleus, as well as the dopaminergic substantia nigra (SN)[1]. Despite the habenula's critical involvement in reward processing and dopamine modulation, few neuroimaging studies have focused on this region. To address this discrepancy, we used complementary approaches to assess the whole brain functional connectivity of the habenula both at rest and during task to uncover how this region may be differentially engaged across cognitive states.

# Methods

To assess resting-state functional connectivity (rsFC) of the habenula, data were collected from 28 healthy participants on a 7-Tesla Siemens MAGNETOM scanner at Auburn University. Structural T1 scans were acquired at a resolution of 0.63mmx0.63mmx0.60mm and 5 minutes of resting state data were acquired with an EPI sequence at a resolution of 0.85mmx0.85mmx1.5mm. Structural images were first aligned in in SPM8 and the habenula was manually defined in each subject's native space, by a procedure described by Lawson et al. [2]. We then used FSL's FEAT to regress each subject's mean habenula time series on the voxel-wise time series across the brain. A nonparametric one-sample t-test was performed at the group-level with FSL's randomise [3].
Meta-analytic coactivation modeling (MACM) [4] was performed using an ROI drawn by a similar method on an MNI152 template brain, dilated to account for anatomical and data processing differences across studies. We used the BrainMap database to identify studies reporting activation in this ROI across a wide range of functional neuroimaging paradigms. ALE [5,6] was used to assess coactivation across studies, thresholded at a cluster-level corrected threshold of p<0.05 (cluster-forming threshold at voxel-level p<0.001) [7]. We then performed a conjunction analysis on the results of the two analyses to determine areas in common, as well as a contrast analysis to identify regions of significant difference between rsFC and MACM.

# Results

The rsFC analysis identified functional synchrony of the habenula with ventral anterior and posterior cingulate cortices (vACC, PCC), right anterior insula (AI), SN, periaqueductal gray (PAG), precuneus, and striatum (Figure 1A). MACM results identified coactivation in portions of the striatum, dorsal ACC (dACC), medial frontal gyrus, and in both left inferior frontal sulcus and posterior parietal lobule (Figure 1B). Both rsFC and MACM revealed connectivity with the nearby thalamus, ACC, SN, and PAG (Figure 1C).

# Conclusions

We demonstrate in both rsFC and MACM analyses habenula's functional interactions with the SN, consistent with a well-documented role in modulating dopaminergic signaling associated with reward prediction error (RPE), indicating this relationship is central to habenula function, regardless of cognitive state. While we observed habenula connectivity with the ACC both at rest and during various tasks, the region of conjunction in ACC was small. The habenula's rsFC was largely restricted to vACC, and task-based MACM, to dACC. This is an important distinction, as rsFC and MACM demonstrate differential connectivity of the habenula with respect to cognitive state. The habenula appeared to be connected with PCC, precuneus, and vACC at rest, which are medial nodes of the default mode network [8]. During tasks, the habenula was connected with both AI and dACC, which are key nodes of the salience network, connections that are supported by an underlying structural architecture [1,9]. Differential connectivity at rest and during task suggests context-specific functional roles of the habenula, potentially contributing to default mode processes at rest and likely providing RPE signaling to salience network regions during tasks.
