# The NBC Lab website

# TODOS

See Issues on [the site](https://github.com/NBCLab/nbclab.github.io).

# How to add content

Because the website code is hosted on GitHub, any lab member can contribute to the site. The general pattern will be: (1) Fork the repository to your own account; (2) Clone your fork to your laptop; (3) Make changes (e.g., add a new post to News or update your bio) to your local copy; (4) Test those changes by running a local version of the website; (5) If your changes don't break the website, commit your changes to your fork's remote; (6) Open a pull request from your fork to the main repository. Once the PR is open, the website administrator will review the changes and merge them into the main website.

In order to contribute, you must have a GitHub account and you must set up Jekyll on your laptop (in order to demo your changes).

Essentially, follow the instructions [here](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/#step-2-install-jekyll-using-bundler). Namely, do the **Requirements**, **Step 2.5**, and **Step 4**. The rest of the steps are extraneous, I think (as long as you have your fork cloned locally).

## 1. Download Ruby and install bundler
```bash
# Install Ruby, if you don't have it
\curl -sSL https://get.rvm.io | bash -s stable
rvm install ruby-2.4.1
rvm use ruby-2.4.1 --default

# Install bundler
gem install bundler
```

## 2. Install Jekyll and other dependencies from the GitHub Pages gem
```bash
cd /location/of/repository/
bundle install
```

## 3. Make your changes
Just edit the files to make the changes you want.

## 4. Build your local Jekyll site
```bash
cd /location/of/repository/
bundle exec jekyll serve
```

## 5. Open the local site and check your changes
Open a browser and go to `localhost:4000/`. Any changes you make to any of the repository's files, except `_config.yml`, will be reflected on the site after refreshing the page. If you edit `_config.yml`, you will need to quit the local server (`Ctrl+C`) and rebuild the site locally in order to see your changes.

# How the site is set up
The structure can be a little confusing, but I'll try to outline the basics. Just to be clear, I (TS) don't know much, and everything I do know is from playing with the site for a day and a half. Still, here is goes:

The different pages (e.g., News, Papers, Team) are organized in separate folders. Each folder contains a file for the page itself (`index.html`) and a folder containing markdown files with the different entries for the page (`_posts/`). Whether adding a new lab member, paper, poster, presentation, project, or piece of news, you will generally be creating one of these markdown files.

The markdown files have two sections, a header with metadata and the content below. How the post is formatted on the general page (e.g., how Taylor Salo's picture fits into the [Team webpage](https://nbclab.github.io/team/)) is determined by the `index.html` file mentioned above. How the post is formatted on its own page (e.g., [Taylor Salo's member page](https://nbclab.github.io/team/taylor-salo)) is determined by the theme for that post's category. Themes are saved as html files in `_includes/themes/lab/`. You can change these themes, but be aware that they will affect all other pages of the same type. For example, if you resize the photo field in the lab member theme file, then the photos of all lab members will be affected.
- NOTE: You might assume that the themes or similar info are in the `_layouts` folder, but that appears to be a red herring. Those pages just call the files in the `themes` folder.
- Ultimately, if it is possible, we would like simplify this structure.

Pictures, pdfs, etc. can be placed in `assets/`. However, because GitHub repositories are limited in terms of space, I would ultimately like to shift toward using a public Google Drive folder or something similar.
- When adding pictures of posters or presentations, please export the pdf (assuming that's what you have) to png format, and then resample to a lower resolution. For posters, we use a width of 250 pixels with whatever height scales proportionally with that, and a resolution of 72 pixels per inch. For presentations, please save just the first slide for the page thumbnail, and use a width of 1000 pixels (again, with whatever height matches this) and a resolution of 150 pixels per inch.

The markdown files for the homepage, the "About the site" page, and the "Contact us" page are all located in `misc/_posts/`. I only mention this because it wasn't obvious to me when I went searching for those pages.

## License

The Drummond Lab template is released under an [MIT](http://opensource.org/licenses/MIT) license owned by [D. Allan Drummond](https://github.com/dad), who created the template (while incorporating elements from the Bedford lab [website](https://github.com/blab/blotter)) and who also has one of the better GitHub usernames out there (and it's just his initials!).
