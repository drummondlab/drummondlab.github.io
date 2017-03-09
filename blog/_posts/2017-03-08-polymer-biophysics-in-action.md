---
layout: post
title: "Polymer biophysics of Pab1: expectations vs. reality"
description: ""
author: "Joshua Riback"
author_handle: jar
category: blog
published: true
theme: lab
tags: []
---
{% include JB/setup %}
Hi, I am Joshua Riback, a student in the [Biophysical Sciences graduate program](http://biophysics.uchicago.edu/) co-advised in both the Drummond and [Sosnick]( http://sosnick.uchicago.edu/) Labs. 

Recently we have published a paper characterizing an intersection between polymer (bio)physics and cell biology. Polymer biophysics elucidates the principles governing the organized demixing of molecules inside of cells. Protein and RNA can demix into massive assemblies such as gels, liquids, and fibers. They lack a fixed stoichiometry so we refer to them as quinary assemblies. We focus on the properties of assemblies composed of poly(A)-binding protein (Pab1) that form in eukaryotic cells in response to cellular stress.  We find that the demixing of Pab1 has been tuned for rapid response to stress and is beneficial for surviving that stress. For a little more background, see [Allan's post](/blog/about-adaptive-phase-separation) on our paper.

For those who wish to dive into the paper, please proceed [here](/papers/paper/adaptive-phase-separation). Since our story differs significantly from the current results in the field, I have focused this blog post on the polymer biophysics I expected would govern Pab1 demixing vs. reality. 

# Polymer biophysics of Pab1: Expectations

Prior to obtaining data and based on my reading of the literature in the field, the principles I expected were going to govern Pab1 demixing were: 

1. Pab1 would have an intrinsically disordered region ('IDR' or non-foldable low complexity regions) that would allow different Pab1 molecules to flexibly interact in the quinary assembly.

2. Demixing would be favorable due to multivalent interactions between RNA and Pab1 and between IDRs on different Pab1 molecules.

3. Pab1's IDR would promote demixing through interactions between charge, aromatic, or polar residues (i.e. coulomb interactions or hydrogen bonds) and not from aliphatic residues because they are depleted in IDRs. The interacting residues would be enriched in the composition of the IDR.

4. Pab1's IDR would be collapsed. When demixed, Pab1's IDR would interact with other Pab1 molecules; but when monomeric, Pab1's IDR would self-interact causing it to collapse.


# Polymer biophysics of Pab1: Reality

## Expectation: #1 
> Pab1 would have an IDR that would allow different Pab1 molecules to flexibly interact in the quinary assembly.

- [x] Pab1 has an IDR called the proline-rich domain or P domain. 
- [x] Deletion of the P domain perturbs stress-triggered demixing of Pab1 into quinary assemblies *in vitro* and *in vivo*. 


## Expectation: #2
> Demixing would require multivalent interactions between RNA and Pab1 and/or between IDRs on different Pab1 molecules.

- [ ] *In vitro*, Pab1 demixing does not require RNA; RNA destabilizes demixing. How does this work in cells? Chris considers this further in his [FAQ section](/blog/Pab1-Demixing-FAQ)

- [ ] Although the P domain is the strongest single domain enhancer of demixing, it is not required for demixing. Multivalent interactions between Pab1's folded domains are required for demixing and govern the salt and pH sensitivity of demixing. When splitting the protein in half, only the half **without** the IDR can demix.


## Expectation: #3
> Pab1's IDR would promote demixing through interactions between charge, aromatic, or polar residues (ie coulomb interactions or hydrogen bonds) and not from aliphatic residues because they are depleted in IDRs. The interacting residues would be enriched in the composition of the IDR.

IDRs are understood by their compositional properties. Based on known IDRs that can demix, important compositional features have been identified (see the [review](http://www.nature.com/nphys/journal/v11/n11/abs/nphys3532.html)). One of these IDRs, the RGG domain is [necessary for demixing](http://www.pnas.org/content/112/23/7189.long) of the P-granule protein, LAF-1. The composition of the P domain is different from that of the RGG domain and these other known IDRs implicated in demixing.   

<p align="center">
<img src="/assets/images/JAR_compositionPDOMandRGGDOM.png" width="75%">
</p>

For clarity, the compositional plots are fraction residues of each type, and for the evolutionary composition plot, each row is a different species. The hydrophobicity of the residue groups are roughly aromatic, aliphatic, small, polar, and ionizable from most to least hydrophobic.

- [ ] The P domain is strongly depleted for ionizable residues. This composition feature is conserved.

- [ ] The P domain does not have unusual polar or aromatic content. This is conserved.

- [ ] The P domain is unusually hydrophobic; these hydrophobic residues are interacting and stabilize demixing. 


## Expectation: #4
> Pab1's IDR would be collapsed. When demixed, Pab1's IDR would interact with other Pab1 molecules, but when monomeric, Pab1's IDR would self-interact causing it to collapse.

This is a concept drawn from polymer physics 101. If IDR-IDR interactions are sufficiently strong, then the IDR will either collapse if at low concentration or demix if at sufficiently high concentration. 

<p align="center">
<img src="/assets/images/JAR_IDRcollapseANDagg.png" width="75%">
</p>

- [x] The P domain is collapsed. It behaves as expected for a weakly packed, dynamic globule. Extreme mutations in the P domain, such as changing the 15% of the sequence that is glycine to proline or randomly changing the order of ALL the residues in the domain, do not perturb P domain collapse. 
- [x] The extent of P domain collapse correlates with the enhancement of Pab1 demixing *in vivo*, *in vitro*, and survival during stress.


# Expectation vs. Reality Summary

\#|Expectation|Reality|Expectation~Reality
---|---|---|---
1|Pab1 has IDR | IDR (P domain) is conserved in eukaryotes|Yes
2|Demixing requires RNA:Pab1 interactions and IDR:IDR interactions | Demixing requires only folded domains|No 
3|IDR promotes demixing with charge, aromatic, or polar residues | Net hydrophobicity of amino acid residues enhances demixing|No
4|IDR is collapsed. Extent of IDR collapse would correlate with enhancing demixing|Size of IDR correlates with the temperature of demixing *in vivo* and *in vitro*|Yes

Feel free to contact me with questions or comments.
