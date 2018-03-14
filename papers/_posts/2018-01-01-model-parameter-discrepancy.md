---
layout: paper
title: "Assessing impacts of discrepancies in model parameters on autoignition model performance: A case study using butanol"
year: 2018
shortref: "Sirumalla et al. <i>Combust Flame</i> 2018"
nickname: model-parameter-discrepancy
journal: "Combustion and Flame"
volume: 190
issue:
pages: 284–292
authors: "Sirumalla SK, Mayer MA, Niemeyer KE, West RH"
image: /assets/images/papers/model-parameter-discrepancy.png
arxiv: "1708.02232 [physics.chem-ph]"
eprint: https://arxiv.org/abs/1708.02232
github:
doi: 10.1016/j.combustflame.2017.11.018
dryad_doi:
altmetric_id:
zenodo: 10.5281/zenodo.1054013
category: paper
published: true
embargo: false
peerreview: true
review: false
tags: [butanol, chemical kinetic models, model comparison, uncertainty]
project: chemked
bibtex: >
  @article{Sirumalla2018,
    doi = {10.1016/j.combustflame.2017.11.018},
    year  = 2018,
    month = apr,
    volume = {190},
    pages = {284--292},
    author = {Sai Krishna Sirumalla and Morgan A. Mayer and Kyle E. Niemeyer and Richard H. West},
    title = {Assessing impacts of discrepancies in model parameters on autoignition model performance: A case study using butanol},
    journal = {Combustion and Flame}
  }
---
{% include JB/setup %}

# Abstract

Side-by-side comparison of detailed kinetic models using a new tool to aid recognition of species structures reveals significant discrepancies in the published rates of many reactions and thermochemistry of many species. We present a first automated assessment of the impact of these varying parameters on observable quantities of interest—in this case, autoignition delay—using literature experimental data. A recent kinetic model for the isomers of butanol was imported into a common database. Individual reaction rate and thermodynamic parameters of species were varied using values encountered in combustion models from recent literature. The effects of over 1600 alternative parameters were considered. Separately, experimental data were collected from recent publications and converted into the standard YAML-based ChemKED format. The Cantera-based model validation tool, PyTeCK, was used to automatically simulate autoignition using the generated models and experimental data, to judge the performance of the models. Taken individually, most of the parameter substitutions have little effect on the overall model performance, although a handful have quite large effects, and are investigated more thoroughly. Additionally, models varying multiple parameters simultaneously were evolved using a genetic algorithm to give fastest and slowest autoignition delay times, showing that changes exceeding a factor of 10 in ignition delay time are possible by cherry-picking from only accepted, published parameters. All data and software used in this study are available openly.
