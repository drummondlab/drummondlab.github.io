---
layout: paper
title: "Assessing the impact of multicomponent diffusion in direct numerical simulations of premixed, high-Karlovitz, turbulent flames"
year: 2021
shortref: "Fillo et al. <i>Combust Flame</i> 2021"
nickname: multicomponent-diffusion-flame
journal: "Combustion and Flame"
volume: 223
issue: 
pages: 216-229
authors: "Fillo AJ, Schlup J, Blanquart G, and Niemeyer KE"
image: /assets/images/papers/multicomponent-diffusion-flame.png
arxiv: "2009.09840 [physics.flu-dyn]"
eprint: https://arxiv.org/abs/2009.09840
github: 
doi: 10.1016/j.combustflame.2020.09.013
dryad_doi:
altmetric_id: 
figshare:
zenodo: 10.5281/zenodo.3653489
category: paper
published: true
embargo: false
peerreview: true
review: false
openaccess: false
tags: [DNS, turbulent flames, diffusion, combustion]
project: turbulent-combustion
bibtex: >
  @article{Fillo2021cnf,
    doi = {10.1016/j.combustflame.2020.09.013},
    year = 2021,
    month = {},
    volume = 223,
    number = {},
    pages = {216--229},
    author = {Aaron J. Fillo and Jason Schlup and Guillaume Blanquart and Kyle E. Niemeyer},
    title = {Assessing the impact of multicomponent diffusion in direct numerical simulations of premixed, high-Karlovitz, turbulent flames},
    journal = {Combustion and Flame}
  }
---
{% include JB/setup %}

# Abstract

Implementing multicomponent diffusion models in numerical combustion studies is computationally expensive; to reduce cost, numerical simulations commonly use mixture-averaged diffusion treatments or simpler models. However, the accuracy and appropriateness of mixture-averaged diffusion has not been verified for three-dimensional, turbulent, premixed flames. In this study we evaluated the role of multicomponent mass diffusion in premixed, three-dimensional high Karlovitz-number hydrogen, n-heptane, and toluene flames, representing a range of fuel Lewis numbers. We also studied a premixed, unstable two-dimensional hydrogen flame due to the importance of diffusion effects in such cases. Our comparison of diffusion flux vectors revealed differences of 10-20% on average between the mixture-averaged and multicomponent diffusion models, and greater than 40% in regions of high flame curvature. Overall, however, the mixture-averaged model produces small differences in diffusion flux compared with global turbulent flame statistics. To evaluate the impact of these differences between the two models, we compared normalized turbulent flame speeds and conditional means of species mass fraction and source term. We found differences of 5–20% in the mean normalized turbulent flame speeds, which seem to correspond to differences of 5–10% in the peak fuel source terms. Our results motivate further study into whether the mixture-averaged diffusion model is always appropriate for DNS of premixed turbulent flames.
