---
layout: project
title: "Detecting cancer-associated genes"
tagline: ""
handle: drivers
image: 
category: project
tags: [resistance]
---
{% include JB/setup %}

Next, we analyze the detected events across a cohort of samples searching for genes/ pathways, as well as non-coding variants, that show significant signals of positive selection. To that end, we construct a statistical model of the background mutational processes and then detect genes that deviate from it. As part of constructing the models, we study and infer the mutational processes (using SignatureAnalyzer) that affected the samples (carcinogens, defects in repair mechanisms, etc.) and their timing.
We have developed tools for detecting significantly gained or lost genes in cancer (GISTIC) and genes with increased density or irregular patterns of mutations (MutSig suite, CLUMPS/ EMPRINT, MSMutSig, NetSig). Our work demonstrated the need to accurately model the heterogeneity of mutability across patients, sequence contexts and genome, when searching for cancer genes.
