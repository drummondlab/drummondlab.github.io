---
layout: project
title: "Detecting cancer-associated genes"
tagline: ""
handle: drivers
image: 
category: project
tags: [resistance]
---
{% include JB/setup %}

We analyze the detected somatic events (see above) across a cohort of samples searching for genes and pathways, as well as non-coding genomic elements, that show significant signals of positive selection. To that end, we construct a statistical model of the background mutational processes and then detect genes that deviate from it. We have developed tools for detecting significantly gained or lost genes in cancer, including GISTIC ([Beroukhim, Getz, et al., PNAS 2007]; [Mermel, et al., Genome Biology 2011]), and genes with increased density or irregular patterns of mutations, including the MutSig suite of tools ([Getz, Höfling H, et al. Science 2007]; [Chapman, et al., Nature 2011]; [Lawrence, Stojanov, Polak, et al., Nature 2013]; [Lawrence, et al., Nature 2014]; [Rheinbay, et al., Nature 2017]), CLUMPS/ EMPRINT ([Kamburov, et al., PNAS, 2015]), MSMutSig ([Maruvka, et al., Nature Biotechnology 2017]), NetSig ([Horn, Lawrence, et al., Nature Methods 2017]), and “driver”/“passenger” hotspots ([Hess, et al., Cancer Cell 2019]). Our work demonstrated the need to accurately model the heterogeneity of mutability across patients, sequence contexts, and the genome, when searching for cancer genes.


[Beroukhim, Getz, et al., PNAS 2007]: /papers/paper/gistic-glioma
[Mermel, et al., Genome Biology 2011]: /papers/paper/gistic2_0
[Getz, Höfling H, et al. Science 2007]: /papers/paper/comment-on-Sjoblom
[Chapman, et al., Nature 2011]: /papers/paper/mutsig1_0
[Lawrence, Stojanov, Polak, et al., Nature 2013]: /papers/paper/mutsigcv
[Lawrence, et al., Nature 2014]: /papers/paper/mutsig2cv
[Rheinbay, et al., Nature 2017]: /papers/paper/non-coding-mutations-breast-cancer
[Kamburov, et al., PNAS, 2015]: /papers/paper/clumps
[Maruvka, et al., Nature Biotechnology 2017]: /papers/paper/msi-indels
[Horn, Lawrence, et al., Nature Methods 2017]: /papers/paper/netsig
[Hess, et al., Cancer Cell 2019]: /papers/paper/passenger-hotspot-mutations