---
layout: paper
title: "pyJac: Analytical Jacobian generator for chemical kinetics"
year: 2017
shortref: "Niemeyer et al. <i>Comput Phys Comm</i> 2017"
nickname: pyjac-paper
journal: "Computer Physics Communications"
volume: 215
issue:
pages: 188–203
authors: "Niemeyer KE, Curtis NJ, Sung CJ"
image: /assets/images/papers/pyjac-paper-abstract.svg
arxiv: "1605.03262 [physics.comp-ph]"
eprint: https://arxiv.org/abs/1605.03262
github: https://github.com/Niemeyer-Research-Group/pyJac-paper
f1000:
doi: 10.1016/j.cpc.2017.02.004
dryad_doi:
altmetric_id:
figshare: 10.6084/m9.figshare.4578010
category: paper
published: true
embargo: false
peerreview: true
review: false
tags: [chemical kinetics, Jacobian, SIMD, GPU]
project: slackha
bibtex: >
  @article{Niemeyer:2017py,
    Author = {Kyle E. Niemeyer and Nicholas J. Curtis and Chih-Jen Sung},
    Title = {\texttt{pyJac}: analytical Jacobian generator for chemical kinetics},
    Journal = {Computer Physics Communications},
    Pages = {188--203},
    Volume = {215},
    Year = 2017,
    doi = {10.1016/j.cpc.2017.02.004}
  }
---
{% include JB/setup %}

# Brief description

pyJac is an open-source Python-based tool that produces analytical Jacobian
matrices for chemical kinetics differential equations. This paper describes the
theory behind pyJac, including derivation of the chemical kinetic Jacobian and
all necessary components, pyJac's implementation, verification of pyJac's output,
and a performance comparison with alternative methods.

# Abstract

Accurate simulations of combustion phenomena require the use of detailed chemical kinetics in order to capture limit phenomena such as ignition and extinction as well as predict pollutant formation. However, the chemical kinetic models for hydrocarbon fuels of practical interest typically have large numbers of species and reactions and exhibit high levels of mathematical stiffness in the governing differential equations, particularly for larger fuel molecules. In order to integrate the stiff equations governing chemical kinetics, generally reactive-flow simulations rely on implicit algorithms that require frequent Jacobian matrix evaluations. Some in situ and a posteriori computational diagnostics methods also require accurate Jacobian matrices, including computational singular perturbation and chemical ex- plosive mode analysis. Typically, finite differences numerically approximate these, but for larger chemical kinetic models this poses significant computational demands since the number of chemical source term evaluations scales with the square of species count. Furthermore, existing analytical Jacobian tools do not optimize evaluations or support emerging SIMD processors such as GPUs. Here we introduce `pyJac`, a Python-based open-source program that generates analytical Jacobian matrices for use in chemical kinetics modeling and analysis. In addition to producing the necessary customized source code for evaluating reaction rates (including all modern reaction rate formulations), the chemical source terms, and the Jacobian matrix, `pyJac` uses an optimized evaluation order to minimize computational and memory operations. As a demonstration, we first establish the correctness of the Jacobian matrices for kinetic models of hydrogen, methane, ethylene, and isopentanol oxidation (number of species ranging 13–360) by showing agreement within 0.001% of matrices obtained via automatic differentiation. We then demonstrate the performance achievable on CPUs and GPUs using `pyJac` via matrix evaluation timing comparisons; the routines produced by `pyJac` outperformed first-order finite differences by 2.9–5.3 times and the existing analytical Jacobian software `TChem` by 3.9–41 times. The Jacobian matrix generator we describe here will be useful for reducing the cost of integrating chemical source terms with implicit algorithms in particular and algorithms that require an accurate Jacobian matrix in general. Furthermore, the open-source release of the program and Python-based implementation will enable wide adoption.
