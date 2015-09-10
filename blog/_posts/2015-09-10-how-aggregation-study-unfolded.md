---
layout: post
title: "How "
description: ""
author_handle: dad
category: blog
published: false
theme: lab
tags: []
---
{% include JB/setup %}


I've always wished people would tell the story of how their papers came to be. Here's our study's story. Summary: this one took many years to coalesce, started with methods, took at least one hard turn in the middle, and didn't get its marquee result until the very end.

# Beginnings: methods and a "positive control"

Way back in the day, around 2008--2010, we spent a lot of time developing cryogenic lysis and cellular fractionation (total, supernatant, pellet) methods for budding yeast. Mike Dion did exquisite, exhaustive, exhausting studies on cell lysis by all sorts of methods, until he had a solid protocol down.

We'd also developed our mass spectrometry (MS) capabilities to be able to do quantitative proteomics. We wanted to know what proteins formed aggregates under unstressed conditions in yeast cells. But we needed a positive control, a condition where aggregation would be obvious. Mike did what we thought was a simple but cool experiment: proteome-scale in vivo thermal denaturation. The idea was to heat cells fast (50°C for two to eight minutes, a lethal shock for the vast majority of cells), then watch proteins misfold and aggregate, measuring aggregation by MS.

Well, lots of proteins formed aggregates, but we couldn't see any rhyme or reason to which ones did or didn't. I'd thought, based on [previous][2] [work][3], that low-expression proteins would be more prone to aggregate. Nope. What we had was data but no insight.

# Biology trumps physics

The next big step came a couple years later when [Alexandra Rojek](/team/alexandra-rojek/) joined the group as a summer undergraduate researcher. She recombinantly purified a few proteins we'd found to be heat-sensitive in cells, heated them in vitro, and found that they aggregated. So the proteins themselves were sensitive to heat. And then she and [Jamie Scott](/team/jamie-scott/) found the this heat-sensitive aggregation-prone behavior was specific to certain protein domains, like the N-terminal domain of a protein called Gus1. Oddly, Gus1N didn't show much structural change when it aggregated. And graduate student [Josh Riback](/team/josh-riback/) showed that the onset of aggregation closely tracked the 

We realized we'd been thinking about the problem all wrong. We'd tried to thermally denature proteins---physics---but we had instead stumbled upon a stress-triggered molecular assembly process---biology. This point of view locked in when we found the literature on [heat-shock granules](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC370018/), which were discovered in 1983 and studied by many groups since but which we'd been perfectly ignorant of. But studying a stress response using a lethal stress is obviously insane. We had to redo our entire study. What a terrible, necessary, awful realization!

# A theorist turns experimentalist, and the project takes off

Enter [Edward Wallace](/team/edward-wallace/), a theorist postdoc in the group who saw the opportunity to do an important experiment and seized it. He learned how to do lysis, got triple isotope labeling up and running, and made the critical observation that you can't see most of the aggregation in yeast cells if you leave polysomes intact. Polysomes (many ribosomes on mRNA) drop into the pellet at the speeds we were spinning. Put EDTA in the lysis buffer, and polysomes fall apart (they require Mg<sup>2+</sup>). He redid the entire study at 46°C, a tough but survivable temperature for budding yeast, and found more or less the same results. Only now we could see that virtually every heat-shock-granule component previously identified formed aggregates in our assay, along with ten times more proteins that nobody had reported yet. Game on!

Then a master's student on a one-year exchange program, [Pawel Laskowski](/team/pawel-laskowski/), reconstituted a three-protein complex that was heat-sensitive in vivo, demonstrating that it was heat-sensitive in vitro. With Michael Schwartz in the [Pan lab](http://openwetware.org/wiki/Pan_Lab), he showed that the complex, containing Gus1 and two other proteins, was still active when aggregated.

Jamie and Alexandra, with help from grad student [Chris Katanski](/team/chris-katanski/), built a bunch of strains to look at colocalization between aggregating proteins in live cells. They found all sorts of interesting stuff, most obviously new heat-shock granule components and new types of aggregates in the nucleus and nucleolus.

# A key question from colleagues

We took the show on the road. The critical addition came when Edward and I talked about the work at the FASEB meeting _Protein Folding in the Cell_ in Vermont, he at his poster and I in a 12-minute talk. People kept asking us, So, is the aggregation reversible? Turns out that for various reasons, this basic question had not been answered for endogenous cellular proteins.

But we work with stable isotopes, which are perfect for answering questions about the balance of degradation versus disaggregation. In the back of the auditorium after my (pretty awful) talk, trying to make myself feel better, I sketched out the experiment. Actually, I made Figure 6A, the bottom experimental-design part, and showed it to Edward, who said, "Yep, I can do that." And he did, and in a gift from the universe, it worked on the first try. Most importantly, the results showed us what we'd not even dared hope: all the aggregates we could detect were fully reversible!

# 

We wrote it up. While in Boston for the ASBMB annual meeting, we set up a meeting with Karen Carniol, the editor at _Cell_ who'd handled my 2008 [paper][2], and told her the story. She was interested---and suddenly formatting and edits that seemed like they might take weeks took two days. The reviews came back, some quite heartwarming, one in particular supportive but with many detailed criticisms and requests for additional experiments.

Most criticized were our experiments on activity in aggregated proteins. 

### Little things

1. This is a study of heat shock in a standard strain of budding yeast.
1. In a rare, possibly questionable move, our graphical abstract is entirely graphical.
