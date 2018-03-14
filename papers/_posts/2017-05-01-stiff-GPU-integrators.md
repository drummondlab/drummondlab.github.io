---
layout: paper
title: "An investigation of GPU-based stiff chemical kinetics integration methods"
year: 2017
shortref: "Curtis et al. <i>Combust Flame</i> 2017"
nickname: stiff-GPU-integrators
journal: "Combustion and Flame"
volume: 179
issue:
pages: 312–324
authors: "Curtis NJ, Niemeyer KE, Sung CJ"
image: /assets/images/papers/integrator-abstract.png
arxiv: "1607.03884 [physics.comp-ph]"
eprint: https://arxiv.org/abs/1607.03884
github: https://github.com/arghdos/GPU-Integration-Paper
doi: 10.1016/j.combustflame.2017.02.005
dryad_doi:
altmetric_id:
figshare: 10.6084/m9.figshare.4596847
category: paper
published: true
embargo: false
peerreview: true
review: false
tags: [chemical kinetics, stiff chemistry, integration algorithms, GPU, SIMT]
project: slackha
bibtex: >
  @article{Curtis:2017cf,
    Author = {Nicholas J. Curtis and Kyle E. Niemeyer and Chih-Jen Sung},
    Title = {An investigation of {GPU}-based stiff chemical kinetics integration methods},
    Journal = {Combustion and Flame},
    Pages = {312--324},
    Volume = {179},
    Year = 2017,
    doi = {10.1016/j.combustflame.2017.02.005}
  }
---
{% include JB/setup %}

# Abstract

A fifth-order implicit Runge--Kutta method and two fourth-order exponential integration methods equipped with Krylov subspace approximations were implemented for the GPU and paired with the analytical chemical kinetic Jacobian software `pyJac`. The performance of each algorithm was evaluated by integrating thermochemical state data sampled from stochastic partially stirred reactor simulations and compared with the commonly used CPU-based implicit integrator `CVODE`. We estimated that the implicit Runge--Kutta method running on a single GPU is equivalent to `CVODE` running on 12--38 CPU cores for integration of a single global integration time step of 1e-6 s with hydrogen and methane models. In the stiffest case studied---the methane model with a global integration time step of 1e-4 s---thread divergence and higher memory traffic significantly decreased GPU performance to the equivalent of `CVODE` running on approximately three CPU cores. The exponential integration algorithms performed more slowly than the implicit integrators on both the CPU and GPU. Thread divergence and memory traffic were identified as the main limiters of GPU integrator performance, and techniques to mitigate these issues were discussed. Use of a finite-difference Jacobian on the GPU---in place of the analytical Jacobian provided by `pyJac`---greatly decreased integrator performance due to thread divergence, resulting in maximum slowdowns of 7.11--240.96 times; in comparison, the corresponding slowdowns on the CPU were just 1.39--2.61 times, underscoring the importance of use of an analytical Jacobian for efficient GPU integration. Finally, future research directions for working towards enabling realistic chemistry in reactive-flow simulations via GPU/SIMD-accelerated stiff chemical kinetic integration were identified.
