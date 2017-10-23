---
layout: paper
title: "Statistical algorithms for ontology-based annotation of scientific literature."
nickname: 2014-10-23-chakrabarti-statistical-algorithms-for
authors: "Chakrabarti C, Jones TB, Luger GF, Xu JF, Turner MD, Laird AR, Turner JA"
year: "2014"
journal: "J Biomed Semantics"
volume: 5
issue: Suppl 1 Proceedings of the Bio-Ontologies Spec Interest G
pages: S2
is_published: true
image: /assets/images/papers/j-biomed-semantics.png
projects: []
tags: []

# Text
fulltext:
pdf:
pdflink:
pmcid: PMC4108869
preprint:
supplement:

# Links
doi: "10.1186/2041-1480-5-S1-S2"
pmid: 25093071

# Data and code
github:
neurovault:
openfmri:
osf:
---
{% include JB/setup %}

# Abstract

BACKGROUND: Ontologies encode relationships within a domain in robust data structures that can be used to annotate data objects, including scientific papers, in ways that ease tasks such as search and meta-analysis. However, the annotation process requires significant time and effort when performed by humans. Text mining algorithms can facilitate this process, but they render an analysis mainly based upon keyword, synonym and semantic matching. They do not leverage information embedded in an ontology's structure. METHODS: We present a probabilistic framework that facilitates the automatic annotation of literature by indirectly modeling the restrictions among the different classes in the ontology. Our research focuses on annotating human functional neuroimaging literature within the Cognitive Paradigm Ontology (CogPO). We use an approach that combines the stochastic simplicity of naive Bayes with the formal transparency of decision trees. Our data structure is easily modifiable to reflect changing domain knowledge. RESULTS: We compare our results across naive Bayes, Bayesian Decision Trees, and Constrained Decision Tree classifiers that keep a human expert in the loop, in terms of the quality measure of the F1-mirco score. CONCLUSIONS: Unlike traditional text mining algorithms, our framework can model the knowledge encoded by the dependencies in an ontology, albeit indirectly. We successfully exploit the fact that CogPO has explicitly stated restrictions, and implicit dependencies in the form of patterns in the expert curated annotations.
