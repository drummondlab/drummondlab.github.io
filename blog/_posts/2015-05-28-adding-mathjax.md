---
layout: post
title: "Testing MathJax"
description: ""
author_handle: dad
category: blog
published: true
tags: []
---
{% include JB/setup %}

We do plenty of math, so I'd like to test out [MathJax](https://www.mathjax.org/).;

Here is an example MathJax inline rendering \\( 1/x^{2} \\), and here is a block rendering: 
\\[ \frac{1}{n^{2}} \\]

Now, if we'd like to get serious we'd do something like \\[
\begin{align}
\mathcal{N}(\mu, \sigma) &= \mathrm{normal distribution}\\
 &= \frac{1}{\sqrt{2 \pi \sigma^2}} e^{\frac{(t-\mu)^2}{2 \sigma^2}}
\end{align}
\\]
or even \\( \sum_{t=0}^{\infty} \frac{x^t}{t!} = e^x\\).

Or we could try defining a command, like this. \\( 	\newcommand{\water}{H_{2}O} \\)

\\(\water\\) is like \\(\water\\).

