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

We were the first to use a Bayesian version of non-negative matrix factorization (NMF) for mutational signature discovery, uncovering key mechanisms by which cancers accumulate mutations. We have now optimized the performance of our SignatureAnalyzer algorithm ([Kasar, Kim, et al., Nature Communications 2015]; [Kim, Mouw, Polak, et al., Nature Genetics 2016]) by leveraging GPU computing to allow analysis of massive datasets ([Taylor-Weiner, Aguet, et al., Genome Biology 2019]), accelerating it to run ~200 times faster and enabling us to study larger datasets and obtain more accurate results. We demonstrated that asymmetries in mutational signatures can be used to study how and when they are generated, with signatures having transcriptional or replication asymmetries, describing a new mechanism of transcription-coupled damage and finding that APOBEC affects DNA during replication ([Haradhvala, Polak, et al., Cell 2016]). By studying a mutational signature that is most common in breast cancer and is associated with germline mutations in BRCA1/2 genes and loss of homologous recombination repair, we found that promoter methylation of RAD51C can also cause this signature ([Polak, Kim, Braunstein, et al., Nature Genetics 2017]). We also show that concurrent loss of mismatch repair and polymerase proofreading creates a unique signature, not represented by a linear combination of the two associated signatures ([Haradhvala, Kim, Maruvka, et al., Nature Communications 2018]).

Moreover, as part of the PCAWG efforts described above, we collaborated with other international leaders to describe the most comprehensive set of mutation signatures thus far by analyzing mutational signatures across a large number of whole genomes and whole exomes ([Alexandrov, Kim, et al., Nature 2020]). We also have applied our signature analysis tools to tumors with microsatellite instability (MSI): our MSIDetect analysis revealed that a unique cohort of constitutional MMRD syndrome cases have unique MS indel signatures that can be used to correctly classify them as MSI, even using normal cells from these patients ([Chung, Maruvka, et al., Cancer Discovery 2020]).


[Kasar, Kim, et al., Nature Communications 2015]: /papers/paper/cll-aging-signature
[Kim, Mouw, Polak, et al., Nature Genetics 2016]: /papers/paper/urothelial-carcinoma-ercc2
[Taylor-Weiner, Aguet, et al., Genome Biology 2019]: /papers/paper/scaling-with-gpus
[Haradhvala, Polak, et al., Cell 2016]: /papers/paper/mutational-strand-asymmetries
[Polak, Kim, Braunstein, et al., Nature Genetics 2017]: /papers/paper/deficient-hr-repair-signature 
[Haradhvala, Kim, Maruvka, et al., Nature Communications 2018]: /papers/paper/lof-pole-mmr
[Alexandrov, Kim, et al., Nature 2020]: /papers/paper/pcawg-mutational-signatures
[Chung, Maruvka, et al., Cancer Discovery 2020]: /papers/paper/msi-signatures


