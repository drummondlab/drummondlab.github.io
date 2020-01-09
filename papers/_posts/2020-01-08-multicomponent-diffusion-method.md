---
layout: paper
title: "A fast, low-memory, and stable algorithm for implementing multicomponent transport in direct numerical simulations"
year: 2019
shortref: "Fillo et al. <i>J Comput Phys</i> 2019"
nickname: multicomponent-diffusion-method
journal: "Journal of Computational Physics"
volume: 
issue: 
pages: 109185
authors: "Fillo AJ, Schlup J, Beardsell G, Blanquart G, and Niemeyer KE"
image: /assets/images/papers/multicomponent-diffusion-method.jpg
arxiv: "1808.05463 [physics.flu-dyn]"
eprint: https://arxiv.org/abs/1808.05463
github: 
doi: 10.1016/j.jcp.2019.109185
dryad_doi:
altmetric_id: 
figshare:
zenodo: 10.5281/zenodo.3519910
category: paper
published: true
embargo: false
peerreview: true
review: false
openaccess: false
tags: [turbulent flames, direct numerical simulation, multicomponent diffusion, mixture-averaged diffusion]
project: turbulent-combustion
bibtex: >
  @article{Fillo2019,
    doi = {10.1016/j.jcp.2019.109185},
    year = 2019,
    month = {},
    volume = {},
    number = {},
    pages = {109185},
    author = {Aaron J. Fillo and Jason Schlup and Guillaume Beardsell and Guillaume Blanquart and Kyle E. Niemeyer},
    title = {A fast, low-memory, and stable algorithm for implementing multicomponent transport in direct numerical simulations},
    journal = {Journal of Computational Physics}
  }
---
{% include JB/setup %}

# Abstract

Implementing multicomponent diffusion models in reacting-flow simulations is computationally expensive due to the challenges involved in calculating diffusion coefficients. Instead, mixture-averaged diffusion treatments are typically used to avoid these costs. However, to our knowledge, the accuracy and appropriateness of the mixture-averaged diffusion models has not been verified for three-dimensional turbulent premixed flames. In this study we propose a fast, efficient, low-memory algorithm and use that to evaluate the role of multicomponent mass diffusion in reacting-flow simulations. Direct numerical simulation of these flames is performed by implementing the Stefan–Maxwell equations in NGA. A semi-implicit algorithm decreases the computational expense of inverting the full multicomponent ordinary diffusion array while maintaining accuracy and fidelity. We first verify the method by performing one-dimensional simulations of premixed hydrogen flames and compare with matching cases in Cantera. We demonstrate the algorithm to be stable, and its performance scales approximately with the number of species squared. Then, as an initial study of multicomponent diffusion, we simulate premixed, three-dimensional turbulent hydrogen flames, neglecting secondary Soret and Dufour effects. Simulation conditions are carefully selected to match previously published results and ensure valid comparison. Our results show that using the mixture-averaged diffusion assumption leads to a 15% under-prediction of the normalized turbulent flame speed for a premixed hydrogen-air flame. This difference in the turbulent flame speed motivates further study into using the mixture-averaged diffusion assumption for DNS of moderate-to-high Karlovitz number flames.
