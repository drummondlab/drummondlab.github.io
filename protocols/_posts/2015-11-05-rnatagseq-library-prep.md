---
layout: protocol
category: protocol
published: true
title: "RNATagSeq: multiplexed library preparation for Illumina RNA sequencing"
author: "Edward Wallace & Evgeny Pilipenko"
nickname: YeastRNAIsolation
tags: [yeast, RNA, sequencing, chemistry]
---
{% include JB/setup %}

This protocol is for RNA sequencing (RNASeq) library preparation using the RNATagSeq method of Shishkin, et al. (2015). *Simultaneous generation of many RNA-seq libraries in a single reaction.* Nature Methods, 12(4), 323–325. http://doi.org/10.1038/nmeth.3313 (Broad institute).

The protocol is mildly adapted by Edward Wallace, mostly increasing some volumes to make SPRI bead handling easier. Applies to batches of 4 to 32 samples.

The RNA-seqlopedia (http://rnaseq.uoregon.edu/) is a great background introduction to RNASeq.


## Reagents

### Wet reagents

- Turbo DNase; Ambion/Applied Biosystems, Cat.# AM2239
- FastAP Thermosensitive Alkaline Phosphatase; Thermo Scientific, Cat.# EF0651
- RLT buffer (RNeasy Lysis Buffer); Qiagen, Cat.# 79216 (220mL)
- T4 RNA Ligase 1; 30,000U/mL (0.5mL) Cat.# MO437M and comes with the following:
	- ATP(100mM) (make 10uL aliquots and store at -80°C, always use fresh aliquot)
	- PEG8000,50% in water
	- DMSO (100%); Sigma, Cat.# D8418-50ML for Molecular Biology
- RNase Inhibitor, Murine (40U/uL); NEB, Cat.# M0314S (3,000 units)
- SUPERase-IN 20U/uL (Ambion; AM2694; 2500U)
- AffinityScript Multiple Temperature cDNA Synthesis Kit, 50 reaction; Agilent, Cat.# 200436. includes the 
	- dNTPs, 10x RT buffer, RNase Block Ribonuclease Inhibitor (40U/uL)
	- 10X AffinityScript RT buffer; Agilent, Cat.# 600100-52
	- RNA Clean & ConcentratorTM-5 columns; Zymo Research, Cat. #R1015 (50 preps)
- SPRI beads:
	- RNAClean XP beads; Agencourt/Beckman, Cat.# A63987 (40mL); (mix well, make 1.5mL and 0.5mL aliquots, store at 4 °C)
	- For steps after cDNA synthesis, can use non-RNA certified, AMPure XP beads Cat.# A63881.
- Ribo-Zero:
	- Bacteria:
	Ribo-ZeroTM Magnetic Gold Kit (Bacteria); Epicentre/Illumina, Cat.# MRZMB126
	- Human:
	Ribo-ZeroTM Magnetic Gold Kit (Human/Mouse/Rat); Epicentre/Illumina, Cat.# MRZG126
	- Yeast: 
	Ribo-ZeroTM Magnetic Gold Kit (Yeast); Epicentre/Illumina, Cat.# MRZY1306
- Sodium hydroxide solution (5M); Sigma-Aldrich, Cat.# 656046 
- Glacial acetic acid (17.4M); Sigma-Aldrich, Cat.# ARK2183
- Nuclease free water; Affymetrix Cat.#71786 100 ML or Ambion, Cat.# 4387936
- 1x low TE (10mM Tris pH 8.0, 0.1mM EDTA); Affymetrix Cat.# 75793
- PfuUltra II Fusion HS DNA Polymerase; Agilent Cat.# 600670
	 - 10X PfuUltra II Reaction Buffer 

### Plates/Tubes/Caps:

- Flat PCR 12-cap strips, Optically clear; USA Scientific, Cat.# 1400-3120
- TempPlate No-skirt PCR Plates, 96 wells, 10 plates; USA Scientific, Cat.# 1402-9608
- 0.2 ml TempAssure PCR tube, attached flat cap, natural; USA Scientific, Cat.# 1402-8100
- wide-orifice pipette tips for PEG-8000

### Instruments:

- 2100 Electrophoresis Bioanalyzer Instrument; Agilent, Cat.# G2939AA (at functional genomics core)
    - Agilent RNA 6000 Pico Kit; Agilent, Cat.# 5067-1513
    - Agilent DNA HS Kit; Agilent, Cat.# 5067-4626
- QIAvac 24 Plus Vacuum manifold (1-24 spin columns; Qiagen cat# 19413)
- Thermocycler
- 10uL, 100uL, 200uL pipettes.
- 96R Ring Magnet Plate. Agencourt Cat#. A29164 or Alpaqua Cat.# A001219
- 96-well Aluminum Cooler Blocks, Light Labs USA Cat#. A-7079


## Notes

- **This is not a protocol where you can cut corners. To save time and anguish, plan thoroughly, work cleanly, QC your samples and intermediate steps.**
- Label everything and lay out tubes neurotically to avoid pipette error.
- Observe RNase-free sample prep, for steps 1-8, also neurotically. Clean your workspace and pipettes with 50% Ethanol and RNAse-Zap, use reserved RNase-free pipettes and RNAse-free (non-autoclaved) tips, ensure all tubes and reagents (including water) are RNase-free. 
- Avoid DNA contamination, _especially from other sequencing libraries_ for steps 8+. Use filter tips for PCR reactions.
- Points where the in-process libraries may be frozen at -80 C while you pause, are indicated as _PAUSE POINT_. Don't take the risk of pausing elsewhere.
- SPRI/XP beads take a bit of skill. "2x SPRI" refers to the ratio of beads to aqueous solution containing nucleic acids (NA); this ratio controls the size of NA retained (see http://core-genomics.blogspot.com/2012/04/how-do-spri-beads-work.html). Be patient; wait for binding and for magnetisation. Prepare fresh 80% ethanol solution every day or two; the concentration drifts over time due to evaporation (manufacturer recommends 70% EtOH). Some reactions (2nd ligation, step 11) happen on-bead so change the elution step. Manufacturer's protocol with tweaks is below; practice SPRI extraction on a DNA ladder or RNA ladder and ensure full recovery.
	- Add appropriate ratio of beads to sample in PCR tube, pipette up and down 10x gently.
	- Incubate beads and sample at room temperature  for 15min to bind NA.
	- Place on 96R plate magnet for 5min, until solution is clear
	- Pipette out and discard clear solution (save this for troubleshooting)
	- Wash: Add 200uL fresh 80% EtOH without removing from magnet, incubate for 30sec, Pipette off clear solution.
	- Repeat 80% EtOH wash, use additional 10uL pipette to remove residual EtOH if necessary.
	- Let air dry for 2min. Apparently, drying too short is bad because residual ethanol interferes with downstream reactions, and too long is bad because beads may crack and/or bind hydrophobically, overly strongly, to your NA.
	- Elute: remove from magnet, pipette 40uL water or low TE buffer onto beads, pipette up and down 10X, replace on magnet and wait 5min (this is easiest with at least 40uL, hellish with 10uL).
	- Unless otherwise specified, take clear liquid to new tube, carefully not disturbing beads. 
- For first ligation (step 5), set up RNA/barcoded adaptor in single tube or use the TempPlate No-skirt PCR Plates for batched samples (these rigid plates are easy to handle and can mix well by flicking by hand) – with a razor, cut a column (for 8 samples) or row (for 12 samples) and use as strip and cover with the Flat PCR 12-cap strips (these strips fit tightly on these plates and will not leak).
- TempPlate No-skirt PCR Plates, and strips cut from them, are flexible and may spring up when caps are put on or off, flicking your sample across the bench. Avoid this by firmly seating plates/strips in a tube rack before manipulating  the caps.
- Barcoded adaptors are listed in appendix, requiring 5' Phosphate group (/5Phos/) and 3' blocking spacer (/3SpC3/). The combination to use should be chosen carefully: plan a spreadsheet listing the sample name, conditions, and which RNAtag adaptor (step 3) and P7 adaptor (step 14/17, PCR after pooling) will be used. In each set of sequencing libraries combined on an Illumina sequencing run, there must be at least 3 distinct nt in all of the initial 4 nt of the sequenced adaptor for the sequencing machine to recognize clusters properly. (e.g. ATTA, GCAC, CAGT work, ATTA, GTAC, CTGT don't due to the common T.)

- Control oligos: 
    - Tag33FAM  
        5' - /5Phos/AG AAC GAT TAG ATC GGA AGA GCG TCG TGT A/36-FAM/ - 3'  
    is a fluorescent positive control oligo for first ligation and sample pooling. Use in place of a barcoded adaptor, for one sample, in first ligation, step 5. Success is indicated if fluorescence appears in 200-500nt smear:
    - TagDNA+  
        5'-TAC ACG ACG CTC TTC CGA TCT TCA GTC AGT ATG TAC GCG TAG CGC AGC GAG CGG CGG GTG GCC ACG TCG CGG CAC ACG CGG ATG GAC AGG ATC GGG CCG GCG GGC AGG AAC TTC TCG TAG AGC ATG GCC TCG GTC ACG TCG GCG TGC AGG TCG CCC ACG TAG AGC GAG GCC AGC GGG TAC CCC GGG CCG CTG GCG TTC AT - 3'  
    is a 200bp oligo as positive control for 2nd ligation through PCR. Use 1.25uM (0.5uL of 100uM stock) in place of cDNA in control reaction in step 11. Its 3' end resembles a cDNA product for a library with Tag barcode CTGACTGA (distinct from Tag1-32, Tag33FAM), and the insert is "random" (elephant PABP 1st exon).



## Procedure:

1. Control quality and quantity of RNA with Agilent Bioanalyzer  
    - Check RNA quality by running on the Agilent Bioanalyzer  
    - Place 0.5-5 ug of total RNA in a tube. For large numbers of samples, the input per sample could be reduced as to not exceed the maximum input of RiboZero (5ug) at step 5. Since about 25% of the input remains prior to adaptor ligation, less than 20ug total RNA per pool (end of step 4) is recommended. For smaller number of samples, higher input is recommended to ensure sufficient material remains after rRNA depletion.  
    - Increase the volume to 30uL with Nuclease free water  
    - Add 2uL of SUPERase-IN (20U/uL)  
    - Final total volume = 32uL (25ng/uL)  
    - Continue to next step or freeze at -80C until ready to process samples  
    
    _PAUSE POINT_

2. Fragment RNA using 2x FastAP buffer  
    - Add 8 uL of 10X FastAP buffer to 32 uL RNA from step 1 (up to 1 ug) and mix well.  
    - Incubate on _preheated_ thermal cycler for 3 min at 94°C.   
    - If RNA is partially degraded (RIN<7), fragment 3 min at 92°C, prevents over-fragmenting samples.  
    - Place on cold block on ice.  

3. Digest DNA and repair RNA: Combination DNase/FastAP treatment
    - Make a DNase/FastAP master mix, 40uL per sample:
        
        | Reagent (for 2X FastAP master)   | Amount | Final |
        |----------------------------------|--------|-------|
        | nuclease-free water              |  10 uL |       |
        | RNase Inhibitor, Murine (40U/uL) |   2 uL |   20U |
        | TURBO DNase (2U/uL)              |   8 uL |   16U |
        | FastAP (1U/uL)                   |  20 uL |   20U |
        |----------------------------------|--------|-------|
        | Total                            |  40 uL |    2X |
        
        - Mix well
    - Aliquot 40 uL into each tube/well with the 40uL of fragmented RNA from step 1.  
    - Mix well  
    - Incubate on preheated thermal cycler for 30 min at 37°C  

4. Cleanup (2x SPRI) to remove enzymes and reaction buffer  
    - Add 2.0x reaction volume of Agencourt RNAClean XP beads (160 uL) and  capture RNA on beads:
        - Incubate at room temperature for 15min to bind RNA
        - Place on magnet for 5min, until solution is clear
        - Pipette out and discard clear solution
        - Add 200uL fresh 80% EtOH without removing from magnet, incubate for 30sec, Pipette off supernatant.
        - Repeat 80% EtOH wash. Let air dry for 2min
    - Elute off beads with 24 uL nuclease free water
    - Take 5 uL of each sample and proceed to 1st ligation
    - QC: Save 1.2 uL from remaining RNA before addition of SUPERase-IN
    - Run 11 random samplings on Agilent RNA pico chip to check the fragmentation profile of each batch of 32
    - Add 1uL SUPERase-IN (20U/uL) to the remaining material and store at -80°C.
        - this can be used as backup if it is necessary to repeat process
    
    _PAUSE POINT_

5. Ligate 3’ barcoded Adaptor: First Ligation (ssRNA/ssDNA)
    - Add 1 uL of barcoded RNATag adaptor (100 pmole = 1 uL of 100 uM) to 5 uL of dephosphorylated RNA
    - Heat at 70°C for 2 min, place in cold block on ice
    - Set up First Ligation master mix below
        NOTE:
        - All reagents except enzymes (-20°C ) should be stored at -80°C in single use aliquots and brought to room temp just before use
        - Make up mix *at room temp* so the reagents don’t start precipitating when combined (if DMSO is added directly into cold buffer it will precipitate)
        - Pipette very slowly with wide-opening/cut tips for accurate aspiration of PEG (very viscous)
        - When setting up mix for multiple reactions include 25% extra to account for pipetting error due to the viscosity
        
            | Reagent (for Ligation master)    |  1 rxn  | 40 rxns |
            |----------------------------------|---------|---------|
            | 10× T4 RNA Ligase Buffer         |    2 uL |   80 uL |
            | DMSO (100%)                      |  1.8 uL |   72 uL |
            | ATP (100 mM)                     |  0.2 uL |    8 uL |
            | PEG 8000 (50%)                   |    8 uL |  320 uL |
            | RNase inhibitor, Murine (40U/uL) |  0.3 uL |   12 uL |
            |----------------------------------|---------|---------|
            |Total                             | 12.3 uL |  492 uL |
        
        - Mix really well by extensive vortexing tube since the solution is very viscous, then spin down briefly in microfuge
    - Add 12.3 uL of ligation master mix to each tube/well containing 6 uL denatured RNA + adaptor.
    - Add 1.8 uL of T4 RNA Ligase 1 (30,000U/mL) to each tube/well. 20.1 uL reaction volume total.
    - Mix well *many* times; mix by flicking since the solution is very viscous
    - Incubate at 22°C (room temp) for 1 hour 30 minutes.

6. Pool barcoded RNA: RLT buffer + Zymo column  
    NOTE: At this point, multiple samples with distinct RNAtag adaptors will be pooled on the same spin column. Do not exceed 5ug RNA per pool, the maximum binding capacity of columns. Attempt to normalize the amounts (using your QC in step 4, or even 1) based on the amount of non-ribosomal RNA in each pool, or your other needs.  
    - Add 60 uL of RLT buffer to each sample to inhibit ligase, and mix well (80 uL total)
    - Pooling and clean up using Zymo Clean & ConcentratorTM-5 column - follow manufacturer’s *200nt* cut off protocol:
        - Add 2x reaction vol (160 uL=2x 80 uL) of 1:1 binding buffer: EtOH (100%) / reaction
        - Carefully add reactions to be pooled to a single Zymo column.  
            NOTE: When pooling >700 uL onto Zymo column use a vacuum manifold then proceed to centrifugation steps according to the manual
        - Wash and spin 1 min 12,000 g, then discard flow-through, once with 400 uL RNA Prep buffer, once with 800 uL RNA Wash buffer, once with 400uL Wash buffer, spin another 1min with no buffer.
    - Elute 2 times with 16 uL nuclease free water for a total volume of 32 uL  
        NOTE: 2 elutions help improve recovery/yield of RNA
    - Save 2 uL for QC-Run on Agilent RNA pico chip to check quantity and fragmentation profile

	_PAUSE POINT_

7. Deplete ribosomal RNA with RiboZero (optional)
    - See Manufacturer's instructions Quick Protocol for Ribo-ZeroTM
    - End with 1.8x SPRI cleanup, elute into 14 uL water, save 2 uL for QC

8. Synthesize First Strand cDNA
    - Take 12 uL rRNA depleted RNA (use all the material from Ribo-Zero)
    - Add 2 uL (50 pmoles) of AR2 primer (25 uM)
         5’-TAC ACG ACG CTC TTC CGA T-3' AR2, 53% GC, 19bp.
    - Mix well
    - Heat the mixture to 70°C for 2 min and immediately place on cold block on ice
    - Make RT master mix
        - Add in order on ice
            
            | Reagent (for RT master)          |  1 rxn  | 2.5 rxns |
            |----------------------------------|---------|----------|
            | 10× AffinityScript RT Buffer     |  2   uL |   5   uL |
            | DTT (0.1M)                       |  2   uL |   5   uL |
            | 25mM dNTP Mix (25mM each)        |  0.8 uL |   2   uL |
            | RNase inhibitor, murine (40U/uL) |  0.4 uL |   1   uL |
            |----------------------------------|---------|----------|
            |Total                             |  5.2 uL |  13   uL |
            
        - Mix well
    - Add 5.2 uL of RT mix to the 14 uL rRNA depleted RNA + AR2 RTprimer on ice
    - Add 0.8 uL of AffinityScript RT Enzyme
    - Mix well and spin for 5 sec
    - Place in _preheated_ (55 °C) incubator or thermocycler. Incubate at 55 °C for 55 minutes.

9. Degrade RNA after reverse transcription  
	NOTE: make fresh working stock solutions of NaOH and Acetic Acid
    - Add 10% reaction vol. of 1M NaOH (2 uL) to each reaction
    - Incubate at 70 °C for 12 minutes
    - Neutralize with 4 uL of 0.5M Acetic Acid; mix well
    - Total volume = 26 uL

10. Cleanup reverse transcription (2x SPRI) to remove enzyme, primers, and reaction buffer
    - Add 14 uL of sterile water to each reaction for a final volume of 40 uL
    - Transfer to new tubes (NaOH may start degrading tubes)
    - Add 2x reaction volume SPRI beads (80uL) to the sample in new tubes, and mix up/down 10x
    - Incubate at room temperature for 15min
    - Place on magnet for 5 min or until solution is clear
    - Pipette out and discard clear solution
    - Wash: Add 200 uL fresh 80% EtOH without removing from magnet and incubate for 30 sec. Pipette off and discard the EtOH. 
    - Repeat 80% EtOH wash, and let air dry for 3min, remove from magnet.
    - Add 5 uL RNase/DNase free water to beads -- _KEEP BEADS AND TUBES, do not transfer, do not pause_

11. Ligate 3’ Universal Adaptor: Second Ligation (ssDNA/ssDNA) with beads  
	NOTE: 3Tr3 adaptor: 5’-/5Phos/AGA TCG GAA GAG CAC ACG TCT G-/3SpC3/ 3’, 55% GC, 22bp, 5’-Phos and 3’-C3 spacer (or ddC, or dye). Make 40 uM stock.
    - Add 2 uL (80 pmoles) of 3Tr3 adaptor to cDNA 
    - Heat at 75°C for 3 min; Place on cold block on ice
    - Make ligation reaction master mix (can be prepared ahead of time, at RT):
    - 2nd Ligation Master Mix: 
        - Mix in order
        
            | Reagent (for Ligation 2 master)  |  1 rxn  | 2.5 rxns |
            |----------------------------------|---------|----------|
            | 10× T4 RNA Ligase Buffer         |    2 uL |   5   uL |
            | DMSO (100%)                      |  0.8 uL |   2   uL |
            | ATP (100 mM)                     |  0.2 uL |   0.5 uL |
            | PEG 8000 (50%)                   |  8.5 uL |  21.3 uL |
            | T4 RNA Ligase 1 (30,000U/mL)     |  1.5 uL |   3.8 uL |
            |----------------------------------|---------|----------|
            | Total                            | 13.0 uL |  32.6 uL |
        
        - Mix really well by extensive vortexing tube since the solution is very viscous
        - Spin down briefly in microfuge
    - Swirl the 7uL cDNA/beads/water with pipet tip, THEN add 13 uL ligation 2 master mix.
    - Mix well by pipetting up and down 20x or cap tubes and flick several times; solution is viscous
    - Quick spin (low speed centrifuge, to get everything to bottom of tube)
    - Incubate overnight at 22 °C

12. Cleanup (2x SPRI) to remove adaptors
    - Add 2x reaction volume SPRI beads (80uL) to the sample in new tubes, and mix up/down 10x
    - Incubate at room temperature for 15min
    - Place on magnet for 5 min or until solution is clear
    - Pipette out and discard clear solution
    - Wash: Add 200 uL fresh 80% EtOH without removing from magnet and incubate for 30 sec. Pipette off discard the EtOH. 
    - Repeat 80% EtOH wash, and let air dry for 3min
    - Elute DNA by adding 30 uL RNase/DNase free water, transfer to new tube.

13. 2nd Cleanup (1.5x SPRI) to remove the remaining adaptors
    - Add 1.5x reaction volume SPRI beads (45 uL) to the sample in new tubes, and mix up/down 10x
    - Incubate at room temperature for 15min
    - Place on magnet for 5 min or until solution is clear
    - Pipette out and discard clear solution
    - Wash: Add 200 uL fresh 80% EtOH without removing from magnet and incubate for 30 sec. Pipette off and discard the EtOH. 
    - Repeat 80% EtOH wash, and let air dry for 3min
    - Elute DNA by adding 25 uL RNase/DNase free water, transfer to new tube.

	_PAUSE POINT_

14. TEST PCR Amplification to determine final cycle number  
	NOTE: P5 primer: P5_RNATag, 5’-AAT GAT ACG GCG ACC ACC GAG ATC TAC ACT CTT TCC CTA CAC GAC GCT CTT CCG ATC T-3’, 52% GC, 58bp; standard DNA oligo. Make 100uM stock and 12.5uM working stock.
    - Set up a test PCR using 5 uL of ss cDNA sample and 9-12 cycles of PCR (based on experience with pool of 16 reactions, each starting with ~400ng total RNA)
    - Include a negative control (water) for each primer set
    - Make PCR Master Mix (4 rxns=2 libraries, +ve ctrl, -ve ctrl):
        - Add in order:
        
        | Reagent (for PCR master mix)    |  1 rxn  |  4 rxns | 
        |---------------------------------|---------|---------|
        | Water, PCR-clean                | 14.3 uL | 57.2 uL |
        | 10X Pfu Ultra II Buffer         |  2.5 uL | 10   uL |
        | dNTP mix (10mM each)            |  0.7 uL |  2.8 uL |
        | P5 primer (P5_RNATag, 12.5 uM)  |  1   uL |  4   uL |
        |---------------------------------|---------|---------|
        |Total                            | 18.5 uL | 74   uL |
        
        - Mix well
        - Aliquot 18.5 uL / sample into PCR tubes
    - Add 1 uL of appropriate P7 index primer to each well
    - Add 5 uL of ss cDNA from step 11, or water (for negative control)
    - Add 0.5 uL of Pfu Ultra II Polymerase.
    - Mix well and aliquot 8 ul into each of 3 tubes
    - Place each in a thermal cycler with cycling conditions:
        - start: 98°C, 3min
        - cycle: 9, 12, 15 cycles (for test PCR)
            98°C, 30sec; 55°C, 30sec; 70°C, 30sec
        - end: 70°C, 2min; 4°C, hold

15. Cleanup (1.5x SPRI) to remove reaction buffer and PCR primers:
    - increase reaction to 40uL with sterile water
    - Add 1.5x reaction volume SPRI beads (60 uL) to the sample in new tubes, and mix up/down 10x
    - Incubate at room temperature for 15min
    - Place on magnet for 5 min or until solution is clear
    - Pipette out and discard clear solution
    - Wash: Add 200 uL fresh 80% EtOH without removing from magnet and incubate for 30 sec. Pipette off and discard the EtOH. 
    - Repeat 80% EtOH wash, and let air dry for 3min
    - Elute off beads with 10 uL 1x low TE (10 mM Tris, 0.1M EDTA)

16. QC test PCR amplification on Agilent DNA HS chip
    - Based on test results change the cycle number, if necessary, and set up more reactions to provide enough material to send for sequencing
    - UChicago functional genomics core asks for ~15 uL of 10 nM library; aim for at least 25 uL = 0.25 pmol = 60 ng of 400nt dsDNA (~250 kDa).
    - To pass QC, library should have smooth profile 200-500nt long; visible single bands, or a "shoulder" of larger products, indicate PCR artefacts.

	_PAUSE POINT_
	
17. PCR for Sequencing library
    - Choose the optimal PCR cycle # based on Bioanalyzer QC of test (step 15).
    - Include a negative control (water) for each primer set
    - Make PCR Master Mix (3 rxns=2 libraries, half size +ve ctrl, half size -ve ctrl):
        - Add in order:
        
        | Reagent (for PCR master mix)    |  1 rxn  |  3 rxns  | 
        |---------------------------------|---------|----------|
        | Water, PCR-clean                | 28.6 uL |  85.8 uL |
        | 10X Pfu Ultra II Buffer         |  5   uL |  15   uL |
        | dNTP mix (10mM each)            |  1.4 uL |   4.2 uL |
        | P5 primer (P5_RNATag, 12.5 uM)  |  2   uL |   6   uL |
        |---------------------------------|---------|----------|
        |Total                            | 37   uL | 111   uL |
        
        - Mix well
        - Aliquot 37 uL / sample into PCR tubes
    - Add 2 uL of appropriate P7 index primer to each well
    - Add 10 uL of ss cDNA from step 11, or water (for negative control)
    - Add 1 uL of Pfu Ultra II Polymerase.
    - Mix well and aliquot 10 ul into each of 5 wells of a 96-well plate (amplification is apparently more robust in smaller volumes), cap.
    - Place each in a thermal cycler with the cycling conditions:
        - start: 98°C, 3min
        - cycle: # determined from test PCR
            98°C, 30sec; 55°C, 30sec; 70°C, 30sec
        - end: 70°C, 2min; 4°C, hold

18. Cleanup (1.5x SPRI) to remove reaction buffer and PCR primers:
    - Pool PCR reaction (50 uL)
    - Add 1.5x reaction volume SPRI beads (75 uL) to the sample in new tubes, and mix up/down 10x
    - Incubate at room temperature for 15min
    - Place on magnet for 5 min or until solution is clear
    - Pipette out and discard clear solution
    - Wash: Add 200 uL fresh 80% EtOH without removing from magnet and incubate for 30 sec. Pipette off and discard the EtOH. 
    - Repeat 80% EtOH wash, and let air dry for 3min
    - Elute off beads with 50 uL water and transfer to new tubes.

19. Final Cleanup (0.8x SPRI) to remove remaining PCR primers:
    - Add 0.8x reaction volume SPRI beads (40 uL) to the sample in new tubes, and mix up/down 10x
    - Incubate at room temperature for 15min
    - Place on magnet for 5 min or until solution is clear
    - Pipette out and discard clear solution
    - Wash: Add 200 uL fresh 80% EtOH without removing from magnet and incubate for 30 sec. Pipette off and discard the EtOH. 
    - Repeat 80% EtOH wash, and let air dry for 3min
    - Elute off beads with 25 uL 1x low TE (10 mM Tris, 0.1M EDTA)

20. Proceed to sequence
    - Check quantity/quality on Bioanalyzer with Agilent DNA HS chip as step 16.
    - Submit to genomics core for sequencing.
    - If desired to combine multiple libraries PCR'd separately, they must have different barcoded P7 primers. Amounts of sequenceable material must be carefully measured to ensure even coverage across libraries, e.g. with the KAPA biosystems kit (Cat. # KK4824). The genomics core can do this for a fee.



## Appendix: Barcode Tag Oligos

    | id       | Well | barcode sequence (5'-3') | oligo sequence                 | 8 base Barcode Read + T | IDTorder                                               | 
    |----------|------|--------------------------|--------------------------------|-------------------------|--------------------------------------------------------| 
    | Tag01    | A1   | CCCGTCTT                 | ACCCGTCTTAGATCGGAAGAGCGTCGTGTA | AAGACGGGT               | /5Phos/ACC CGT CTT AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag02    | A2   | CGGCACTT                 | ACGGCACTTAGATCGGAAGAGCGTCGTGTA | AAGTGCCGT               | /5Phos/ACG GCA CTT AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag03    | A3   | ACATTATT                 | AACATTATTAGATCGGAAGAGCGTCGTGTA | AATAATGTT               | /5Phos/AAC ATT ATT AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag04    | A4   | GAGATTGT                 | AGAGATTGTAGATCGGAAGAGCGTCGTGTA | ACAATCTCT               | /5Phos/AGA GAT TGT AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag05    | A5   | GGTCCTCT                 | AGGTCCTCTAGATCGGAAGAGCGTCGTGTA | AGAGGACCT               | /5Phos/AGG TCC TCT AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag06    | A6   | CTCTAACT                 | ACTCTAACTAGATCGGAAGAGCGTCGTGTA | AGTTAGAGT               | /5Phos/ACT CTA ACT AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag07    | A7   | AGAATTAT                 | AAGAATTATAGATCGGAAGAGCGTCGTGTA | ATAATTCTT               | /5Phos/AAG AAT TAT AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag08    | A8   | TACAACAT                 | ATACAACATAGATCGGAAGAGCGTCGTGTA | ATGTTGTAT               | /5Phos/ATA CAA CAT AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag09    | C1   | AAGTGTTG                 | AAAGTGTTGAGATCGGAAGAGCGTCGTGTA | CAACACTTT               | /5Phos/AAA GTG TTG AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag10    | C2   | ATCACTTG                 | AATCACTTGAGATCGGAAGAGCGTCGTGTA | CAAGTGATT               | /5Phos/AAT CAC TTG AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag11    | C3   | TCATCGTG                 | ATCATCGTGAGATCGGAAGAGCGTCGTGTA | CACGATGAT               | /5Phos/ATC ATC GTG AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag12    | C4   | TACAGATG                 | ATACAGATGAGATCGGAAGAGCGTCGTGTA | CATCTGTAT               | /5Phos/ATA CAG ATG AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag13    | C5   | TCCCGCGG                 | ATCCCGCGGAGATCGGAAGAGCGTCGTGTA | CCGCGGGAT               | /5Phos/ATC CCG CGG AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag14    | C6   | CCAAGTCG                 | ACCAAGTCGAGATCGGAAGAGCGTCGTGTA | CGACTTGGT               | /5Phos/ACC AAG TCG AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag15    | C7   | CTGGATCG                 | ACTGGATCGAGATCGGAAGAGCGTCGTGTA | CGATCCAGT               | /5Phos/ACT GGA TCG AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag16    | C8   | GTCTGGCG                 | AGTCTGGCGAGATCGGAAGAGCGTCGTGTA | CGCCAGACT               | /5Phos/AGT CTG GCG AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag17    | E1   | TTACCACG                 | ATTACCACGAGATCGGAAGAGCGTCGTGTA | CGTGGTAAT               | /5Phos/ATT ACC ACG AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag18    | E2   | TGAACCAG                 | ATGAACCAGAGATCGGAAGAGCGTCGTGTA | CTGGTTCAT               | /5Phos/ATG AAC CAG AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag19    | E3   | CCCTACAG                 | ACCCTACAGAGATCGGAAGAGCGTCGTGTA | CTGTAGGGT               | /5Phos/ACC CTA CAG AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag20    | E4   | GGCCCAAG                 | AGGCCCAAGAGATCGGAAGAGCGTCGTGTA | CTTGGGCCT               | /5Phos/AGG CCC AAG AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag21    | E5   | GAGCCATC                 | AGAGCCATCAGATCGGAAGAGCGTCGTGTA | GATGGCTCT               | /5Phos/AGA GCC ATC AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag22    | E6   | GTAACTGC                 | AGTAACTGCAGATCGGAAGAGCGTCGTGTA | GCAGTTACT               | /5Phos/AGT AAC TGC AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag23    | E7   | CGGAGGGC                 | ACGGAGGGCAGATCGGAAGAGCGTCGTGTA | GCCCTCCGT               | /5Phos/ACG GAG GGC AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag24    | E8   | CCCTCGGC                 | ACCCTCGGCAGATCGGAAGAGCGTCGTGTA | GCCGAGGGT               | /5Phos/ACC CTC GGC AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag25    | G1   | CAACTCGC                 | ACAACTCGCAGATCGGAAGAGCGTCGTGTA | GCGAGTTGT               | /5Phos/ACA ACT CGC AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag26    | G2   | TACCGGCC                 | ATACCGGCCAGATCGGAAGAGCGTCGTGTA | GGCCGGTAT               | /5Phos/ATA CCG GCC AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag27    | G3   | CCGGTACC                 | ACCGGTACCAGATCGGAAGAGCGTCGTGTA | GGTACCGGT               | /5Phos/ACC GGT ACC AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag28    | G4   | CTCGGTAC                 | ACTCGGTACAGATCGGAAGAGCGTCGTGTA | GTACCGAGT               | /5Phos/ACT CGG TAC AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag29    | G5   | ATATGGAC                 | AATATGGACAGATCGGAAGAGCGTCGTGTA | GTCCATATT               | /5Phos/AAT ATG GAC AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag30    | G6   | TGGGAGAC                 | ATGGGAGACAGATCGGAAGAGCGTCGTGTA | GTCTCCCAT               | /5Phos/ATG GGA GAC AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag31    | G7   | GCAGCCAC                 | AGCAGCCACAGATCGGAAGAGCGTCGTGTA | GTGGCTGCT               | /5Phos/AGC AGC CAC AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    | Tag32    | G8   | TTTCTAAC                 | ATTTCTAACAGATCGGAAGAGCGTCGTGTA | GTTAGAAAT               | /5Phos/ATT TCT AAC AGA TCG GAA GAG CGT CGT GTA/3SpC3/  | 
    |          |      |                          |                                |                         |                                                        | 
    | Tag33FAM | H12  | GAACGATT                 | AGAACGATTAGATCGGAAGAGCGTCGTGTA | AATCGTTCT               | /5Phos/AGA ACG ATT AGA TCG GAA GAG CGT CGT GTA/36-FAM/ | 
    |          |      |                          |                                |                         |                                                        | 

Note: 3Tr3 primer (/5Phos/AGA TCG GAA GAG CAC ACG TCT G/3SpC3/) is in well A12 of the IDT plate.


## Appendix: P7 Bindex Oligos

    | Name   | P7 Enrichment Primer Sequence (5' --> 3') with barcode             | barcodes (BC) | BC READ (reverse complement) | 
    |--------|--------------------------------------------------------------------|---------------|------------------------------| 
    | P7_B1  | CAAGCAGAAGACGGCATACGAGATTCGTGTGCGTGACTGGAGTTCAGACGTGTGCTCTTCCGATCT | TCGTGTGC      | GCACACGA                     | 
    | P7_B2  | CAAGCAGAAGACGGCATACGAGATTCGCCAGAGTGACTGGAGTTCAGACGTGTGCTCTTCCGATCT | TCGCCAGA      | TCTGGCGA                     | 
    | P7_B3  | CAAGCAGAAGACGGCATACGAGATTCGCTATGGTGACTGGAGTTCAGACGTGTGCTCTTCCGATCT | TCGCTATG      | CATAGCGA                     | 
    | P7_B4  | CAAGCAGAAGACGGCATACGAGATGGCTCCTGGTGACTGGAGTTCAGACGTGTGCTCTTCCGATCT | GGCTCCTG      | CAGGAGCC                     | 
    | P7_B5  | CAAGCAGAAGACGGCATACGAGATATCCGACAGTGACTGGAGTTCAGACGTGTGCTCTTCCGATCT | ATCCGACA      | TGTCGGAT                     | 
    | P7_B6  | CAAGCAGAAGACGGCATACGAGATAACATAATGTGACTGGAGTTCAGACGTGTGCTCTTCCGATCT | AACATAAT      | ATTATGTT                     | 
    | P7_B7  | CAAGCAGAAGACGGCATACGAGATATGGTAGGGTGACTGGAGTTCAGACGTGTGCTCTTCCGATCT | ATGGTAGG      | CCTACCAT                     | 
    | P7_B8  | CAAGCAGAAGACGGCATACGAGATGCTAAGTAGTGACTGGAGTTCAGACGTGTGCTCTTCCGATCT | GCTAAGTA      | TACTTAGC                     | 
    | P7_B9  | CAAGCAGAAGACGGCATACGAGATGTTCCAACGTGACTGGAGTTCAGACGTGTGCTCTTCCGATCT | GTTCCAAC      | GTTGGAAC                     | 
	| P7_B10 | CAAGCAGAAGACGGCATACGAGATTCCAAGGAGTGACTGGAGTTCAGACGTGTGCTCTTCCGATCT | TCCAAGGA      | TCCTTGGA                     | 
	| P7_B11 | CAAGCAGAAGACGGCATACGAGATCAAGGTTGGTGACTGGAGTTCAGACGTGTGCTCTTCCGATCT | CAAGGTTG      | CAACCTTG                     | 
	| P7_B12 | CAAGCAGAAGACGGCATACGAGATAGGTTCCTGTGACTGGAGTTCAGACGTGTGCTCTTCCGATCT | AGGTTCCT      | AGGAACCT                     | 