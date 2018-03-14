---
layout: paper
title: "Recent progress and challenges in exploiting graphics processors in computational fluid dynamics"
year: 2014
shortref: "Niemeyer et al. <i>J Supercomput</i> 2014"
nickname: review-GPU-CFD
journal: "Journal of Supercomputing"
volume: 67
issue: 2
pages: 528–564
authors: "Niemeyer KE, Sung CJ"
image: /assets/images/papers/review-GPU-CFD-abstract.png
arxiv: "1309.3018 [physics.flu-dyn]"
eprint: https://arxiv.org/abs/1309.3018
github:
doi: "10.1007/s11227-013-1015-7"
dryad_doi:
altmetric_id:
figshare:
category: paper
published: true
embargo: false
peerreview: true
review: false
tags: [graphics processing unit (GPU), computational fluid dynamics (CFD), laminar flows, turbulent flow, reactive flow, CUDA]
project: slackha
bibtex: >
  @article{Niemeyer:2014js,
    Author = {Kyle E Niemeyer and Chih-Jen Sung},
    Title = {Recent progress and challenges in exploiting graphics processors in computational fluid dynamics},
    Journal = {J. Supercomput.},
    Pages = {528--564},
    Volume = {67},
    Number = {2},
    doi = {10.1007/s11227-013-1015-7},
    Year = 2014
  }
---
{% include JB/setup %}

# Abstract

The progress made in accelerating simulations of fluid flow using GPUs, and the challenges that remain, are surveyed. The review first provides an introduction to GPU computing and programming, and discusses various considerations for improved performance. Case studies comparing the performance of CPU- and GPU- based solvers for the Laplace and incompressible Navier–Stokes equations are performed in order to demonstrate the potential improvement even with simple codes. Recent efforts to accelerate CFD simulations using GPUs are reviewed for laminar, turbulent, and reactive flow solvers. Also, GPU implementations of the lattice Boltzmann method are reviewed. Finally, recommendations for implementing CFD codes on GPUs are given and remaining challenges are discussed, such as the need to develop new strategies and redesign algorithms to enable GPU acceleration.
