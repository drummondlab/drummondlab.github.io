---
layout: paper
title: "An automated target species selection method for dynamic adaptive chemistry simulations"
year: 2015
shortref: "Curtis et al. <i>Combust Flame</i> 2015"
nickname: target-species-selection
journal: "Combustion and Flame"
volume: 162
issue: 4
pages: 1358–1374
authors: "Curtis NJ, Niemeyer KE, Sung CJ"
image: /assets/images/papers/target-species-selection-abstract.svg
arxiv:
github:
doi: "10.1016/j.combustflame.2014.11.004"
dryad_doi:
altmetric_id:
figshare:
category: paper
published: true
embargo: false
peerreview: true
review: false
tags: [mechanism reduction, dynamic adaptive chemistry, directed relation graph with error propagation, target species selection]
project: kinetic-model-reduction
bibtex: >
  @article{Curtis:2015,
    Author = {Nicholas J Curtis and Kyle E Niemeyer and Chih-Jen Sung},
    Title = {An automated target species selection method for dynamic adaptive chemistry simulations},
    Journal = {Combust. Flame},
    Volume = {162},
    Number = {4},
    Pages = {1358--1374}
    Year = 2015
  }
---
{% include JB/setup %}

# Abstract

The relative importance index (RII) method for determining appropriate target species for dynamic adaptive chemistry (DAC) simulations using the directed relation graph with error propagation (DRGEP) method is developed. The adequacy and effectiveness of this RII method is validated for two fuels: n-heptane and isopentanol, representatives of a ground transportation fuel component and bio-alcohol, respectively.

The conventional method of DRGEP target species selection involves picking an unchanging (static) set of target species based on the combustion processes of interest; however, these static target species may not remain important throughout the entire combustion simulation, adversely affecting the accuracy of the method. In particular, this behavior may significantly reduce the accuracy of the DRGEP-based DAC approach in complex multidimensional simulations where the encountered combustion conditions cannot be known a priori with high certainty. Moreover, testing multiple sets of static target species to ensure the accuracy of the method is generally computationally prohibitive. Instead, the RII method determines appropriate DRGEP target species solely from the local thermo-chemical state of the simulation, ensuring that accuracy will be maintained. Further, the RII method reduces the expertise required of users to select DRGEP target species sets appropriate to the combustion phenomena under consideration.

Constant volume autoignition simulations run over a wide range of initial conditions using detailed reaction mechanisms for n-heptane and isopentanol show that the RII method is able to maintain accuracy even when traditional static target species sets fail, and are even more accurate than expert-selected target species sets. Additionally, the accuracy and efficiency of the RII method are compared to those of static target species sets in single-cell engine simulations under homogeneous charge compression ignition conditions. For simulations using more stringent DRGEP thresholds, the RII method performs similarly to that of the static target species sets. With a larger DRGEP threshold, the RII method is significantly more accurate than the static target species sets without imposing significant computational overhead.

Furthermore, the applicability of the RII method to a DRG-based DAC scheme is discussed.
