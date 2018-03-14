---
layout: paper
title: "Skeletal mechanism generation for surrogate fuels using directed relation graph with error propagation and sensitivity analysis"
year: 2010
shortref: "Niemeyer et al. <i>Combust Flame</i> 2010"
nickname: skeletal-mechanism-reduction
journal: "Combustion and Flame"
volume: 157
issue: 9
pages: 1760–1770
authors: "Niemeyer KE, Sung CJ, Raju MP"
image: /assets/images/papers/skeletal-reduction-paper-abstract.svg
arxiv: "1607.05079 [physics.chem-ph]"
eprint: https://arxiv.org/abs/1607.05079
github:
doi: "10.1016/j.combustflame.2009.12.022"
dryad_doi:
altmetric_id:
figshare:
category: paper
published: true
embargo: false
peerreview: true
review: false
tags: [Mechanism reduction, model reduction, directed relation graph, skeletal mechanism, surrogate fuels, n-heptane, iso-octane, n-decane]
project: kinetic-model-reduction
bibtex: >
  @article{Niemeyer:2010a,
    Author = {Kyle E Niemeyer and Chih Jen Sung and Mandhapati P Raju},
    Title = {Skeletal mechanism generation for surrogate fuels using directed relation graph with error propagation and sensitivity analysis},
    Journal = {Combust. Flame},
    Month = sep,
    Number = {9},
    Pages = {1760--1770},
    Volume = {157},
    Year = 2010,
    Doi = {10.1016/j.combustflame.2009.12.022}
  }
---
{% include JB/setup %}

# Abstract

A novel implementation for the skeletal reduction of large detailed reaction mechanisms using the directed relation graph with error propagation and sensitivity analysis (DRGEPSA) is developed and presented with examples for three hydrocarbon components, n-heptane, iso-octane, and n-decane, relevant to surrogate fuel development. DRGEPSA integrates two previously developed methods, directed relation graph-aided sensitivity analysis (DRGASA) and directed relation graph with error propagation (DRGEP), by first applying DRGEP to efficiently remove many unimportant species prior to sensitivity analysis to further remove unimportant species, producing an optimally small skeletal mechanism for a given error limit. It is illustrated that the combination of the DRGEP and DRGASA methods allows the DRGEPSA approach to overcome the weaknesses of each, specifically that DRGEP cannot identify all unimportant species and that DRGASA shields unimportant species from removal. Skeletal mechanisms for n-heptane and iso-octane generated using the DRGEP, DRGASA, and DRGEPSA methods are presented and compared to illustrate the improvement of DRGEPSA. From a detailed reaction mechanism for n-alkanes covering n-octane to n-hexadecane with 2115 species and 8157 reactions, two skeletal mechanisms for n-decane generated using DRGEPSA, one covering a comprehensive range of temperature, pressure, and equivalence ratio conditions for autoignition and the other limited to high temperatures, are presented and validated. The comprehensive skeletal mechanism consists of 202 species and 846 reactions and the high- temperature skeletal mechanism consists of 51 species and 256 reactions. Both mechanisms are further demonstrated to well reproduce the results of the detailed mechanism in perfectly-stirred reactor and laminar flame simulations over a wide range of conditions. The comprehensive and high-temperature n-decane skeletal mechanisms are included as supplementary material with this article.
