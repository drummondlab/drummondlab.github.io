---
layout: paper
title: "Analysis of an approach for detecting arc positions during vacuum arc remelting based on magnetic flux density measurements"
year: 2018
shortref: "Soler and Niemeyer <i>J Manuf Sci Eng</i> 2018"
nickname: jmse-aps-analysis
journal: "ASME Journal of Manufacturing Science and Engineering"
volume: 140
issue: 7
pages: 071004
authors: "Soler MF, Niemeyer KE"
image: /assets/images/papers/jmse-aps-analysis.png
arxiv:
eprint: https://osf.io/wca5h/
github:
doi: 10.1115/1.4039439
altmetric_id:
zenodo:
figshare:
category: paper
published: true
embargo: false
peerreview: true
review: false
tags: [Vacuum arc remelting, electrical arc, finite element analysis, magnetostatics]
project: arc-position-sensing
bibtex: >
  @article{Soler2018,
    year  = 2018,
    author = {Miguel F Soler and Kyle E. Niemeyer},
    title = {Analysis of an approach for detecting arc positions during vacuum arc remelting based on magnetic flux density measurements},
    journal = {Journal of Manufacturing Science and Engineering},
    volume = 140,
    number = 7,
    pages = {071004},
    doi = {10.1115/1.4039439},
  }
---
{% include JB/setup %}

# Abstract

Vacuum arc remelting (VAR) is a melting process for the production of homogeneous ingots, achieved by applying a direct current to create electrical arcs between the input electrode and the resultant ingot. Arc behavior drives quality of the end product, but no methodology is currently used in VAR furnaces at large scale to track arcs in real time. An arc position sensing (APS) technology was recently developed as a methodology to predict arc locations using magnetic field values measured by sensors. This system couples finite element analysis of VAR furnace magnetostatics with direct magnetic field measurements to predict arc locations. However, the published APS approach did not consider the effect of various practical issues that could affect the magnetic field distribution and thus arc location predictions. In this paper, we studied how altering assumptions made in the finite element model affect arc location predictions. These include the vertical position of the sensor relative to the electrode-ingot gap, a varying electrode-ingot gap size, ingot shrinkage, and the use of multiple sensors rather than a single sensor. Among the parameters studied, only vertical distance between arc and sensor locations causes large sources of error, and should be considered further when applying an APS system. However, averaging the predicted locations from four evenly spaced sensors helps reduce this error to no more than 16% for a sensor position varying from 0.508 m below and above the electrode-ingot gap height.
