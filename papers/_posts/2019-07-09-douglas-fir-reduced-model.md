---
layout: paper
title: "Reduced Gas-Phase Kinetic Models for Burning of Douglas Fir"
year: 2019
shortref: "Glusman et al. <i>Front. Mech. Eng.</i> 2019"
nickname: douglas-fir-reduced-model
journal: Frontiers in Mechanical Engineering
volume: 5
issue: 
pages: 40
authors: "Glusman JF, Niemeyer KE, Makowiecki AS, Wimer NT, Lapointe C, Rieker GB, Hamlington PE, and Daily JW"
image: /assets/images/papers/douglas-fir-reduced-model.jpg
arxiv:
eprint:
github:
doi: 10.3389/fmech.2019.00040
dryad_doi:
altmetric_id: 63334576
figshare:
category: paper
published: true
embargo: false
peerreview: true
review: false
openaccess: true
tags: [wildland fire, chemical kinetics, Douglas Fir, biomass, model reduction]
project: smoldering-combustion
bibtex: >
  @article{Glusman2019,
    doi = {10.3389/fmech.2019.00040},
    year = 2019,
    month = jul,
    volume = {5},
    author = {Jeffrey F. Glusman and Kyle E. Niemeyer and Amanda S. Makowiecki and Nicholas T. Wimer and Caelan Lapointe and Gregory B. Rieker and Peter E. Hamlington and John W. Daily},
    title = {Reduced Gas-Phase Kinetic Models for Burning of Douglas Fir},
    journal = {Frontiers in Mechanical Engineering}
  }
---
{% include JB/setup %}

# Abstract

New skeletal chemical kinetic models have been obtained by reducing a detailed model for the gas-phase combustion of Douglas Fir pyrolysis products. The skeletal models are intended to reduce the cost of high-resolution wildland fire simulations, without substantially affecting accuracy. The reduction begins from a 137 species, 4,533 reaction detailed model for combustion of gas-phase biomass pyrolysis products, and is performed using the directed relation graph with error propagation and sensitivity analysis method, followed by further reaction elimination. The reduction process tracks errors in the ignition delay time and peak temperature for combustion of gas-phase products resulting from the pyrolysis of Douglas Fir. Three skeletal models are produced as a result of this process, corresponding to a larger 71 species, 1,179 reaction model with 1% error in ignition delay time compared to the detailed model, an intermediate 54 species, 637 reaction model with 24% error, and a smaller 54 species, 204 reaction model with 80% error. Using the skeletal models, peak temperature, volumetric heat release rate, premixed laminar flame speed, and diffusion flame extinction temperatures are compared with the detailed model, revealing an average maximum error in these metrics across all conditions considered of less than 1% for the larger skeletal model, 10% for the intermediate model, and 24% for the smaller model. All three skeletal models are thus sufficiently accurate and computationally efficient for implementation in high-resolution wildland fire simulations, where other model errors and parametric uncertainties are likely to be greater than the errors introduced by the reduced kinetic models presented here.
