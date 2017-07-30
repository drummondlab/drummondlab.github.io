# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- .well-known directory with Keybase identify verification

### Changed
- Changed to Niemeyer Research Group

## [0.3.0] - 2013-02-24
### Added
- @techotaku fixes custom tagline support (finally made it in!)
- @opie4624 adds ability to set tags from the command-line.
- @lax adds support for RSS feed. Adds rss and atom html links for discovery

### Changed
- Update twitter bootstrap to 2.2.2. Add responsiveness and update design a bit.

### Fixed
- Small typo fixes.
- @xuhdev fixes theme:install bug which does not overwrite theme even if saying 'yes'.

## [0.2.13] - 2012-03-24
### Added
- @mjpieters Updates pages_list helper to only show pages having a title.
- @sway recommends showing page tagline only if tagline is set.
- @LukasKnuth adds 'description' meta-data field to post/page scaffold.

### Fixed
- @koriroys fixes typo in atom feed

## [0.2.9] - 2012-03-01
### Fixed
- @alishutc Fixes the error on post creation if date was not specified.

## [0.2.8] - 2012-03-01
### Added
- @metalelf0 Added option to specify a custom date when creating post.
- @daz Updates twitter theme framework to use 2.x while still maintaining core layout. #50
- @philips and @treggats add support for page.tagline metadata. #31 & #48
- @koomar Adds Mixpanel analytics provider. #49
- @nolith Adds ability to load custom rake scripts. #33
- @tommyblue Updated disqus comments provider to be compatible with posts imported from Wordpress. #47

### Fixed
- @3martini Adds Windows MSYS Support and error checks for git system calls. #40
- @sstar Resolved an issue preventing disabling comments for individual pages #44
- Resolve incorrect HOME\_PATH/BASE\_PATH settings

## [0.2.0] - 2012-02-01-
### Added
- Add Theme Packages v 0.1.0
- All themes should be tracked and maintained outside of JB core.
- Themes get "installed" via the Theme Installer.
- Theme Packages versioning is done separately from JB core with the main intent being to make sure theme versions are compatible with the given installer.
- @jamesFleeting adds facebook comments support
- @SegFaultAX adds tagline as site-wide configuration

## [0.1.0] - 2012-01-24
### Added
- First major versioned release, with
    - Standardize Public API
    - Use name-spacing and modulation where possible.
    - Ability to override public methods with custom code.
    - Publish the theme API.
    - Ship with comments, analytics integration.

## [0.0.1] - 2011-12-30
### Added
- First public release, lots of updates =p Thank you everybody for dealing with the fast changes and helping me work out the API to a manageable state.
