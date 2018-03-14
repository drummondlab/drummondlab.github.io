---
layout: paper
title: "Reduced chemistry for a gasoline surrogate valid at engine-relevant conditions"
year: 2015
shortref: "Niemeyer and Sung <i>Energy Fuels</i> 2015"
nickname: reduced-gasoline-surrogate
journal: "Combustion and Flame"
volume: 29
issue: 2
pages: 1172–1185
authors: "Niemeyer KE, Sung CJ"
image: /assets/images/papers/reduced-gasoline-surrogate-abstract.svg
arxiv: "1410.0401 [physics.chem-ph]"
eprint: http://arxiv.org/abs/1410.0401
github:
doi: "10.1021/ef5022126"
dryad_doi:
altmetric_id:
figshare:
category: paper
published: true
embargo: false
peerreview: true
review: false
tags: [mechanism reduction, model reduction, gasoline, DRGEPSA, QSS, isomer lumping]
project: kinetic-model-reduction
bibtex: >
  @article{Niemeyer:2015ef,
    Author = {Kyle E Niemeyer and Chih-Jen Sung},
    Title = {Reduced chemistry for a gasoline surrogate valid at engine-relevant conditions},
    Journal = {Energy Fuels},
    Year = 2015,
    Doi = {10.1021/ef5022126},
    Volume = {29},
    Number = {2},
    Pages = {1172--1185}
  }
---
{% include JB/setup %}

# Abstract

A detailed mechanism for the four-component RD387 gasoline surrogate developed by Lawrence Livermore National Laboratory has shown good agreement with experiments in engine-relevant conditions. However, with 1388 species and 5933 reversible reactions, this detailed mechanism is far too large to use in practical engine simulations. Therefore, reduction of the detailed mechanism was performed using a multi-stage approach consisting of the DRGEPSA method, unimportant reaction elimination, isomer lumping, and analytic QSS reduction based on CSP analysis. A new greedy sensitivity analysis algorithm was developed and demonstrated to be capable of removing more species for the same error limit compared to the conventional sensitivity analysis used in DRG-based skeletal reduction methods. Using this new greedy algorithm, several skeletal and reduced mechanisms were developed at varying levels of complexity and for different target condition ranges. The final skeletal and reduced mechanisms consisted of 213 and 148 species, respectively, for a lean-to-stoichiometric, low-temperature HCCI-like range of conditions. For a lean-to-rich, high-temperature, SI/CI-like range of conditions, skeletal and reduced mechanisms were developed with 97 and 79 species, respectively. The skeletal and reduced mechanisms in this study were produced using an error limit of 10% and validated using homogeneous autoignition simulations over engine-relevant conditions—all showed good agreement in predicting ignition delay. Furthermore, extended validation was performed, including comparison of autoignition temperature profiles, PSR temperature response curves and extinction turning points, and laminar flame speed calculations. All the extended validation showed results within the 10% error limit, demonstrating the adequacy of the resulting reduced chemistry.
