0.1.3 / 2012-02-15

  * Made nib optional
  * Fixed: Stylus configuration should work properly now

0.1.2-2 / 2012-02-08

  * Hotfix: Stupid bug with URIs getting passed to merger
  
0.1.2-1 / 2012-01-30
==================

  * Added: Some log messages to help debugging
  * Hotfix: Stuck in merge-loop

0.1.2 / 2012-01-30
==================

  * Updated package.json
  * Fixed: Merging process was borked on linux
  * Fixed: replaced async with gowiththeflow

0.1.1-2 / 2012-01-23
====================

  * Hotfix: properly removed uglify-css this time!

0.1.1-1 / 2012-01-23
====================

  * Hotfix: csso as dependecy instead of uglify-css

0.1.1 / 2012-01-23
==================

  * Updated package.json
  * Added: dependency for async (used when minifying)
  * Added: gzip-js (for Windows compatibility)
  * Removed: node-compress (not Windows compatible)
  * Fixed: reimplementation of LESS and Stylus integration
  * Fixed: false appended to filename when gzip set to false. Closes #5
  * Fixed: mistakes in README

0.1.0 / 2011-09-25
==================

  * Added/fixed on-the-fly compilation for both less and stylus. Closes #3
  * Added stylus support. Closes #2
  * Added history/changelog
  * Updated test suite
  * Cleaned up package.json
  
0.0.6 / 2011-09-12
==================

  * Added support for E-Tag and Last-Modified headers
  
0.0.5 / 2011-08-29
==================

  * Now passing express/connect as first arg
  * Fixed major game-breaking bug
  * Added license
  
0.0.4 / 2011-07-13
==================

  * Added support for less
  * Added simple tobi-based tests
  * Updated example configuration
  * Corrected typos
  * Refurbished the code
  
0.0.3 / 2011-06-06
==================

  * Fixed bug with dynamic helper
  * Added options for merge, gzip and minify
  
0.0.2 / 2011-07-04
==================

  * Fixed repository url in package.json
  * Added additional credits to readme
  
0.0.1 / 2011-07-04
==================

  * Initial release