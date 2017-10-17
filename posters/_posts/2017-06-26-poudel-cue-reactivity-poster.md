---
layout: poster
title: "Behavioral decoding of functionally related brain areas consistently linked to drug cue reactivity"
year: "2017"
shortref: "Poudel <i>et al. OHBM</i> 2017"
nickname: 2017-06-26-poudel-cue-reactivity-poster
conference: "HBM"
authors: "Poudel R, Riedel MC, Hill LD, Flannery JS, Salo T, Laird AR, Sutherland MT"
image: /assets/images/posters/2017-06-26-poudel-cue-reactivity-poster.png
redirect_from:
pdf: https://files.aievolution.com/hbm1701/abstracts/37102/1098_Poudel.pdf
fulltext: https://ww5.aievolution.com/hbm1701/index.cfm?do=abs.viewAbs&abs=2944
github:
f1000:
doi:
dryad_doi:
figshare_doi:
altmetric_id:
category: posters
projects: []
tags: []
---
{% include JB/setup %}

# Introduction

As drug cues likely play a role in sustaining drug use and precipitating relapse, a substantial body of neuroimaging work has utilized cue-reactivity paradigms [1-3]. Cue-related activity has been observed in multiple brain regions including the striatum, medial prefrontal cortex (mPFC), and cingulate cortex [1-3]. However, cue-reactivity and by extension drug craving are complex multifaceted psychological constructs likely comprising multiple elemental cognitive operations (e.g., attention, memory, emotion, reward-related processes) [4-6]. In a typical cue-reactivity paradigm, it is difficult to parcellate these more precise mental operations. As such, we first conducted a coordinate-based meta-analysis of drug cue-reactivity paradigms to identify brain regions showing convergent activation across studies. Next, we employed database driven tools to identify pairs of cue-related clusters functionally related across neuroimaging tasks. We then delineated behavioral phenomena associated with these functional interactions via behavioral decoding.

# Methods

We performed a literature search for studies reporting whole-brain cue reactivity results and reported activity modulation for substance>neutral stimuli contrasts. Convergent activity modulations were identified across studies via the coordinate-based Activation Likelihood Estimation (ALE) framework (FWE corrected Pcluster<0.05, CDT of P<0.001) [7]. Four clusters obtained from this cue-reactivity meta-analysis were utilized as regions of interest (ROIs) in a meta-analytic connectivity modeling (MACM) assessment [8]. MACM identifies brain areas that simultaneously co-activate with user-specified seeds across studies probing various behavioral domains and task paradigms. Whole-brain coordinates that co-activated with the seeds were extracted and used as ALE input thus delineating cluster of convergent co-activation (FWE corrected Pcluster<0.05, CDT of P<0.001). The degree to which one ROI's map intersected with other ROIs was quantified and we considered this overlap as an indication of a functional connection between regions. Lastly, we employed functional decoding using forward and reverse inference analyses on metadata terms stored in the BrainMap database [9] to identify behavioral phenomena associated with these functional connections.

# Results

We identified convergent cue-related brain activity modulation in the amygdala, caudate, mPFC and posterior cingulate cortex (PCC) (Fig 1a). We then generated co-activation maps for each of these clusters using MACM (Fig 1b). To represent cue-related brain regions which were functionally-related across other neuroimaging tasks, the intersection of one ROI's MACM map with the other clusters was assessed (Fig 2a). For example, the left amygdala co-activation map (ROI 1) overlapped with the mPFC (ROI 3) and right caudate (ROI 2); whereas the left amygdala ROI was overlapped by the MACM map derived for the left PCC (ROI 4). Functional decoding delineated behavioral phenomena linked with coactivation of these functionally-related ROIs. Specifically, coactivation of the amygdala and caudate (Fig 2b, path ROI 1-2), as well as coactivation of the PCC and amygdala (path ROI 4-1), was associated with the behavioral domain of emotion. Coactivation of the mPFC and PCC (path ROI 3-4) was linked with cognition specifically social/semantic paradigms, and coactivation of caudate and PCC was related to cognition, emotion, and reward (path ROI 2-4).

# Conclusions

Drug cue reactivity was associated with convergent functional modulation in the amygdala, caudate, mPFC and PCC. Beyond cue-reactivity paradigms, these brain regions also co-activate with a wide range brain regions involved in cognition, emotion and reward. Overall, our findings emphasize brain regions and neurocircuits linked to drug cue reactivity and suggest more precise elemental mental operations that may be associated with specific region-to-region functional interactions.
