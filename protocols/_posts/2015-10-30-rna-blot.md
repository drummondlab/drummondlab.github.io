---
layout: protocol
category: protocol
published: true
title: "Anti-RNA blotting with chemiluminescent detection"
author: "Edward Wallace"
nickname: RNABlot
tags: [RNA, northern, blot]
---
{% include JB/setup %}

This protocol is for northern blotting/dot-blotting to detect specific
RNAs via chemiluminescence, using biotinylated DNA oligo probes. Gels etc
are optimized for detection of 0.5-4kb mRNA transcripts.

Much of it is adapted from ULTRAhyb-Oligo and Brightstar BioDetect
commercial protocols, or from *Nonisotopic Probing, Blotting, and
Sequencing* (Kricka, ed; chapter 5).

For abundant RNAs, it is possible to reduce the lengths of the (many) 
hybridization, wash and block steps while still obtaining a clean blot 
with low background - test probes and sample the slow way first.


## Ingredients ##

-   1X TBE, 0.5X TBE. Make from 10X stock.

-   RNase-free agarose

-   Gel casting, running and electroblotting equipment (BioRad Minigel system,
    Biorad Criterion or Protean blotter)

-   RNA ladders: ThermoFisher RiboRuler HR (#SM1821) is good for 200-6000nt mRNAs.
    DynaMarker® Prestain Marker for RNA High (Biodynamics #DM260) is a prestained
    ladder made of polysaccharides useful for seeing the gel run and or successful 
    membrane transfer, but it runs larger than advertised length on TBE-agarose gels.

-   Positively charged nylon membrane (BrightStar-Plus Positively
    Charged Nylon Membrane, or Roche 11-209-299-001, or Bio-Rad Zeta-Probe #1620154)

-   UV crosslinking box, e.g. Stratalinker.

-   ULTRAhyb-Oligo buffer (Life/ThermoFisher AM8663)

-   DNA oligo probes: 5’ biotinylated, 36-45nt long, 60-75C hybridization
    temperature, 45-65% GC-content, in
    10uM working solution. Or use biotinylated oligo-dT
    probes (Promega #Z5261) at 5 pmol/uL for mRNA.

-   Stringency wash buffer: 2X SSC (300mM NaCl, 30mM sodium citrate, pH
    7.0), 0.5% SDS. Make from 20X SSC stock (Life/ThermoFisher, AM9770).

-   NB strip buffer: 0.1X SSC, 0.5% SDS.

-   Streptavidin-AP conjugate (Life/Thermo Fisher #S921)

-   CDP-Star® Luminescent Substrate (0.25 mM Ready-To-Use), (Life/ThermoFisher #T2146)

-   Wash buffer: 1X PBS, 0.5% SDS. Make a 5X concentrate with 5X PBS and 2.5% SDS.

-   Blocking buffer: 1X PBS, 0.5% SDS, 0.1% I-Block reagent.

-   Assay buffer: 0.1M DEA (diethanolamine), 1mM MgCl2, pH 10.0.
    
Note: the BrightStar BioDetect Nonisotopic Detection Kit (Life/ThermoFisher AM1930), 
contained CDP-star, Strep-AP, 5X wash buffer, 1X blocking buffer, and 10X assay buffer, but was not 
produced after 2014.

Make wash, block and assay buffer fresh every month.


### Be fastidious about cleanliness and avoiding degradation! ###

-   Use RNAse-free equipment and solutions to run gel and transfer so
    you get a clear single band, and do not degrade your sample.

-   Only ever touch the membrane with forceps, i.e. not with your skin,
    sweat, etc, to avoid background.


## Dot Blot ##

To check if your probes and buffers are working without running a gel.

1.  Gently pipette 10uL of each RNA sample onto positively charged nylon membrane
    on vacuum (fritted glass plate). Dry membrane.


## Northern Blotting ##

1.  Cast a 1.5% agarose gel in 1X TBE buffer with 1:10000 SYBR safe and
    allow to set.

2.  Put 1uL (or other measured amount) of each RNA sample into total
    10uL of 1X RNA loading buffer (NEB). Heat the tubes at 65 C for 5 min
    to denature RNA and then immediately place the tubes on ice.

3.  Load samples on the gel along with 5uL RNA ladder/markers. Run the gel 
    in 1X TBE buffer at 100 V for 30min, or until the first bromophenol 
    blue dye reaches the bottom of the gel. [^1]

4.  Turn off the current, remove the gel, and transfer the RNA onto a
    positively-charged nylon membrane. Use a pencil to mark the *sample*
    side of the membrane. Assemble gel sandwich according to picture on blotter instructions
    (RNA is negatively charged, so gel near negative electrode and
    membrane near positive electrode), use a standard Western blotting
    apparatus with 0.5X TBE buffer at 1 amp for 1 h. Trim off the
    portions of the gel that do not contain the samples to decrease the
    size of the membrane and use of smaller amounts of reagents in
    subsequent steps. 

5.  Crosslink RNA to the membrane by UV at 300 mJ/cm<sup>2</sup>; keep the
    membrane wet during crosslinking. Then dry the membrane; sample side
    faces *up* throughout.


## Hybridization ##

6.  If necessary, reheat ULTRAhyb-Oligo to 42-68 C to dissolve all
    precipitated material. 

7.  Prehybridize the blot for 10 min at 42 C with gentle agitation (incubator 
    at 42 C with 40rpm shaking). Use 1 mL ULTRAhyb-Oligo Hybridization
    Buffer per 10 cm<sup>2</sup> of membrane; volumes shown here are for
    minigel-sized blot, about 100 cm<sup>2</sup>. Be certain that enough solution 
    is present to keep the membrane uniformly wet for all subsequent steps.
    \[step:prehyb\]

8.  Add 5 nM of the end labeled oligonucleotide (0.5 ul of
    10 uM working solution per mL of buffer). Since it is
    important that undiluted probe solution does not touch the membrane,
    pour the ULTRAhyb-Oligo solution from the prehybridization into a 50
    mL conical tube, add the labeled probe, mix by swirling, and then
    immediately pour the solution back into the container with the blot.

9.  Hybridize overnight (6-24hr) at 42 C with gentle agitation. It may be
    possible to reduce the hybridization time down to 1hr for detection of
    relatively abundant RNA.

10. Wash the blot 2x30 min. Pipette off hybridization solution 
    *and save in 10mL tube*, this can be reused multiple (~5) times. 
    Immediately pour at least 50 mL stringency wash buffer onto the blot 
    and incubate at 42 C for 30 min with gentle agitation. Repeat with fresh 
    stringency wash buffer.


## Detection ##

11. Measure the surface area of your membrane to determine the amounts
    of the washing and assay buffers needed. For example, for a 10 x 10 cm membrane (100
    cm<sup>2</sup>), 100 mL of washing buffer and 30 mL of assay buffer are
    needed (the volumes below are given for a 100 cm<sup>2</sup> membrane).
    Place the membrane sample side up in a plastic box of similar size, 
    at room temperature  on a rocking shaker at medium speed (10-20 rockings/min).
    Do not allow the membrane to dry throughout the entire procedure.

12. Wash the membrane 2 times, 5 min each, in 20 mL 1X washing buffer.

13. Wash the membrane 2 times, 5 min each, in 10 mL 1X blocking buffer.

14. Wash the membrane once for 30 min in 20 mL 1X blocking buffer.

15. Incubate the membrane for 30 min in 10 mL of conjugate solution
    (10 mL blocking buffer plus 1 ul of streptavidin-alkaline phosphatase 
    conjugate).

16. Wash the membrane once for 15 min in 20 mL 1X blocking buffer.

17. Wash the membrane 3 times, 15 min each, in 20 mL 1X washing buffer.

18. Wash the membrane 2 times, 2 min each, in 15 mL 1X assay buffer.

19. Incubate the membrane in enough CDP-star solution to cover, about
    1mL, for 5 min. Rotate by hand to make sure that the solution evenly
    covers the entire membrane.

20. Take out the membrane with forceps. Let the excess of CDP-star
    solution drip off, place the membrane on clear plastic wrap and
    wrap, ensuring no air bubbles are left.

21. Image the membrane on the Chemi-doc or other digital imager. Use
    chemiluminescent detection with signal accumulation mode, for
    example 45 images, 900 s. The CDP-star reaches peak light emission in
    2-4 h, and the light emission persists at the high level for several
    days, so you may get a better image by waiting an hour
    to image. SYBR safe also tends to transfer to the membrane with
    rRNA, sometimes enough to be seen by the naked eye, but is
    visualizable on Cy3 channel; unfortunately Xylene Cyanol
    is also transferred, visible as a lower-molecular
    weight bright blur on this channel so tRNA is not visible.


## Stripping and re-probing ##

Membranes may be stripped and re-probed multiple times (at least 4);
they can be left in wash or block solution overnight, or frozen in
plastic wrap at -20 C for weeks.

22. Remove membrane from plastic wrap, place membrane in a plastic tray
    that can survive 100 C liquids, covered by a minimal amount of NB
    strip buffer. Do not dry membrane, which may stick previous probes
    to membrane.

23. Twice: Heat 50mL NB strip buffer to boiling, in the microwave. Empty
    previous liquid, and pour boiling strip buffer over membrane
    in tray. Allow to cool to room temperature on rocker, about
    15 minutes.

24. Restart hybridization with new probes and continue as before.

[^1]: For smaller RNA (50-500b) use a Bio-Rad Criterion TBE-Urea 5%
    acrylamide gel with 1X TBE buffer, be sure to wash wells with TBE 
    before loading. Run at 200 V for 60min.
