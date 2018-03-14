---
layout: paper
title: "On the importance of graph search algorithms for DRGEP-based mechanism reduction methods"
year: 2011
shortref: "Niemeyer et al. <i>Combust Flame</i> 2011"
nickname: skeletal-reduction-graph-search
journal: "Combustion and Flame"
volume: 158
issue: 8
pages: 1439–1443
authors: "Niemeyer KE, Sung CJ"
image: /assets/images/papers/skeletal-reduction-graph-search-abstract.svg
arxiv: "1606.07802 [cs.DS]"
eprint: https://arxiv.org/abs/1606.07802
github:
doi: "10.1016/j.combustflame.2010.12.010"
dryad_doi:
altmetric_id:
figshare:
category: paper
published: true
embargo: false
peerreview: true
review: false
tags: [Mechanism reduction, model reduction, skeletal mechanism, DRG, DRGEP, graph search algorithm, Dijkstra's algorithm]
project: kinetic-model-reduction
bibtex: >
  @article{Niemeyer:2011,
    Author = {Kyle E Niemeyer and Chih-Jen Sung},
    Title = {On the importance of graph search algorithms for {DRGEP}-based mechanism reduction methods},
    Journal = {Combust. Flame},
    Number = {8},
    Pages = {1439--1443},
    Volume = {158},
    Year = 2011,
    Doi = {10.1016/j.combustflame.2010.12.010}
  }
---
{% include JB/setup %}

# Abstract

The importance of graph search algorithm choice to the directed relation graph with error propagation (DRGEP) method is studied by comparing basic and modified depth-first search, basic and R-value-based breadth-first search (RBFS), and Dijkstra’s algorithm. By using each algorithm with DRGEP to produce skeletal mechanisms from a detailed mechanism for n-heptane with randomly-shuffled species order, it is demonstrated that only Dijkstra’s algorithm and RBFS produce results independent of species order. In addition, each algorithm is used with DRGEP to generate skeletal mechanisms for n-heptane covering a comprehensive range of autoignition conditions for pressure, temperature, and equivalence ratio. Dijkstra’s algorithm combined with a coefficient scaling approach is demonstrated to produce the most compact skeletal mechanism with a similar performance compared to larger skeletal mechanisms resulting from the other algorithms. The computational efficiency of each algorithm is also compared by applying the DRGEP method with each search algorithm on the large detailed mechanism for n-alkanes covering n-octane to n-hexadecane with 2115 species and 8157 reactions. Dijkstra’s algorithm implemented with a binary heap priority queue is demonstrated as the most efficient method, with a CPU cost two orders of magnitude less than the other search algorithms.
