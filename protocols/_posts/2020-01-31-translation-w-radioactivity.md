---
layout: protocol
title: "Measuring translation in yeast by liquid scintillation counting"
published: true
category: protocol
tags: [yeast, translation, biochemistry, radioactivity, liquid scintillation counting, translation rate]
---

This protocol is to measure the translation rate in yeast cells by 35-S incorporation quantified by liquid scintillation counting.

Based on protocol 'In Vivo 35-S-Methionine Incorporation' by Esposito et al. 2014 (https://doi.org/10.1016/B978-0-12-420070-8.00005-2), with modiﬁcations by Cat Triandafillou.


# Protocol #

## Reagents

### Wet reagents

- yeast growth media (SC or YP plus sugar if required)
- S35-labeled translation mix (Perkin Elmer cat. no. NEG772)
- 50% trichloroacetic acid (TCA)
- 5% trichloroacetic acid (TCA)
- 95% ethanol
- Perkin Elmer Ultima Gold F Scintillation Fluid (cat. no. 6013171)
- *Optional:* 20 mg/mL cycloheximide (CHX) in 95% ethanol


### Consumables

- SafeLock Tubes (cat. no. 022363204)
- Scintillation vials and caps (cat. no. **XX**)
- 50 mL conical tubes
- 2.5 cm Whatmann glass filters (cat. no. WHA1823025)
- Whatman #1 filter paper (cat. no. WHA1001824 or WHA1001917)


### Instruments

- Vacuum Manifold
- Heat block 
- Spinning bucket centrifuge with rotor capable of holding 50 mL conical tubes
- Tri-Carb Scintillation Counter


## Procedure

1. Grow cells
    - The night before, start a 5mL tube of yeast from glycerol stocks or a plate.
    - Next day: dilute cells into 25mL media, 250 rpm shaking at 30 C. Grow until cells reach an OD of 0.1-0.4. When cells have nearly reached this range, do step 2.
    
2. Prepare to measure translation
    - Put 50% TCA on ice -- it should be ice-cold by the time you want to peform the assay.
    - Make a 0.2µCi/mL solution of the translation labeling mix in water.
    - Prepare radiolabeled media and media blanks by mixing 12 mL of media per sample with 120 uL of the stock radioactivity solution. Remove 2x 1 mL aliquots into SafeLok tubes for background measurements (I do to technical reps for each type of media I'm using).
    - If doing the negative control, add 100 uL of 20mg/mL CHX to media. Add carrier (95% ethanol) to the other aliquot of media.
    - Label Whatman paper with each sample and timepoint. Lay them the sheets out on foil and set aside.
    - Assemble vacuum manifold with filters.
    - Set heat block to 70&deg;C

3. Harvest cells
    - Once cells have reached the target OD, spin down a 10 mL aliquots for each sample/treatment/strain (I usually only do 2-3 at a time, each timepoint will get 2x tech replicates, and 6 samples is the most I want to process at once).
    - Bring pelleted cells to radioactive work room, then decant and resuspend in labeled medium (10 mL for each sample/treatment). 
    - Immediately take 0 minute timepoint, start timer for timecourse, and follow steps below for each timepoint you want to measure (a good place to start is 0, 10, 30 minutes).
    - You can hold cells in the 50 mL conical flask on the benchtop, or move to a 250mL baffled flask and shake at 30&deg;C.

4. Process samples
    - Take a 1 mL aliquot (x 2 technical replicates) of each sample/treatment/strain. Place in a SafeLok tube (while these aren't strictly necessary, I find it's better to be safe than sorry when it comes to exploding tubes of radioactive media -- just a personal preference) and add 200µL ice-cold 50% TCA.
    - Incubate on ice for 10 minutes.
    - Heat at 70&deg;C for 20 minutes.
    - Return to ice for 10 minutes.

5. Spot samples onto filters
    - Wet a filter for each tube on the manifold with 1 mL room-temperature 5% TCA.
    - Tap each SafeLok tube gently on the benchtop to encourage drips to condense at the bottom, pipette once or twice to mix, then load entire sample onto the wetted filter (one filter per sample/timepoint).
    - Wash **three** times with 5mL of room-temperature 5% TCA.
    - Wash two times with 5mL of room-temperature 95% ethanol.
    - Filters can be kept on the manifold until every space is filled, then transferred to the labeled Whatman paper to dry. I usually do this on foil to avoid getting liquid on the benchtop.
    
6. Read samples
    - After filters have dried for at least 24 hours, carefully transfer each to a scintillation vial (I find it's easiest to do this by using tweezers to hold as little of the filter as possible, then gently folding in half and inserting it into the glass vial with a light hand).
    - Add 5mL of scintillation fluid to each vial. I've found that samples can be read with 4mL if you're running low or want to save material; however I'd pick one volume and stick with it for direct comparison.
    - Read on the TriCarb using the program for P32.



## Notes

- This protocol is used to measure the translation rate of yeast. If swapping into a new media, do so when preparing radioactive stock in step 2. I've included optional instructions for a cycloheximide treated sample for comparison -- these should give a flat line and will give a sense for the noise in your measurement.

- All timecourses should be background subtracted (media + translation mix alone with no cells) and reported relative to the first timepoint (0 minutes).

- Make sure to do technical replicates -- these measurements can be quite noisy -- spread in the tech reps will give you a sense of how well you're doing.

- **The two steps I've found most crucial for reducing measurement noise are a) washing with the full volume and number of times, and washing each sample the same number of times and b) returning the samples to ice (i.e. not loading them on the filter hot).**

- I've found that an optimal timecourse is 0, 5, 10, 20 minutes for 2-3 samples. This is basically the fastest that I can process samples without them bumping up against each other (although I don't have a sense for how much the time on ice after heating the samples affects the readings, so it's possible a finer spacing of points could be done and samples held before loading onto filters). The media-only/blank samples can be processed with the 20 minute samples, which allows time to change the filters on the vacuum manifold in the 10 minute gap between the 10 and 20 minute samples (assuming two different biological samples and two technical replicates of each timepoint).