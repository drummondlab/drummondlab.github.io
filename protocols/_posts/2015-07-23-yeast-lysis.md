---
layout: protocol
title: "Supernatant/pellet fractionation of budding yeast cells by cryogenic lysis"
published: true
category: protocol
tags: [yeast, aggregation, biochemistry]
---
{% include JB/setup %}

For studies of protein aggregation, few techniques are simpler than two-phase fractionation by centrifugation: big stuff (aggregates) pellets, small stuff (unaggregated proteins) stays in the supernatant. Breaking open cells (lysis) can alter or even cause protein aggregation. For yeast cells, which have a tough cell wall, lysis requires a lot of force. We and others find that cryogenic milling does a good job in lysing most cells without causing aggregation.

With minor adaptations, we have applied the same lysis/fractionation to E. coli, cyanobacteria, mammalian cell culture, squid axoplasm, and alternative yeasts. Appearance of membrane proteins in the pellet and cytoplasmic proteins the sup is a good quality control for unstressed samples.

Based on Mike Dion and Allan Drummond’s 2011 protocols, with extensive modiﬁcations by Edward Wallace with help from Quincey Justman.


# Protocol #

### Prepare ###

-   soluble protein buﬀer (SPB; 20mM HEPES-KOH pH7.4, 120mM KCl, 2mM
    EDTA, 0.2mM DTT, 1:100 PMSF, 1:100 protease inhibitors cocktail IV).
    Make stock of salt and buﬀer, add DTT and inhibitors shortly before
    use, and chill.
-   total protein buﬀer (TPB; 20mM HEPES-NaOH pH7.4, 150mM NaCl, 5mM
    EDTA, 3% SDS, 1:100 PMSF, 2mM DTT, 1:1000 protease inhibitors IV).
-   insoluble protein buﬀer (IPB; 8M Urea, 20mM HEPES-NaOH pH7.4, 150mM
    NaCl, 2% SDS, 2mM EDTA, 2mM DTT, 1:100 PMSF, 1:1000 protease
    inhibitors IV.). Mix fresh daily the urea, DTT, and inhibitors (use a stock solution of other ingredients) and keep at room temperature.
    Use 250 μL IPB per sample, and note that Urea is slow to
    dissolve, and foaming will make ~25% of the solution unusable.
    IPB solidiﬁes at 4&deg;C due to urea and SDS; also, don’t
    substitute KCl as it precipitates SDS even at RT.
    
    | 2 mL (~4 samples)  |  13 mL (~20 samples) | |
    |:-:|:-:|:-:|
    | 950 μL | 6.2  mL  | H2O |
    | 200 μL | 1.3  mL  | 20% SDS (w/v) |
    | 40 μL  | 260 μL  | 1M HEPES-NaOH pH7.4 |
    | 8 μL   | 52 μL   | 0.5M EDTA |
    | 75 μL  | 390 μL  | 5M NaCl |
    | 20 μL  | 130 μL  | 100mM PMSF |
    | 4 μL   | 26 μL   | 1M DTT |
    | 2 μL   | 13 μL   | protease inhibitors IV |
    | 0.96g  | 6.24g   | urea |

-   For heat treatment, pre-warm water bath to 46&deg;C or pre-warm
    media as required.
-   Appropriate numbers of safe-lok tubes loaded with 7mm steel balls,
    racked in liquid nitrogen (LN2).
-   Pre-chill a centrifuge, also label and lay out all tubes and
    equipment in advance as the protocol moves very quickly
    once started.
