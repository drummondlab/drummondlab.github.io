---
layout: post
title: "Stress causes aggregation, and that's a good thing"
description: ""
author: "D. Allan Drummond"
author_handle: dad
category: blog
published: true
theme: lab
tags: []
---
{% include JB/setup %}

We've just published a [paper][1] on how cells respond to heat stress.

### A bit of background

Like us, cells react to stresses like heat, starvation, and poison. All these stresses cause clumps of molecules to form inside cells. This clumping---aggregation---looks like damaged proteins sticking together. But in our last [paper][agg], we showed that instead, these clumps look like they're a cellular response, not just signs of damage. (See our [blog post][agg-blog] on it.)

We're going to go back to the Cellular Institute with its manicured grounds and main building. Happy workers (proteins) go about their often inscrutable business.

![institute-overview](/assets/images/cellular-institute-unstressed.png){:width="300px" style=".center"}

The Institute is constantly dealing with awful changes in its environment. The mission is to survive, even to keep growing, during those tough times.

![growth-report](/assets/images/environmental-and-growth-reports.png){:width="300px" style=".center"}




Is clumping damage or response? A key test is to see what happens when you stop the clumping during stress. Stopping damage during stress should make cells healthier. Stopping a stress response, on the other hand, would make cells sicker.

### Doesn't sound too complicated

Easy for you to say, headline! In our study, we had to first find a protein that formed clumps during stress, then figure out how to control its clumping without screwing up a bunch of other stuff (which involved quite a bit of figuring out why it formed clumps, physically, and which bits of the molecule were responsible). Doing all that required working on the protein in isolation in a test tube, so then we had to put the protein back into cells and check to see if it worked the same way as it did in the tube. Finally, we could expose those cells to stress and see how they responded.

### What did we do?

We picked out a specific protein that formed clumps during stress: poly(A)-binding protein, which is nicknamed Pab1 in baker's yeast, our beautiful and hardy model organism. (Relatives of Pab1 are found in essentially every cell that has a nucleus, from plants to parasites to people.) We purified Pab1, put it in a dish, and exposed it to the same intracellular conditions that follow stress and are thought to cause clumping, heat and pH. Yeast cells like to live in acidic (low-pH) environments, but keep their insides at neutral pH. When cells get stressed, their internal pH drops, becoming more acidic. That, others have argued, might cause clumping during non-heat stresses like starvation.

![ph](/assets/images/heat-starvation-ph-at-cell-institute.png){:width="300px" style=".center"}

### What did we find?

First, we discovered that Pab1 "clumping" was something rather specific and wonderful: phase separation into hydrogel droplets.

Phase separation is like a flash crowd. Under certain conditions, suddenly a mixture of two kinds of molecules separates ("demixes") like oil and water.

![ph](/assets/images/heat-starvation-ph-at-cell-institute.png){:width="300px" style=".center"}

Pab1 does that in response to both pH and temperature, right in the 

We discovered that aggregates of endogenous proteins that form after heat stress are fully reversible, form rapidly at specific locations, and in certain cases retain function and fidelity in vitro.

The behavior of endogenous, mature proteins in vivo does not match expectations from studies that use exogenous/reporter proteins or that focus on newly synthesized proteins. In those studies, aggregated proteins are often (but not always) degraded and generally lose their function.

### Ideas

What looked like heat-induced protein damage followed by triage and degradation instead looks like an orderly, evolved regulatory response.

### Irresponsible speculations

Heat-induced protein aggregation has been seen as mostly _physics_, but (for proteins that actually aggregate during heat shock) it'll turn out to be mostly _biology_. The vast majority of aggregation in the cell in response to heat shock will prove to be beneficial. And not just by preventing toxicity, the way amyloid fibrils are often argued to be beneficial, but by carrying out critical cellular remodeling functions.

Primary among those functions: focusing cellular protein synthesis on mRNAs encoding stress-responsive proteins.

### Picture, please?

For the science, there's no substitute for reading the [paper][1]. Here, I want to talk a little bit about how to think about what's going on in the cell, given our study and everything else we know.

Here is the idyllic campus of the Cellular Institute with its manicured grounds and main building. Happy workers (proteins) go about their often inscrutable business.

![institute](/assets/images/cellular-institute.png){:width="300px" style=".center"}

When suddenly: *catastrophe*. A fire breaks out. (Heat shock!) What happens?

What has long been observed---blurrily, as if from orbit, because our instruments aren't so great---is that suddenly the workers move to particular places and gather together in big groups.


![fire-drill-blurry](/assets/images/fire-drill-blurry.png){:width="300px" style=".center"}

Then after a little while, emergency crews show up, and some time after that, everything's back to normal.

So what's going on? 

Most previous work has guessed, for many good empirical reasons, that mainly what's going on is that the workers are distressed, damaged, even dying. Workers clump together because---gruesomely---heat partially melts them and makes them sticky. Of course, these workers stop working. Some injured workers can be rescued; many of them are beyond saving. The emergency crews triage victims, rescue some, and dispose of the bodies of the rest.

![heat-shock-damage](/assets/images/heat-shock-damage.png){:width="550px" style=".center"}

The alternative is that the institute has in place disaster-preparedness plans. What we observe is those plans being carried out to the letter, and the plans for heat shock look like the plans for a wide range of other emergencies:

![emergency-plan](/assets/images/cellular-emergency-plan.png){:width="350px" style=".center"}

Some workers stop working, but not because they're damaged, just to clear the way for the emergency crew. Others continue to go about their business. Those clumps are groups of workers calmly holding on to each other and collecting at [designated assembly points](http://www.potsdam.edu/about/physicalplant/evacuationplans/procedures.cfm). The emergency crew shows up and tends to the few workers who are actually injured. When they're done, the crew helps the assembled workers let go of each other and return to their original jobs.


![heat-shock-assembly](/assets/images/heat-shock-assembly.png){:width="550px" style=".center"}

Our study provides evidence that this latter set of activities describes the behavior of most endogenous, mature proteins. Which is not to say that the damage-and-chaos stuff doesn't happen! Rather, it happens mainly to newly synthesized proteins and to foreign, destabilized reporter proteins.

So here's what we think is going on:

![fire-drill](/assets/images/fire-drill-building-diagram.png){:width="750px" style=".center"}

The "emergency crew" here is, naturally, the team of heat-induced molecular chaperones.

There's much more to do, and we're incredibly excited to share the stories coming out of this work. Stay tuned...	



[1]: /papers/paper/adaptive-phase-separation/
[agg]: /papers/paper/endogenous-aggregates/
[agg-blog]: /blog/about-endogenous-aggregates/
