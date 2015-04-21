---
layout: protocol
title: "Supernatant/pellet fractionation of budding yeast cells by cryogenic lysis"
description: ""
category: protocol
tags: []
---
{% include JB/setup %}

For studies of protein aggregation, few techniques are simpler than two-phase fractionation by centrifugation: big stuff (aggregates) pellets, small stuff (unaggregated proteins) stays in the supernatant. Breaking open cells (lysis) can alter or even cause protein aggregation. For yeast cells, which have a tough cell wall, lysis requires a lot of force. We and others find that cryogenic milling does a good job in lysing most cells without causing aggregation.

# Protocol

## Day -2
For each strain, inoculate a 3 mL YPD pre-culture of YPD with a single yeast colony and incubate overnight at 30⁰C with shaking or rotation.

## Day -1
Inoculate 50 mL of synthetic complete medium (SC) with labeled amino acids with 3 µL of the overnight pre-culture and incubate for 18 h at 30⁰ C with shaking in a 500 mL baffled flask.

## Day 0

### Cell preparation

Grow 50mL culture of cells to a density of 4×10<sup>6</sup> cells/mL (OD<sub>600</sub> ≈ 0.4).
While cells are growing, make buffer solutions: SPB, WB, IPB (recipes below). Put 1.1 mL × number of samples' worth of 50mM Tris-HCl pH 8.5 on ice.

1. Transfer 1.4×10<sup>8</sup> cells to a 50mL conical tube (35 mL of a 4×10<sup>6</sup> cells/mL culture)
1. Spin at 3000g for 1 minute.
1. Gently decant and discard supernatant.
1. Resuspend cell pellet in 1.4mL ice-cold Tris (50mM, pH 8.5) and transfer to 1.5mL microcentrifuge tube.
1. Spin at 20,000g for 15 seconds.
1. Discard supernatant, clear residual liquid with a hard snap.
1. Freeze pellet in liquid nitrogen.


Now decide whether you want total protein extraction or soluble/insoluble fractionation.

