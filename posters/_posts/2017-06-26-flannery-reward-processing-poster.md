---
layout: poster
title: "Meta-analytic clustering dissociates activation and behavior profiles across reward processing data"
year: "2017"
shortref: "Flannery <i>et al. OHBM</i> 2017"
nickname: flannery-reward-processing-poster
conference: "HBM"
authors: "Flannery JS, Riedel MC, Poudel R, Salo T, Bottenhorn KL, Hill LD, Laird AR, Sutherland MT"
image: /assets/images/posters/flannery-reward-processing-poster.png
redirect_from:
pdf: https://files.aievolution.com/hbm1701/abstracts/37911/1428_Flannery.pdf
pdflink: https://ww5.aievolution.com/hbm1701/index.cfm?do=abs.viewAbs&abs=2885
github:
f1000:
doi:
dryad_doi:
figshare_doi:
altmetric_id:
category: poster
tags: [poster]
---
{% include JB/setup %}

# Introduction

The broad psychological construct of reward processing involves multiple aspects, including assigning value to sensory stimuli, learning outcome contingencies, and adapting behavior to maximize desired outcomes [1-2]. As neuroimaging studies often utilize complex reward processing tasks, it can be difficult to associate specific brain regions/networks with distinct aspects of reward processing. To elucidate brain regions, and in turn networks, consistently involved in reward processing and the more precise mental operations they support, we applied an emergent meta-analytic clustering approach to the extensive body of reward processing neuroimaging results archived in the BrainMap database (www.brainmap.org). We created meta-analytic groupings (MAGs) of experiments based on the similarity of brain activation patterns and then performed behavioral inference assessments on those MAGs.

# Methods

We first constructed a pair-wise cross-correlation matrix quantifying the similarity between brain activation patterns from each of the 712 experiments in BrainMap classified under the reward, gambling, classical conditioning, and delay discounting meta-analytic labels. We then performed k-means clustering across multiple model orders to organize experiments into MAGs by maximizing between-group differences and minimizing within-group differences of experiment correlation distributions. Next, significant convergence of brain activation for each MAG in the optimal model order (determined by 4 cluster stability metrics) was computed using activation likelihood estimation (ALE) [3]. Finally, we performed exploratory analyses to generate behavioral profiles for each MAG using metadata about the task specifics associated with each contributing experiment. As assigned BrainMap metadata may lack experiment-specific details, we enhanced this information by re-coding more precise task features (e.g., risk vs. amount, reward omission) associated with each experiment using a blind, inter-rater reliability approach.

# Results

Clustering metrics indicated that 4 MAGs was the optimal parcellation of the 712 reward processing experiments. ALE images generated for each MAG (Fig. 1) identified dissociable regions of convergent activation linked with reward processing, including the amygdala (MAG1, orange), anterior insula, dlPFC (MAG2, green), OFC, mPFC (MAG3, blue), striatum and cingulate (MAG4, purple). The behavioral profile for MAG4 (Fig. 2, purple), involved the terms reward omission, unexpected outcomes, outcome valence, and anticipation, and was generally consistent with a well-characterized role in reward prediction error (RPE) encoding [4]. The behavioral profile for MAG2 (Fig. 2, green) included the terms reward learning, rewarded performance, and rewarded accuracy, suggesting a role in learning outcome contingencies and adapting future behavior [5-6]. The behavioral profile for MAG1 (Fig. 2, orange) included the terms delay, delay discounting, outcome probability, and decision advice, and the profile for MAG3 (Fig. 2, blue) included the terms amount estimation, reward price, purchasing, aversive avoidance, and predator-prey paradigm. These profiles suggest that both MAGs are involved in using information to predict outcomes, with perhaps MAG3 more strongly linked with negative outcomes and motivating avoidance.

# Conclusions

Four MAGs with distinct brain activation patterns and behavioral profiles were identified across reward processing experiments, involving RPE encoding (MAG4), outcome learning (MAG2), value prediction (MAG1, MAG3), and negative value prediction (MAG3). Our meta-analytic results correspond with distinct steps in the RPE learning model [5-7]. This quantitative parcellation of reward processing experiments highlights the potential utility of meta-analytic strategies to dissociate brain activation patterns, during complex cognitive processes, across a large body of neuroimaging experiments.
