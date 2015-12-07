---
layout: page
title: "Disaggregation assay data visualization"
author: "E Wallace"
author_handle: "ew"
image: 
category: data
tags: [data, yeast, heat shock, aggregation]
---

Interactive data visualization for disaggregation and new-synthesis data from [our 2015 paper on heat-triggered protein aggregation in yeast][1], Figure 6. (Aggregation data visualization is [here][2].)
	
Choose detected proteins by official yeast name, from [SGD](http://www.yeastgenome.org/).

Cells were grown at 30&deg;C, shifted to labeled media, heat-shocked for 10 minutes at 42&deg;C, moved back to 30&deg;C for recovery, and protein in 100,000g supernatant measured. Y-axis is ratio of protein in supernatant between treated and control cells, X-axis is either time or temperature of shock. Linetype reflects isotopic label on the amino acids: solid line is arginine/lysine imported before onset of heat shock, dashed line is imported after shock.

<iframe width="900" height="720" src="https://dadrummond.shinyapps.io/ratiosup_shiny/" frameborder="0"> </iframe>

[1]: /papers/paper/endogenous-aggregates
[2]: /data/heat-aggregation-yeast-visualization