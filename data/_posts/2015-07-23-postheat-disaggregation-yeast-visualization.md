---
layout: page
title: "Aggregation assay data visualization"
author: "E Wallace"
author_handle: "ew"
image: 
category: data
tags: [data]
---

Interactive data visualization for data from [our Cell paper on heat-triggered protein aggregation in yeast][1], Figure 6.

Choose detected proteins by official yeast name, from [sgd](http://www.yeastgenome.org/).

Cells were grown at 30C, shifted to labeled media, heat-shocked for 10 minutes at 42C, moved back to 30C for recovery, and protein in 100,000g supernatant measured. Y-axis is ratio of protein in supernatant between treated and control cells, X-axis is either time or temperature of shock. Linetype reflects isotopic label on the amino acids: solid line is arginine/lysine imported before onset of heat shock, dashed line is imported after shock.

<iframe width="900" height="720" src="https://ewjwallace.shinyapps.io/ratiosup_shiny/" frameborder="0"> </iframe>

[1]: /papers/aggregates-of-endogenous-proteins-form-upon-heat-stress