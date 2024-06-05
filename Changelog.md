# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Please stick to the change type wording `Added`, `Changed`, `Removed`, `Fixed`.

## [0.0.5] - 2024-06-05

### Changed

- added box shadow to logo
- increased cache version to ensure new content is loaded
- more sensible and less aggressive colors for buttons to get the songtext in the right focus
- more beautiful day night switcher

### Fixed

- fixed caching issues (service worker)
- logo border radius problems

## [0.0.4] - 2024-05-30

### Added

- added a new song: Dream Catch Me from Newton Faulkner
- added manifest.json for PWA
- maskable icons for PWA
- install button for PWA which is shown until the app is installed

### Changed

- made the song text more readable, imrpoved the layout

### Fixed

- fixed caching & service worker issues

## [0.0.3] - 2024-05-27

### Added

- added font resizer
- added a new song: Help from the Beatles
- added a new song: Sky full of Stars from Coldplay
- added chords styling for non-image songs
- Meta tags for SEO and socials
- button to requests new songs

### Changed

- improved the layout of the song list
- chords are now hidden by default

### Fixed

- fixed font resizer layout bugs

## [0.0.2] - 2024-05-21

### Added

- added a service worker
- added eslint rules
- added npm versioning

### Changed

- Meta titles matching the songs
- Improved Logo + Favicon
- improved copy styles

### Fixed

- URLs accessible via Netlify Redirects
- Favicon visible also in live deployment

## [0.0.1] - 2024-05-20

### Changed

- taking my little chords app and turning it into a PWA
- first setup pulled from https://github.com/luisrieke/chords-and-lyrics/tree/main
- longterm goal: make an App which can be downloaded in the App Stores

### Fixed

- fixed scrolling bugs when jumping to Home