-   Protocol can be paused and samples stored at -80&deg;C when cells
    have been ﬂash-frozen (step [8](#step-flashfreeze)), and after cells have
    been ground in mixer mill (step [11](#step-powder)).


    ### Sample Growth ###

1.  For each strain, inoculate a 3  mL pre-culture of SC-complete medium
    with a single yeast colony and incubate overnight at 30with shaking
    or rotation.

2.  Inoculate overnight culture to OD<sub>600</sub> ~ 0.01 in
    SC-complete medium in a baffled flask, grow to 4×10<sup>6</sup>
    cells/ mL (OD<sub>600</sub> ~ 0.45) at 30&deg;C with 200rpm shaking.

    ### Sample Harvesting and Lysis ###

1.  Transfer 2×10<sup>8</sup> cells to a 50 mL conical tube (50  mL of a
    4×10<sup>6</sup> cells/ mL culture).

2.  Spin at 2500 g for 30s in a swinging bucket rotor at RT. The end of
    this spin marks the start of the timed treatment duration. Gently
    decant and discard supernatant. For heat shock treatment, hold tube
    containing pellet in waterbath at desired temperature for desired
    time; alternatively, transfer to pre-warmed media for desired time
    and end by spinning as described.

3.  Resuspend pellet in 1 mL ice-cold SPB, on ice, and transfer to pre-chilled
    1.5 mL tube.

4.  Spin at 5,000 g, 4&deg;C, for 30 seconds.

5.  Resuspend new pellet in 150 μL lysis buffer.

6.  <a name="step-flashfreeze"></a> 
    Drip 100 μL of resuspended pellet onto upper
    wall of tube containing steel ball, still racked in LN2. Goal is to
    get a nugget of frozen material on the wall, and to avoid dripping
    the material around the ball and thus freezing the ball to the
    bottom of the tube; having some LN2 remaining in the tube helps.
    Place the remaining 100 μL of resuspended pellet in a tube for total
    protein extraction: process, or freeze, immediately.
    

7.  Place tubes at -80&deg;C; when all LN2 has boiled out of tube (listen – if
    any popping or hissing, keep waiting), snap tube closed caref μLly,
    away from other tubes. Keep at -80&deg;C or lower. (Any remaining LN2 in tube will cause tube to explode open and fire the stainless steel ball into
    your iPad, brain, colleague, or other important equipment.)

8.  Rack the tube into the PTFE 2 mL tube adaptor for the Retsch Mixer
    Mill MM400 (Retsch \#22.008.0005) and submerge the entire assembly
    in LN2. Agitate for 4x90 seconds at 30 Hz in a Retsch Mixer
    Mill MM400, returning sample holder to LN2 between sessions.
    Complete lysis produces fine snowy powder in the tube.

9.  <a name="step-powder"></a> 
    Remove sample tubes from LN2, tap on bench to
    release powder from lid, and pop the caps to relieve pressure. 

10. Add 400 μL SPB to each tube, thaw on ice with
    occasional vortexing, and as soon as possible extract ball with
    a magnet. (We rinse balls in methanol and store in 50% ethanol.)

    ### Supernatant fraction extraction ###

1.  Spin at 3000 g for 30 seconds (clarification step) to remove whole
    cells and very large aggregates.

2.  Decant clarified liquid into a 1.5 mL microcentrifuge tube. If
    troubleshooting, keep the 3,000g pellet and process it alongside the
    insoluble fraction; this end product is the *unclarified fraction*.

3.  Spin at 100,000 g for 20 minutes (fixed-angle TLA-55 rotor at 40,309
    rpm, 4, in a Beckman Coulter Optimax tabletop  ultracentrifuge).

4.  Decant supernatant into a 1.5 mL microcentrifuge tube: this is the
    *Supernatant fraction*.

5.  Take 10 μL aliquot of soluble fraction and mix with 2X Laemmli
    buffer; use this to run a protein gel and assess protein integrity.

    ### Pellet fraction extraction 

1.  Violently snap pellet to clear remaining liquid.

2.  Add 500 μL soluble protein buffer (SPB) and vortex.
    (The pellet may not resuspend; that’s fine.)

3.  Spin at 100,000 g for 20 minutes.

4.  Discard supernatant, clear residual liquid with a hard snap.

5.  Add 250 μL insoluble protein buffer (IPB); note this
    means insoluble sample is relatively 2X concentrated to others.
    Process samples in IPB at room temperature to maintain solubility of
    the Urea.

6.  Dislodge the pellet with a pipet tip, Vortex until pellet dissolves,
    10-15 minutes for clarified samples.

7.  Spin at 20,000 g, RT, for 5 minutes.

8.  Decant supernatant into a 1.5 mL microcentrifuge tube: this is the
    *Pellet fraction*.

    ### Total protein extraction ###

1.  Add 400 μL TPB to each total protein tube. Incubate
    at 95°C with 500rpm mixing for 20 min.

2.  Vortex vigorously for 15 min.

3.  Spin at 6000 g, RT, 1 min. Take supernatant; this is the *Total
    protein fraction*.

    ### Measure protein ###

1.  Run a 4-15% SDS-page gel; load roughly 5-10 μL of
    total and soluble fractions. Make aliquots for further analysis.
    
2.  For more information, western blot against known stress-aggregating proteins (e.g. Pab1). 

3. Chloroform-methanol extract protein from each fraction for mass spectrometry analysis. We use reductive dimethylation following tryptic digestion for post-sample-collection isotopic labeling.

