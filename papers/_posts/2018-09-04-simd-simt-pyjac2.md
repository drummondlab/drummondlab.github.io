---
layout: paper
title: "Using SIMD and SIMT vectorization to evaluate sparse chemical kinetic Jacobian matrices and thermochemical source terms"
year: 2018
shortref: "Curtis et al. <i>Combustion and Flame</i> 2018"
nickname: simd-simt-pyjac2
journal: "Combustion and Flame"
volume:
issue:
pages:
authors: "Curtis NJ, Niemeyer KE, Sung CJ"
image: /assets/images/papers/pyjac-paper-abstract.png
arxiv: "1809.01029 [physics.comp-ph]"
eprint: https://arxiv.org/abs/1809.01029
github: https://github.com/SLACKHA/pyJac-v2
doi:
dryad_doi:
altmetric_id:
zenodo:
figshare: 10.6084/m9.figshare.6534146
category: paper
published: true
embargo: false
peerreview: true
review: false
tags: [Chemical kinetics, SIMD, SIMT, Sparse, Jacobian]
project: slackha
bibtex: >
  @article{Curtis2018pj2,
    author = {Nicholas J. Curtis and Kyle E. Niemeyer and Chih-Jen Sung},
    title = {Using {SIMD} and {SIMT} vectorization to evaluate sparse chemical kinetic {Jacobian} matrices and thermochemical source terms},
    journal = {Combustion and Flame},
    year  = 2018,
    note = {In press},
  }
---
{% include JB/setup %}

# Abstract

Accurately predicting key combustion phenomena in reactive-flow simulations, e.g., lean blow-out, extinction/ignition limits and pollutant formation, necessitates the use of detailed chemical kinetics. The large size and high levels of numerical stiffness typically present in chemical kinetic models relevant to transportation/power-generation applications make the efficient evaluation/factorization of the chemical kinetic Jacobian and thermochemical source-terms critical to the performance of reactive-flow codes. Here we investigate the performance of vectorized evaluation of constant-pressure/volume thermochemical source-term and sparse/dense chemical kinetic Jacobians using single-instruction, multiple-data (SIMD) and single-instruction, multiple thread (SIMT) paradigms. These are implemented in pyJac, an open-source, reproducible code generation platform. Selected chemical kinetic models covering the range of sizes typically used in reactive-flow simulations were used for demonstration. A new formulation of the chemical kinetic governing equations was derived and verified, resulting in Jacobian sparsities of 28.6–92.0% for the tested models. Speedups of 3.40–4.08× were found for shallow-vectorized OpenCL source-rate evaluation compared with a parallel OpenMP code on an avx2 central processing unit (CPU), increasing to 6.63–9.44× and 3.03–4.23 × for sparse and dense chemical kinetic Jacobian evaluation, respectively. Furthermore, the effect of data-ordering was investigated and a storage pattern specifically formulated for vectorized evaluation was pro- posed; as well, the effect of the constant pressure/volume assumptions and varying vector widths were studied on source-term evaluation performance. Speedups reached up to 17.60× and 45.13× for dense and sparse evaluation on the GPU, and up to 55.11× and 245.63× on the CPU over a first-order finite-difference Jacobian approach. Further, dense Jacobian evaluation was up to 19.56× and 2.84× times faster than a previous version of pyJac on a CPU and GPU, respectively. Finally, future directions for vectorized chemical kinetic evaluation and sparse linear-algebra techniques were discussed.
