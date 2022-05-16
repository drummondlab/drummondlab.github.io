---
layout: project
title: "Heterogeneity and clonal evolution of cancer"
tagline:
handle: clonal_evolution
image: 
category: project
tags:
---
{% include JB/setup %}

Cancer samples are heterogeneous, containing a mixture of normal cells and cancer cells that often represents multiple subclones. We developed, and continue to develop, tools for characterizing the heterogeneity of cancer samples using copy-number and mutation data measured on bulk samples, including ABSOLUTE ([Carter, et al., Nature Biotech 2012]) and Phylogic ([Landau, Carter, Stojanov, et al., Cell 2013]), and now also using single cells. We recently used this concept as the foundation for our extended PhylogicNDT suite of tools for analyzing tumor heterogeneity from which we can infer the clonality of mutations, estimate the number of subclones and infer their phylogenetic relationships, as well as their distribution over space and time ([Leshchiner, Livitz, Gainor, Rosebrock, et al., bioRxiv 2019]). These tools have the ability to analyze tumor evolution, heterogeneity, and dynamics based on multiple samples from the same patient that have been harvested longitudinally (e.g., pre- and post-treatment) or spatially (e.g., across multiple organs, or within the same tumor), enabling us to study resistance to therapy and introduce these concepts into clinical trial strategies. PhylogicNDT has been used to address high-priority questions in cancer biology, including: (i) detecting cancer clones; (ii) inferring phylogenetic trees; (iii) inferring order and timing of events in individual patients and across subsets of patients; (iv) associating mutational signatures to each branch in the phylogenetic tree; and (v) estimating the clonal composition of each tumor sample ([Parikh, Leshchiner, Elagina, et al., Nature Medicine 2019]; [Gruber, Bozic, Leshchiner, Livitz, et al. Nature 2019]; [Gerstung, Jolly, Leshchiner, Dentro, Gonzalez, et al., Nature 2020] (PCAWG efforts in whole genomes); [Dentro, Leshchiner, Haase, et al., Cell 2021]).

[Carter, et al., Nature Biotech 2012]: /papers/paper/absolute
[Landau, Carter, Stojanov, et al., Cell 2013]: /papers/paper/cll-clonal-evolution
[Leshchiner, Livitz, Gainor, Rosebrock, et al., bioRxiv 2019]: /papers/paper/tumour-initiation-progression
[Parikh, Leshchiner, Elagina, et al., Nature Medicine 2019]: /papers/paper/liquid-biopsies-gi-cancers
[Gruber, Bozic, Leshchiner, Livitz, et al. Nature 2019]: /papers/paper/cll-growth-dynamics
[Gerstung, Jolly, Leshchiner, Dentro, Gonzalez, et al., Nature 2020]: /papers/paper/pcawg-evol-history
[Dentro, Leshchiner, Haase, et al., Cell 2021]: /papers/paper/pcawg-heterogeneity