#### Lysis for soluble/insoluble fractionation
For each strain, rack a 2mL flat or round-bottom microcentrifuge tube in LN2 and place a 7mm stainless-steel ball (Retsch #05.368.0035) inside. Put some LN2 in tube to speed cooling of ball and to catch the incoming sample. Label the sides as well as the tops of the tubes, as lysis will often crack off the tube cap.

Resuspend frozen pellet in 50 µL SPB.

Drip resuspended pellet onto upper wall of tube containing ball. Goal is to get a nugget of frozen material on the wall, and to avoid dripping the material around the ball and thus freezing the ball to the bottom of the tube; having some LN2 remaining in the tube helps.

When all LN2 has boiled out of tube (listen -- if any popping or hissing, keep waiting), snap tube closed. Keep in LN2. (Any remaining LN2 in tube will cause tube to explode open and fire the stainless steel ball into your iPad, brain, colleague, or other important equipment.)

Rack the tube into the PTFE 2mL tube adaptor for the Retsch Mixer Mill MM400 (Retsch #22.008.0005) and submerge the entire assembly in LN2.

Agitate for 4×90 seconds at 30 Hz in a Retsch Mixer Mill MM400, returning sample holder to LN2 between sessions. Complete lysis produces fine snowy powder in the tube.

Remove sample tubes from LN2 and pop the caps to relieve pressure.

Add 450 μL SPB to each tube, and extract ball with a magnet. We rinse balls in methanol and store in 50% ethanol.

Move 500 μL sample to a fresh 1.5mL microcentrifuge tube.

##### Soluble fraction extraction

Spin at 3000g for 30 seconds (clarification step).

Decant clarified liquid into a 1.5mL polyallomer conical centrifuge tube (Beckman Coulter).

Spin at 100,000g for 20 minutes (fixed-angle TLA-55 rotor at 40,309 rpm in a Beckman Coulter Optimax tabletop ultracentrifuge).

Decant supernatant into a 1.5mL microcentrifuge tube: this is the soluble fraction.

##### Insoluble fraction extraction

Violently snap pellet to clear remaining liquid.

Add 500 μL wash buffer (WB) and vortex violently. (The pellet may not resuspend; that's fine.)

Spin at 100,000g for 20 minutes.

Discard supernatant, clear residual liquid with a hard snap.

Add 500 μL insoluble protein buffer (IPB).

Vortex until pellet dissolves, 10-15 minutes for clarified samples.

Spin at 20,000g for 5 minutes.

Decant supernatant into a 1.5mL microcentrifuge tube: this is the insoluble fraction.

#### Lysis for total protein extraction

For each strain, rack a 2mL flat or round-bottom microcentrifuge tube in LN2 and place a 7mm stainless-steel ball (Retsch #05.368.0035) inside. Put some LN2 in tube to speed cooling of ball (ultimately we want all the LN2 to boil away).

Resuspend frozen pellet in 50 µL insoluble protein buffer (IPB).

Drip resuspended pellet onto upper wall of tube containing ball. Goal is to get a nugget of frozen material on the wall, and to avoid dripping the material around the ball and thus freezing the ball to the bottom of the tube.

When all LN2 has boiled out of tube (listen -- if any popping or hissing, keep waiting), snap tube closed. Keep in LN2. (Any remaining LN2 in tube will cause tube to explode open and fire the stainless steel ball into your iPad, brain, colleague, or other important equipment.)

Rack the tube into the PTFE 2mL tube adaptor for the Retsch Mixer Mill MM400 (Retsch #22.008.0005) and submerge the entire assembly in LN2.

Agitate for 4×90 seconds at 30 Hz in a Retsch Mixer Mill MM400, returning sample holder to LN2 between sessions. Complete lysis produces fine snowy powder in the tube.

Add 450 μL IPB to tube, and extract ball with a magnet.

Move 500 μL sample to a fresh 1.5mL microcentrifuge tube.

Spin at 20,000g for 5 minutes.

Decant supernatant into a 1.5mL microcentrifuge tube: this is the total protein fraction.

### Storage

For insoluble and total-protein fractions, make 100μL aliquots and store at -80°C.
For soluble fractions, mix 5:1 with fresh 6x soluble protein storage buffer (SPSB), denature for 5 minutes at 95°C, make 100μL aliquots and store at -80°C.


# Buffers

## Stock solutions
* 200mM DTT in H2O (store as 50μL aliquots at -20°C and thaw just before use).
* 100mM PMSF in ethanol (store at -20°C; half-life in aqueous solution is ~30 minutes).
* 4M NaCl (store at RT)
* 20% SDS (w/v) (store at RT)
* 1M Tris-HCl, pH 8.5 (store at RT)
* 50mM Tris-HCl, pH 8.5 (store at 4°C)

For protease inhibitors, we use:

* AEBSF, HCl, MW=239.5, targets serine proteases, 100 mM
* E-64, MW=357.4, targets cysteine proteases, 1.5 mM
* Pepstatin A, MW=685.9, targets aspartic proteases, 2 mM
* o-Phenanthroline, MW=198.2, targets metalloproteases, 500 mM

This mixture is commercially available as Calbiochem protease inhibitor cocktail set IV, or BioVision EZBlock protease inhibitor cocktail IV.

## Soluble Protein Buffer, pH 8.5 (SPB)

(50mM Tris-HCl, 500mM NaCl, 1:100 protease inhibitors)

Start by making 50 mL SPB stock solution:

* 2.5 mL 1M Tris-HCl, pH 8.5
* 6.25 mL 4M NaCl
* 41.25 mL protease-free H2O

Then mix 9.8 mL of SPB stock solution with 100 µL 100mM PMSF and 100uL protease inhibitors to make 10mL SPB.


## Wash Buffer (WB)

(50mM Tris-HCl, 150mM NaCl, 1:100 protease inhibitors) 

Same as SPB, but with reduced salt to limit pellet loss.

Start by making 50 mL WB stock solution:

* 2.5 mL 1M Tris-HCl, pH 8.5
* 1.875 mL 4M NaCl
* 45.625 mL protease-free H2O

Then mix 9.8 mL of WB stock solution with 100 µL 100mM PMSF and 100µL protease inhibitors to make 10mL WB.

## Insoluble Protein Buffer, pH 8.5 (IPB)

(50mM Tris-HCl, 150mM NaCl, 8M urea, 2% SDS, 1mM PMSF, 2mM DTT, 1:1000 protease inhibitors) 

Make fresh just before each use. Note that at 8M, urea occupies ~72% of the solution volume, so that 4.8g urea occupies 7.2mL of a 10mL solution. Do not use 500mM NaCl in this solution, as it loosens pellets and causes sample loss.

* 8M urea
* 2% SDS
* 50mM Tris pH 8.5
* 150mM NaCl
* 1mM PMSF
* 20 μL 200mM DTT
* 1:1000 protease inhibitors (see above. higher concentrations may crash out.)

Use 500μL IPB per sample, and note that foaming will make ~25% of the solution unusable.

| 2mL IPB (~2 samples)  |  13mL IPB (~10 samples) |
|:-:|:-:|
| 0.96g urea                 | 6.24g urea |
| 683 μL H2O                 | 5.58 mL H2O |
| 200 μL 20% SDS (w/v)       | 1.3 mL 20% SDS (w/v) |
| 100 μL 1M Tris pH 8.5    | 650 μL 1M Tris pH 8.5 |
| 75 μL 4M NaCl | 488 μL 4M NaCl |
| 20 μL 100mM PMSF | 130 μL 100mM PMSF |
| 20 μL 200mM DTT | 130 μL 200mM DTT |
| 2 μL protease inhibitors | 13 μL protease inhibitors |

## 6x Soluble Protein Loading Buffer, pH 6.8 (SPLB)

(50 mM Tris-HCl pH 6.8, 10% SDS, 0.05% bromophenol blue, 30% glycerol, 5% β-mercaptoethanol [βME])

Start by making 9 mL 6x SPLB Stock Solution:

* 0.5 mL 1M Tris-HCl, pH 6.8
* 1 g SDS
* 5 mg bromophenol blue
* 3 mL glycerol
* 5.5 mL protease-free water

Then mix 712.5 µL of 6x SPLB stock solution with 37.5 µL of 14.3M βME immediately before use.

## 6x Soluble Protein Storage Buffer, pH 8.5 (SPSB)

(50 mM Tris-HCl pH 8.5, 12% SDS, 5% β-mercaptoethanol [βME])

Start by making 10 mL 6x SPSB Stock Solution:

* 0.5 mL 1M Tris-HCl, pH 8.5
* 6 mL 20% SDS
* 3.5 mL protease-free water

Then mix 712.5 µL of 6x SPSB stock solution with 37.5 µL of 14.3M βME immediately before use.

## 6x Insoluble Protein Loading Buffer, pH 6.8 (IPLB)

(50 mM Tris-HCl, 0.05% bromophenol blue, 30% glycerol, 5% βME)

Start by making 9 mL 6x IPLB Stock Solution (nearly the same as SPLB stock, but

* 0.5 mL 1M Tris-HCl, pH 6.8
* 5 mg bromophenol blue
* 3 mL glycerol
* 5.5 mL protease-free water

Then mix 475 µL of 6x IPLB stock solution with 25 µL 14.3M βME immediately before use.