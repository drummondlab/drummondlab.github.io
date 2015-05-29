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

We do plenty of math, so I'd like to test out [MathJax](https://www.mathjax.org/) support.

Here is an example of MathJax inline rendering --- \\( 1/x^{2} \\). And here is a block rendering:
\\[ r_{XY} = \frac{\mathrm{cov}(X,Y)}{\sqrt{\mathrm{var}(X)\mathrm{var}(Y)}} \\]

Now, if we'd like to get serious, we'd do something involving multiline aligned equations, like \\[
\begin{align}
\mathcal{N}(t, \mu, \sigma) &= \mathrm{normal} \newline
 &= \frac{1}{\sqrt{2 \pi} \sigma} e^{-\frac{(t-\mu)^2}{2 \sigma^2}}
\end{align}
\\]
or even an inline formula like \\( \sum_{t=0}^{\infty} \frac{x^t}{t!} = e^x\\).

Or we could try defining a command, like this. \\( 	\newcommand{\water}{\mathrm{H}_{2}\mathrm{O}} \\)

> Buffer slides off the sides of our tubes like \\(\water\\) off a duck's back.

