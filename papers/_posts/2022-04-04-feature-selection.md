---
layout: paper
title: "A systematic method for selecting molecular descriptors as features when training models for predicting physiochemical properties"
year: 2022
shortref: "Comesana et al. <i>Fuel</i> 2022"
nickname: feature-selection
journal: "Fuel"
volume: 321
issue: 
pages: 123836
authors: "Comesana AE, Huntington TT, Scown CD, Niemeyer KE, and Rapp VH"
image: /assets/images/papers/feature-selection.png
arxiv: 
eprint: 
github: 
doi: 10.1016/j.fuel.2022.123836
dryad_doi:
altmetric_id: 
figshare:
zenodo: 10.5281/zenodo.5914847
category: paper
published: true
embargo: false
peerreview: true
review: false
openaccess: true
tags: [machine learning, biofuels, molecular descriptors]
project: f2ft
bibtex: >
  @article{Comesana2022fuel,
    doi = {10.1016/j.fuel.2022.123836},
    year = 2022,
    volume = 321,
    number = {},
    pages = {123836},
    author = {Ana E. Comesana and Tyler T. Huntington and Corinne D. Scown and Kyle E.Niemeyer and Vi H. Rapp},
    title = {A systematic method for selecting molecular descriptors as features when training models for predicting physiochemical properties},
    journal = {Fuel}
  }
---
{% include JB/setup %}

# Abstract

Machine learning has proven to be a powerful tool for accelerating biofuel development. Although numerous models are available to predict a range of properties using chemical descriptors, there is a trade-off between interpretability and performance. Neural networks provide predictive models with high accuracy at the expense of some interpretability, while simpler models such as linear regression often lack in accuracy. In addition to model architecture, feature selection is also critical for developing interpretable and accurate predictive models. We present a method for systematically selecting molecular descriptor features and developing interpretable machine learning models without sacrificing accuracy. Our method simplifies the process of selecting features by reducing feature multicollinearity and enables discoveries of new relationships between global properties and molecular descriptors. To demonstrate our approach, we developed models for predicting melting point, boiling point, flash point, yield sooting index, and net heat of combustion with the help of the Tree-based Pipeline Optimization Tool (TPOT). For training, we used publicly available experimental data for up to 8351 molecules. Our models accurately predict various molecular properties for organic molecules (mean absolute percent error (MAPE) ranges from 3.3% to 10.5%) and provide a set of features that are well-correlated to the property. This method enables researchers to explore sets of features that significantly contribute to the prediction of the property, offering new scientific insights. To help accelerate early stage biofuel research and development, we also integrated the data and models into a open-source, interactive web tool.
