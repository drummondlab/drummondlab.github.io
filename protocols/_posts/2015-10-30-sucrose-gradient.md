---
layout: protocol
category: protocol
published: true
title: "Sucrose gradient protocol for polysome profiles"
author: "Edward Wallace"
nickname: SucroseGradient
tags: [RNA, ribosome, polysome, gradient]
---
{% include JB/setup %}

This protocol is for polysome fractionation by sucrose gradient, to view
translational status of cells and ribosome-association of mRNAs and
proteins, using the BioComp gradient station
(http://www.biocompinstruments.com/). It’s based on the BioComp
instructions, with help from Wesley Clark.

Read the BioComp instruction book for more details of gradient station 
operation, especially for troubleshooting.


## Components ##

### Wet ingredients ###

-   Sample: 100-500 ul cell lysate, with assembled
    polysomes, at OD260 ~ 100.

-   Mammalian Polysome gradient buffer: 100mM KCl, 7.5mM MgCl2, 5mM
    Tris-HCl pH7.5, or,

-   Yeast Polysome gradient buffer: 140mM KCl, 5mM MgCl2, 5mM Tris-HCl pH7.5
    (NOTE: Can adjust salt, Mg, pH, etc; common additions are cycloheximide to
    freeze ribosomes in place, heparin to reduce nonspecific RNA-protein binding and
    inhibit RNase, DTT as reducing agent, RNase inhibitors. I've made good
    polysome gradients without any of these at 2-10mM MgCl2, pH 6.5-7.5. Degraded
    DTT is really bad as it absorbs over the RNA spectrum.)

-   50% Sucrose buffer: 0.5g/ml sucrose in polysome gradient buffer, filter sterilized.

-   10% Sucrose buffer: 0.1g/ml sucrose in polysome gradient buffer, filter sterilized.

### Dry ingredients ###

-   BioComp Instruments gradient station.

-   Beckman Coulter S-rated ultracentrifuge, e.g. Optima XP-100.

-   Beckman SW28 rotor and SW28.1 (or SW28) tube buckets, kept in cold room. Rotor
    must be placed only on rotor-holding platform, do not scratch speed ring on bottom.

-   Seton open-top polyclear centrifuge tubes SW28.1 (part.no 7042). Alternatively, 
    SW28 (part.no 7052); SW28 are wider and slightly shorter.
    

## Prepare gradients ##

1.  Layer sucrose into centrifuge tube: place a polyclear centrifuge tube in the
    marker block. Pour 10% sucrose buffer into the tube up to the top of the marker
    block (roughly 10ml for SW28.1 / 19.5ml for SW28). Load 50% sucrose buffer into
    a 50ml Luer-lok syringe with a layering cannula (BioComp 106-211) attached; with
    the needle pointing upwards, expel air from the needle. Quickly and smoothly
    invert the syringe so the needle is in the bottom centre of the half-filled
    centrifuge tube. Slowly layer 50% sucrose buffer at the bottom of the tube until
    the top of the meniscus is at the top of the tube (roughly 10ml; 19ml for SW28),
    and carefully remove needle from tube. Place the capillary cap on top of the
    tube, ensuring tube is sealed round edges of cap. Repeat for desired number of
    tubes (2, 4 or 6 total), and place filled tubes in magnetic tube rack.

2.  Level the gradient maker platform on the gradient station: turn
    gradient-maker on, choose GMST menu option. The machine will prompt you to level
    the gradient-making platform. Place a bubble level on the platform with axis
    perpendicular to the side plate of the machine and use the UP and DOWN menu
    options to level the platform (the machine should already be level front to
    back); press DONE.

3.  Make gradients: place magnetic tube rack on gradient-making platform. Select
    GRAD option to arrive at gradient menu. The first time, go to LIST and choose
    the SW28.1 (or SW28) rotor option. Press DOWN until arriving at the 10-50% sucrose 
    gradient option, and press USE. If the machine was used for 10-50% sucrose gradient
    immediately previously, simply select LAST from the gradient menu. Press USE to
    start making gradients, which takes roughly 10 minutes. *From this point onwards,
    keep the tubes upright and make no sudden movements with them, so as not to
    disturb the gradient.* Remove capillary cap from tube and, using long-nosed
    pliers if necessary, place in rotor bucket in bucket rack.

4.  Balance the tubes: balance tube 1 with tube 4, 2 with 5, and 3 with 6.
    Placing bucket-tube assembly on scale, remove sucrose gradient from top of tube
    as necessary to ensure paired tubes are within 0.1g in mass.

5.  Prepared gradients can be stored at 4C for a day or two.


## Spin ##

6.  Load sample and assemble rotor: take sample, SW28.1 (or SW28) rotor, 
    bucket rack, and 200 ul pipette to ultracentrifuge. Load sample in
    each tube by placing filled pipette tip in meniscus at side of tube,
    and pipetting slowly; you should see the sample spreading out across
    top of liquid. Gently place lid on tube and screw cap on bucket.
    Hang buckets in numbered slots on rotor, checking that both hooks
    are attached for every bucket.

7.  Set up centrifuge: turn on centrifuge, break vacuum and open
    spin chamber. Select 27500 rpm, 3.5hrs, 4C, with vacuum, on
    centrifuge controls. Place rotor assembly on axle, and seal
    spin chamber. Start centrifuge and fill out centrifuge logbook.
    Check on the centrifuge after 15 minutes to ensure it is
    running smoothly.

8.  After running for 3.5hrs, the centrifuge takes several minutes
    to brake. Once the centrifuge has stopped spinning, release the
    vacuum, carefully remove rotor from spin chamber and place buckets
    in bucket rack.


## Set up gradient station ##

9.  Take bucket rack with gradients to gradient station, very gently.

10. Turn on the gradient station, the UV monitor, the fraction collector, 
    and the linked computer. Connect the USB cable, start the gradient profiler
    program on the computer and enter appropriate parameters.

11. Flush the line and calibrate the UV monitor: press DRAIN on fraction
    collector. On the gradient station, from the initial screen press FRAC, then
    FRAC. Hold RINSE on gradient station to flush the line. Half-fill a centrifuge
    tube with 10% sucrose buffer, turn front dial so that vacuum plunger descends at
    about 0.5 mm/s. Once plunger is a few cm into liquid and drips are coming out of
    the fraction collector, press AUTO ZERO on the UV monitor.


## Collect fractions ##

For each ultracentrifuge tube with sample:

12. Initialize fraction collector: ensure there are 30x clean 1.5ml
    tubes in the two middle rows of the tube holder. Pre-label the tubes
    if desired. Press END, then START, and make sure drip outlet is
    above tube 0.

13. Remove bucket cap, remove centrifuge from bucket using long-nosed
    pliers, and attach locking top to centrifuge tube. Place tube in
    tube holder on gradient station, locking the tube in place by
    rotating the cap to lock in place. Slide tube holder onto mount on
    top of gradient station with window facing to the right, and turn
    clockwise so window is facing towards you.

14. On gradient station, press FRAC once or twice to get to the fractionation
    menu, then SNGL for single run, and set the parameters to speed = 0.3, distance
    = 3.2 (for SW28.1; 2.6 for SW28), and 31 fractions. Rotate front dial to full
    counterclockwise position. Move plunger downwards by turning dial to the right
    until speed = 1.0 mm/s; move plunger slowly (0.2 mm/s) as it approaches the
    gradient surface, so that you can stop (by turning dial fully left) as soon as
    the plunger has sealed on the gradient. Press RESET on gradient station. In
    subsequent tubes from same run, reset to same position -- i.e. 0.0 mm on display 
    -- from previous tube.

15. On the gradient profiler program on the computer, press RECORD. Then
    press START on gradient station.

16. When finished, remove tubes from fraction collector and label them.
    Press EXIT 3 times on gradient station to return to fraction menu,
    and remove centrifuge tube from holder. *Crucially, save the output
    on the computer, and press NEW RUN to record the next gradient.*

17. Note that the first 1-3 tubes in the fraction collector are usually
    empty, so that the tube number on the rack is offset from
    that reported in the gradient profiler software (BioComp 
    instructions suggest this is solvable: good luck!). Tube 0 according 
    to gradient profiler software is the first filled tube on the fraction 
    collector. It may be easiest to label the tubes accordingly, after the 
    fractions are collected. 


## Cleanup ##

18. Check **all** equipment for potential sucrose gradient spills and
    clean thoroughly with damp cloth and dilute ethanol; this is a very 
    sticky spill. In particular, clean the plunger and flush the tubing 
    with water. 

19. Flush tubing with a full tube of 50% Ethanol to disinfect (DRAIN on 
    fraction collector, from FRAC screen on gradient station lower plunger 
    at about 0.5 mm/s).

20. Store rotor and buckets in cold room, on rotor holding platform.


