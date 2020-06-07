---
layout: paper
title: "Applying the swept rule for solving explicit partial differential equations on heterogeneous computing systems"
year: 2020
shortref: "Magee et al. <i>J Supercomput</i> 2020"
nickname: swept-heterogeneous
journal: "Journal of Supercomputing"
volume: 
issue: 
pages: 
authors: "Magee DJ, Walker AS, and Niemeyer KE"
image: /assets/images/papers/swept-heterogeneous.png
arxiv: "1811.08282 [cs.MS]"
eprint: https://arxiv.org/abs/1811.08282
github: https://github.com/Niemeyer-Research-Group/hSweep
doi: 10.1007/s11227-020-03340-9
dryad_doi:
altmetric_id: 
figshare:
zenodo: 10.5281/zenodo.3787144
category: paper
published: true
embargo: false
peerreview: true
review: false
openaccess: false
tags: [domain decomposition, heterogeneous computing, partial differential equations, computational fluid dynamics, communication-avoiding algorithms]
project: swept-time-space
bibtex: >
  @article{Magee2020,
    doi = {10.1007/s11227-020-03340-9},
    year = 2020,
    month = {},
    volume = {},
    number = {},
    pages = {},
    author = {Daniel J. Magee and Anthony S. Walker and Kyle E. Niemeyer},
    title = {Applying the swept rule for solving explicit partial differential equations on heterogeneous computing systems},
    journal = {Journal of Supercomputing}
  }
---
{% include JB/setup %}

# Abstract

Applications that exploit the architectural details of high-performance computing (HPC) systems have become increasingly invaluable in academia and industry over the past two decades. The most important hardware development of the last decade in HPC has been the General Purpose Graphics Processing Unit (GPGPU), a class of massively parallel devices that now contributes the majority of computational power in the top 500 supercomputers. As these systems grow, small costs such as latency—due to the fixed cost of memory accesses and communication—accumulate in a large simulation and become a significant barrier to performance. The swept time-space decomposition rule is a communication-avoiding technique for time-stepping stencil update formulas that attempts to reduce latency costs. This work extends the swept rule by targeting heterogeneous, CPU/GPU architectures representing current and future HPC systems. We compare our approach to a naive decomposition scheme with two test equations using an MPI+CUDA pattern on 40 processes over two nodes containing one GPU. The swept rule produces a factor of 1.9 to 23 speedup for the heat equation and a factor of 1.1 to 2.0 speedup for the Euler equations, using the same processors and work distribution, and with the best possible configurations. These results show the potential effectiveness of the swept rule for different equations and numerical schemes on massively parallel computing systems that incur substantial latency costs.
