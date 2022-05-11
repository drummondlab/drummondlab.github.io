---
layout: paper
title: "Assessing diffusion model impacts on enstrophy and flame structure in turbulent lean premixed flames"
year: 2022
shortref: "Fillo et al. <i>Combust Theory Model</i> 2022"
nickname: diffusion-enstrophy-flame
journal: "Combustion Theory and Modelling"
volume: 
issue: 
pages: 
authors: "Fillo AJ, Hamlington PE, and Niemeyer KE"
image: /assets/images/papers/diffusion-enstrophy-flame.png
arxiv: "2108.08302 [physics.flu-dyn]"
eprint: https://arxiv.org/abs/2108.08302
github: 
doi: 10.1080/13647830.2022.2049882
dryad_doi:
altmetric_id: 
figshare:
zenodo: 10.5281/zenodo.6191166
category: paper
published: true
embargo: false
peerreview: true
review: false
openaccess: false
tags: [DNS, turbulent flames, diffusion, combustion]
project: turbulent-combustion
bibtex: >
  @article{Fillo2022ctm,
    doi = {10.1080/13647830.2022.2049882},
    year = 2022,
    month = {},
    volume = {},
    number = {},
    pages = {},
    author = {Aaron J. Fillo and Peter E. Hamlington and Kyle E. Niemeyer},
    title = {Assessing diffusion model impacts on enstrophy and flame structure in turbulent lean premixed flames},
    journal = {Combustion Theory and Modelling}
  }
---
{% include JB/setup %}

# Abstract

Diffusive transport of mass occurs at small scales in turbulent premixed flames. As a result, multicomponent mass diffusion, which is often neglected in direct numerical simulations (DNS) of premixed combustion, has the potential to impact both turbulence and flame characteristics at small scales. In this study, we evaluate these impacts by examining enstrophy dynamics and the internal structure of the flame for lean premixed hydrogen-air combustion, neglecting secondary Soret and Dufour effects. We performed three-dimensional DNS of these flames by implementing the Stefan–Maxwell equations in the code NGA to represent multicomponent mass transport, and we simulated statistically planar lean premixed hydrogen-air flames using both mixture-averaged and multicomponent models. The mixture-averaged model underpredicts the peak enstrophy in the multicomponent simulation by up to 13% in the flame front. Comparing the enstrophy budgets of these flames, the multicomponent simulation yields larger peak magnitudes compared to the mixture-averaged simulation in the reaction zone, showing differences of 17% and 14% in the normalised vortex stretching and viscous effects terms. In the super-adiabatic regions of the flame, the mixture-averaged model overpredicts the viscous effects by up to 13%. To assess the effect of these differences on flame structure, we reconstructed the average local internal structure of the turbulent flame through statistical analysis of the scalar gradient field. Based on this analysis, we show that large differences in viscous effects contribute to significant differences in the average local flame structure between the two models.
