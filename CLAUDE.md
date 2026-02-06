# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Site Overview

This is the Drummond Lab website (drummondlab.org), a Jekyll site deployed via GitHub Pages. Built on Jekyll Bootstrap 0.3.0 with Bootstrap 3, kramdown markdown, and a custom "lab" theme.

## Build & Preview Commands

```bash
bundle install          # Install Ruby gem dependencies
rake preview            # Start local server at http://127.0.0.1:4000 (runs `bundle exec jekyll serve -w`)
rake build              # Build site without serving (runs `bundle exec jekyll build`)
```

## Content Scaffolding

```bash
rake post title="Title" [date="YYYY-MM-DD"] [tags=[tag1,tag2]]       # New blog post in blog/_posts/
rake paper title="Title" [date="YYYY-MM-DD"] [tags=[tag1,tag2]]      # New paper in papers/_posts/
rake protocol title="Title" [date="YYYY-MM-DD"] [tags=[tag1,tag2]]   # New protocol in protocols/_posts/
```

Team members and news items are created manually by copying an existing file and editing.

## Git Workflow

- Work on the `staging` branch (this is the default working branch)
- Preview locally with `rake preview`
- When ready to publish: merge `staging` into `master`, push `master`
- GitHub Pages auto-deploys from `master`

## Content Architecture

All content lives in `{category}/_posts/` directories with filenames `YYYY-MM-DD-slug.md`. The date in the filename matters for Jekyll ordering. Each file has YAML frontmatter followed by Markdown content. Every post includes `{% include JB/setup %}` after the frontmatter.

### Content types and their key frontmatter fields:

**Papers** (`papers/_posts/`): layout, title, year, shortref, nickname, journal, volume, issue, pages, authors, image, pdf, pdflink, fulltext, github, doi, pmid, pmcid, altmetric_id, preprint, embargo, published, category: paper

**Team members** (`team/_posts/`): layout: member, title (full name), position, handle, nickname, email, twitter, github, scholar, image, alum (true/false)

**News** (`news/_posts/`): layout: news, title, author, author_handle (links to team member), image, category: news

**Blog posts** (`blog/_posts/`): layout: post, title, author, author_handle, category: blog

**Protocols** (`protocols/_posts/`): layout: protocol, title, description, category: protocol

**Projects** (`projects/_posts/`): layout: project, title, tagline, handle, image, category: project

### Internal linking conventions

News and blog posts link to papers via `/papers/paper/nickname` and to team members via `/team/firstname-lastname`.

## Theme & Templates

- **Layouts**: `_layouts/` — thin wrappers that include the real templates
- **Templates**: `_includes/themes/lab/` — the actual HTML templates (default.html, home.html, paper.html, member.html, etc.)
- **Jekyll Bootstrap includes**: `_includes/JB/` — setup, analytics, sharing, navigation helpers
- **Styles**: `assets/themes/lab/css/style.scss` — main SCSS stylesheet (Lato font, Bootstrap 3 grid)
- **Custom plugins**: `_plugins/` — debug filter, tweet tag, trackback

## Assets

- Paper images: `assets/images/papers/`
- Team photos: `assets/images/team/`
- News images: `assets/images/news/`
- PDFs: `assets/pdfs/`

## Important Notes

- The `published` field in paper frontmatter controls Jekyll rendering, not publication status; use `preprint` and `embargo` for that
- The `handle` field on team members is used for cross-referencing (e.g., `author_handle` in news posts)
- Permalink format is `/:categories/:title` (no date in URLs)
