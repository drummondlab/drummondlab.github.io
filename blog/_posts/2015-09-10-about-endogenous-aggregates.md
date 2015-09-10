---
layout: post
title: "Rethinking heat-induced aggregation"
description: ""
author_handle: dad
category: blog
published: true
theme: lab
tags: []
---
{% include JB/setup %}

We've just published a [paper][1] on how cells respond to heat stress.

### What did we do?

We measured heat-induced protein aggregation and disaggregation in budding yeast, a beautiful and hardy free-living unicellular organism that grows happily at 30°C, gets stressed out starting around 37°C, and dies pretty fast at 50°C.

We discovered that aggregates of endogenous proteins that form after heat stress are fully reversible, form rapidly at specific locations, and in certain cases retain function and fidelity in vitro.

The behavior of endogenous, mature proteins in vivo does not match expectations from studies that use exogenous/reporter proteins or that focus on newly synthesized proteins. In those studies, proteins are often degraded, and aggregated proteins lose their function.

### Ideas

What looked like heat-induced protein damage followed by triage and degradation instead looks like an orderly, evolved regulatory response.

### Irresponsible speculations

Heat-induced protein aggregation has been seen as mostly _physics_, but (for proteins that actually aggregate during heat shock) it'll turn out to be mostly _biology_. The vast majority of aggregation in the cell in response to heat shock will prove to be beneficial. And not just by preventing toxicity, the way amyloid fibrils are often argued to be beneficial, but by carrying out critical cellular remodeling functions.

Primary among those functions: focusing cellular protein synthesis on mRNAs encoding stress-responsive proteins.

## Picture, please

For the science, there's no substitute for reading the [paper][1]. Here, I want to talk a little bit about how to think about what's going on in the cell, given our study and everything else we know.

Here is the idyllic campus of the Cellular Institute with its manicured grounds and main building. Happy workers (proteins) go about their often inscrutable business.

<center>
<img src="/assets/images/cellular-institute.png" width=300px>
</center>

When suddenly: *catastrophe*. A fire breaks out. (Heat shock!) What happens?

What has long been observed---blurrily, as if from orbit, because our instruments aren't so great---is that suddenly the workers move to particular places and gather together in big groups.

<center>
<img src="/assets/images/fire-drill-blurry.png" width=300px>
</center>

Then after a little while, emergency crews show up, and some time after that, everything's back to normal.

So what's going on? 

Most previous work has guessed, for many good empirical reasons, that mainly what's going on is that the workers are distressed, damaged, even dying. Workers clump together because---gruesomely---heat partially melts them and makes them sticky. Of course, these workers stop working. Some injured workers can be rescued; many of them are beyond saving. The emergency crews triage victims, rescue some, and dispose of the bodies of the rest.

<center>
<img src="/assets/images/heat-shock-damage.png" width=550px>
</center>


The alternative is that the institute has in place disaster-preparedness plans. What we observe is those plans being carried out to the letter, and the plans for heat shock look like the plans for a wide range of other emergencies:

<center>
<img src="/assets/images/cellular-emergency-plan.png" width=350px>
</center>

Some workers stop working, but not because they're damaged, just to clear the way for the emergency crew. Others continue to go about their business. Those clumps are groups of workers calmly holding on to each other and collecting at [designated assembly points](http://www.potsdam.edu/about/physicalplant/evacuationplans/procedures.cfm). The emergency crew shows up and tends to the few workers who are actually injured. When they're done, the crew helps the assembled workers let go of each other and return to their original jobs.

<center>
<img src="/assets/images/heat-shock-assembly.png" width=550px>
</center>

Our study provides evidence that this latter set of activities describes the behavior of most endogenous, mature proteins. Which is not to say that the damage-and-chaos stuff doesn't happen! Rather, it happens mainly to newly synthesized proteins and to foreign, destabilized reporter proteins.

<center>
<img src="/assets/images/fire-drill-building-diagram.png" width=750px>
</center>

The "emergency crew" here is, naturally, the team of heat-induced molecular chaperones.

## How the study unfolded

Way back in the day, we spent a lot of time developing cryogenic lysis and cellular fractionation (total, supernatant, pellet) methods for budding yeast. Mike Dion did exquisite, exhaustive, exhausting studies on cell lysis by all sorts of methods.

