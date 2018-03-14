---
layout: paper
title: "Accelerating solutions of one-dimensional unsteady PDEs with GPU-based swept time–space decomposition"
year: 2018
shortref: "Magee and Niemeyer <i>J Comput Phys</i> 2018"
nickname: GPU-swept-rule-1D
journal: "Journal of Computational Physics"
volume: 357
issue:
pages: 338–352
authors: "Magee DJ, Niemeyer KE"
image: /assets/images/papers/GPU-swept-rule-1D.png
arxiv: "1705.03162 [physics.comp-ph]"
eprint: https://arxiv.org/abs/1705.03162
github: https://github.com/Niemeyer-Research-Group/1DSweptCUDA
doi: 10.1016/j.jcp.2017.12.028
dryad_doi:
altmetric_id:
zenodo: 10.5281/zenodo.570984
figshare: 10.6084/m9.figshare.4968050.v4
category: paper
published: true
embargo: false
peerreview: true
review: false
tags: [GPU computing, partial differential equations, computational fluid dynamics, High-performance computing, communication-avoiding algorithms, domain decomposition]
project: swept-time-space
bibtex: >
  @article{Magee2018,
    doi = {10.1016/j.jcp.2017.12.028},
    year  = 2018,
    month = mar,
    volume = {357},
    pages = {338--352},
    author = {Daniel J Magee and Kyle E. Niemeyer},
    title = {Accelerating solutions of one-dimensional unsteady PDEs with GPU-based swept time–space decomposition},
    journal = {Journal of Computational Physics}
  }
---
{% include JB/setup %}

# Abstract

The expedient design of precision components in aerospace and other high-tech industries requires simulations of physical phenomena often described by partial differential equations (PDEs) without exact solutions. Modern design problems require simulations with a level of resolution difficult to achieve in reasonable amounts of time—even in effectively parallelized solvers. Though the scale of the problem relative to available computing power is the greatest impediment to accelerating these applications, significant performance gains can be achieved through careful attention to the details of memory communication and access. The swept time–space decomposition rule reduces communication between sub-domains by exhausting the domain of influence before communicating boundary values. Here we present a GPU implementation of the swept rule, which modifies the algorithm for improved performance on this processing architecture by prioritizing use of private (shared) memory, avoiding interblock communication, and overwriting unnecessary values. It shows significant improvement in the execution time of finite-difference solvers for one-dimensional unsteady PDEs, producing speedups of 2--9x for a range of problem sizes, respectively, compared with simple GPU versions and 7--300x compared with parallel CPU versions. However, for a more sophisticated one-dimensional system of equations discretized with a second-order finite-volume scheme, the swept rule performs 1.2--1.9x worse than a standard implementation for all problem sizes.
