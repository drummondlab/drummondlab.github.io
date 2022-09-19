---
layout: paper
title: "Tangent normalization for somatic copy-number inference in cancer genome analysis"
year: "2022"
journal: Bioinformatics
authors: Gao GF, Oh C, Saksena G, Deng D, Westlake LC, Hill BA, Reich M, Schumacher SE, Berger AC, Carter SL, Cherniack AD, Meyerson M, Tabak B, Beroukhim R, Getz G
first_authors: Gao GF, Oh C, Saksena G
senior_authors: Meyerson M, Tabak B, Beroukhim R, Getz G
corresponding_authors: Beroukhim R, Getz G
fulltext: https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btac586/6678978
doi: 10.1093/bioinformatics/btac586
pmid: 36040167
category: paper
---


# Abstract

**Motivation:** Somatic copy-number alterations (SCNAs) play an important role in cancer development. Systematic noise in sequencing and array data present a significant challenge to the inference of SCNAs for cancer genome analyses. As part of The Cancer Genome Atlas (TCGA), the Broad Institute Genome Characterization Center developed the Tangent normalization method to generate copy-number profiles using data from single-nucleotide polymorphism (SNP) arrays and whole-exome sequencing (WES) technologies for over 10,000 pairs of tumors and matched normal samples. Here, we describe the Tangent method, which uses a unique linear combination of normal samples as a reference for each tumor sample, to subtract systematic errors that vary across samples. We also describe a modification of Tangent, called Pseudo-Tangent, which enables denoising through comparisons between tumor profiles when few normal samples are available.

**Results:** Tangent normalization substantially increases signal-to-noise ratios (SNRs) compared to conventional normalization methods in both SNP array and WES analyses. Tangent and Pseudo-Tangent normalizations improve the SNR by reducing noise with minimal effect on signal and exceed the contribution of other steps in the analysis such as choice of segmentation algorithm. Tangent and Pseudo-Tangent are broadly applicable and enable more accurate inference of SCNAs from DNA sequencing and array data.

**Availability:** Tangent is available at https://github.com/broadinstitute/tangent and as a Docker image (https://hub.docker.com/r/broadinstitute/tangent). Tangent is also the normalization method for the copy-number pipeline in Genome Analysis Toolkit 4 (GATK4).

**Supplementary information:** Supplementary data are available at Bioinformatics online.