We'd also developed our mass spectrometry (MS) capabilities to be able to do proteomics. We wanted to know what proteins formed aggregates under normal conditions in yeast cells. But we needed a positive control, a condition where aggregation would be obvious. Mike did what we thought was a simple but cool experiment: proteome-scale in vivo thermal denaturation. The idea was to heat cells fast (50°C for two to eight minutes, a lethal shock for the vast majority of cells), then watch proteins misfold and aggregate, measuring aggregation by MS.

Well, lots of proteins formed aggregates, but we couldn't see any rhyme or reason to which ones did or didn't. I'd thought, based on [previous][2] [work][3], that low-expression proteins would be more prone to aggregate. Nope. What we had was data but no insight.

The next big step came when [Alexandra Rojek](/team/alexandra-rojek/) joined the group as a summer undergraduate researcher. She recombinantly purified a few proteins we'd found to be heat-sensitive in cells, heated them in vitro, and found that they aggregated. So the proteins themselves were sensitive to heat. And then she and [Jamie Scott](/team/jamie-scott/) found the this heat-sensitive aggregation-prone behavior was specific to certain protein domains, like the N-terminal domain of a protein called Gus1. Oddly, Gus1N didn't show much structural change when it aggregated. And graduate student [Josh Riback](/team/josh-riback/) showed that the onset of aggregation closely tracked the 

We realized we'd been thinking about the problem all wrong. We'd tried to thermally denature proteins---physics---but we had instead stumbled upon a stress-triggered molecular assembly process---biology. This point of view locked in when we found the literature on [heat-shock granules](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC370018/), which were discovered in 1983 and studied by many groups since but which we'd been perfectly ignorant of. But studying a stress response using a lethal stress is obviously insane. We had to redo our entire study. What a terrible, necessary, awful realization!

Enter [Edward Wallace](/team/edward-wallace/), a theorist postdoc in the group who saw the opportunity to do an important experiment and seized it. He learned how to do lysis, got triple isotope labeling up and running, and made the critical observation that you can't see most of the aggregation in yeast cells if you leave polysomes intact. Polysomes (many ribosomes on mRNA) drop into the pellet at the speeds we were spinning. Put EDTA in the lysis buffer, and polysomes fall apart (they require Mg<sup>2+</sup>). He redid the entire study at 46°C, a tough but survivable temperature for budding yeast, and found more or less the same results. Only now we could see that virtually every heat-shock-granule component previously identified formed aggregates in our assay, along with ten times more proteins that nobody had reported yet. Game on!

Then a master's student on a one-year exchange program, [Pawel Laskowski], reconstituted a three-protein complex that was heat-sensitive in vivo, demonstrating that it was heat-sensitive in vitro. With Michael Schwartz in the [Pan lab](http://openwetware.org/wiki/Pan_Lab), he showed that the complex, containing Gus1 and two other proteins, was still active when aggregated.

Jamie and Alexandra, with help from grad student [Chris Katanski](/team/chris-katanski/), built a bunch of strains to look at colocalization between aggregating proteins in live cells. They found all sorts of interesting stuff, most obviously new heat-shock granule components and new types of aggregates in the nucleus and nucleolus.

We took the show on the road. The critical addition came when Edward and I talked about the work at the FASEB meeting _Protein Folding in the Cell_ in Vermont, he at his poster and I in a 12-minute talk. People kept asking, So, is the aggregation reversible? Turns out that for various reasons, this basic question had not been answered for cellular . 

But we work with stable isotopes, which are perfect for answering questions about . In the back of the auditorium after my (pretty awful) talk, I sketched out the experiment. Actually, I made Figure 6A, the bottom experimental-design part, and showed it to Edward, who said, "Yep, I can do that." And he did, and in a gift from the universe, it worked on the first try. Most importantly, the results showed us what we'd not even dared hope: all the aggregates we could detect were fully reversible!

We wrote it up. While in Boston for the ASBMB annual meeting, we set up a meeting with Karen Carniol, the editor at _Cell_ who'd handled my 2008 [paper][2], and told her the story. She was interested---and suddenly formatting and edits that seemed like they might take weeks took two days. The reviews came back, some quite heartwarming, one in particular supportive but with many detailed criticisms and requests for additional experiments.

Most criticized were our experiments on activity in aggregated proteins. 

### Little things

1. Our graphical abstract has no words.
2. 
	



[1]: /papers/paper/endogenous-aggregates/
[2]: /papers/paper/mistranslation-induced-misfolding/
[3]: /papers/paper/why-highly-expressed-proteins-evolve-slowly/

