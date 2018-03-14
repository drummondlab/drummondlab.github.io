---
layout: paper
title: "ChemKED: A human- and machine-readable data standard for chemical kinetics experiments"
year: 2018
shortref: "Weber and Niemeyer <i>Int J Chem Kinet</i> 2018"
nickname: chemked-ijck
journal: "International Journal of Chemical Kinetics"
volume: 50
issue: 3
pages: 135–148
authors: "Weber BW, Niemeyer KE"
image: /assets/images/papers/chemked-ijck.png
arxiv: "1706.01987 [physics.chem-ph]"
eprint: https://arxiv.org/abs/1706.01987
github: https://github.com/pr-omethe-us/PyKED
doi: 10.1002/kin.21142
dryad_doi:
altmetric_id:
zenodo: 10.5281/zenodo.1006722
figshare:
category: paper
published: true
embargo: false
peerreview: true
review: false
tags: [Chemical kinetics, Experimental data, Autoignition, Data standard, ChemKED]
project: chemked
bibtex: >
  @article{Weber2018,
    doi = {10.1002/kin.21142},
    year  = 2018,
    volume = 50,
    number = 3,
    pages = {135--148},
    author = {Bryan W. Weber and Kyle E. Niemeyer},
    title = {{ChemKED}: A Human- and Machine-Readable Data Standard for Chemical Kinetics Experiments},
    journal = {International Journal of Chemical Kinetics}
  }
---
{% include JB/setup %}

# Abstract

Fundamental experimental measurements of quantities such as ignition delay times, laminar flame speeds, and species profiles (among others) serve important roles in understanding fuel chemistry and validating chemical kinetic models. However, despite both the importance and abundance of such information in the literature, the community lacks a widely adopted standard format for this data. This impedes both sharing and wide use by the community. Here we introduce a new chemical kinetics experimental data format, ChemKED and the related Python-based package for validating and working with ChemKED-formatted files called PyKED. We also review past and related efforts and motivate the need for a new solution. ChemKED currently supports the representation of autoignition delay time measurements from shock tubes and rapid compression machines. ChemKED-formatted files contain all of the information needed to simulate experimental data points, including the uncertainty of the data. ChemKED is based on the YAML data serialization language and is intended as a human- and machine-readable standard for easy creation and automated use. Development of ChemKED and PyKED occurs openly on GitHub under the BSD 3-clause license, and contributions from the community are welcome. Plans for future development include support for experimental data from laminar flame, jet-stirred reactor, and speciation measurements.
