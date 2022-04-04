---
layout: project
title: "Advances in mutational signatures"
tagline:
handle: mutational_signatures
image: 
category: project
tags:
---
{% include JB/setup %}

We were the first to use a Bayesian version of non-negative matrix factorization (NMF) for mutational signature discovery, uncovering key mechanisms by which cancers accumulate mutations. We have now optimized the performance of our SignatureAnalyzer algorithm ([Kasar, Kim, et al., Nature Communications 2015]; [Kim, Mouw, Polak, et al., Nature Genetics 2016]) by leveraging GPU computing to allow analysis of massive datasets ([Taylor-Weiner, Aguet, et al., Genome Biology 2019]), allowing it to run ~200 times faster, enabling studying larger datasets and obtaining more accurate results. Moreover, as part of the PCAWG efforts described above, we collaborated with other international leaders to describe the most comprehensive signature analysis thus far by analyzing mutational signatures across whole genomes ([Alexandrov, Kim, et al., Nature 2020]). We also have leveraged our signature analysis tools to tumors with microsatellite instability (MSI): our MSIDetect analysis revealed that a unique cohort of constitutional MMRD syndrome cases have a unique MS indel signature that correctly classifies them as MSI, even using normal cells from these patients ([Chung, Maruvka, et al., Cancer Discovery 2020]).

[Kasar, Kim, et al., Nature Communications 2015]: /papers/paper/cll-aging-signature
[Kim, Mouw, Polak, et al., Nature Genetics 2016]: /papers/paper/urothelial-carcinoma-ercc2
[Taylor-Weiner, Aguet, et al., Genome Biology 2019]: /papers/paper/scaling-with-gpus
[Alexandrov, Kim, et al., Nature 2020]: /papers/paper/pcawg-mutational-signatures
[Chung, Maruvka, et al., Cancer Discovery 2020]: /papers/paper/msi-signatures


