# Notes

## Goals

* Must have
	* Site is available
	* Modern tools
	* Modern look and feel
	* Source code available
	* Blog
	* Trusted users can update
	* Separation of content and style
		* Themes separate
* Nice to have
	* Mobile-friendly
	* Tags for papers, protocols
	* Share
	* Search
	* Analytics

## Approach

* GitHub Pages
* Jekyll Bootstrap

## Layout

I'm inspired by [Trevor Bedford]'s clean, functional [site][1]. I intend to copy it---part of Trevor's intent.

* Home
	* Research
	* Papers
		* Queuosine modification of tRNA and codon usage
		* The relationship between mRNA and protein levels
		* Heat triggers reversible...
	* Team
	* Blog
	* Protocols
	* Misc
		* About
		* Join
		* Contact

Each of the major areas is structured like a blog. For example:

	research/
		index.html
		_posts/
			2015-04-18-heat-shock-aggregation.md
	papers/
		index.html
		_posts/
			2014-12-09-queuosine.md
			2015-04-18-mrna-protein.md
	protocols/
		index.html
		_posts/
			2015-04-18-yeast-lysis.md
	team/
		index.html
		_posts/
			2011-10-01-allan-drummond.md
			2011-10-01-edward-wallace.md
	news/
		index.html
		_posts/
			2015-04-09-pg-paper-accepted.md

For team, use a tag to indicate 'current' vs 'alumni'?

## To do

* Home page
	* Text
	* Picture
	* Links to About, Join, Contact
* Font
* Centering
* Blog post on what is happening here, experiences getting up and running.
* About page


## Done

* Figure out how top navbar works



[Trevor Bedford]: http://bedford.io/team/trevor-bedford/
[1]: http://bedford.io

