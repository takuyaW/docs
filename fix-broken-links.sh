#!/bin/bash

# This will fix a lot of the broken links that result from the new directory structure.
# It has already been used for English. Use it for Japanese, then delete this file, as
# it has no further use.

# To test for broken links, try using broken-link-checker (install it from npm)
# broken-link-checker http://localhost:1313/en/ -ro --filter-level 2 --exclude-external > broken-links.txt

LANG="en"

find content -name "*.$LANG.md" -print0 | xargs -0 sed -E -i '' 's/\/(en|ja)\/([a-z_]*)\/manual/\/\1\/products_guide\/\2/g'
find content -name "*.$LANG.md" -print0 | xargs -0 sed -E -i '' 's/\/(en|ja)\/(monaca_cli)/\/\1\/products_guide\/\2/g'
find content -name "*.$LANG.md" -print0 | xargs -0 sed -E -i '' 's/\/(en|ja)\/(monaca_ide)/\/\1\/products_guide\/\2/g'
find content -name "*.$LANG.md" -print0 | xargs -0 sed -E -i '' 's/\/(en|ja)\/(monaca_localkit)/\/\1\/products_guide\/\2/g'
find content -name "*.$LANG.md" -print0 | xargs -0 sed -E -i '' 's/\/(en|ja)\/(monaca_cli)/\/\1\/products_guide\/\2/g'
find content -name "*.$LANG.md" -print0 | xargs -0 sed -E -i '' 's/\/(en|ja)\/(monaca_vs)/\/\1\/products_guide\/\2/g'
find content -name "*.$LANG.md" -print0 | xargs -0 sed -E -i '' 's/\/(en|ja)\/(debugger)/\/\1\/products_guide\/\2/g'
find content -name "*.$LANG.md" -print0 | xargs -0 sed -E -i '' 's/\/(en|ja)\/(monaca_id)/\/\1\/products_guide\/\2/g'
find content -name "*.$LANG.md" -print0 | xargs -0 sed -E -i '' 's/\/(en|ja)\/(backend)/\/\1\/products_guide\/\2/g'
find content -name "*.$LANG.md" -print0 | xargs -0 sed -E -i '' 's/\/(en|ja)\/(onsenui)/\/\1\/products_guide\/\2/g'

find content -name "*.$LANG.md" -print0 | xargs -0 sed -E -i '' 's/\.\.\/\.\.\/tutorial/\.\.\/tutorial/g'

find content -name "*.$LANG.md" -print0 | xargs -0 sed -E -i '' 's/\/(en|ja)\/products_guide\/([a-z_]*)\/tutorial/\/\1\/tutorials\/\2/g'