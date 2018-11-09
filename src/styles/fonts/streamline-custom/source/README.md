# Streamline Custom

## How to add new icons to the font
## NOTE: Make changes in master and push directly once done to avoid conflicts as it's not resolvable.
## For a list of icons and names see: https://www.loanmarket.com.au/icons-reference.html

## NOTE: for predefined icons check here https://www.loanmarket.com.au/icons-reference.html

1. Open http://fontello.com
2. Drag `fontello-config.json` into the "Custom Icons" area of the page - the font and all the icons should load into that section
3. The existing icon set should be selected automatically (have red circles around them) - do not edit these or de-select them
4. Find and click the new icon you want to add to the font to select it
5. Click the pencil icon which appears when hovering over the new icon
6. Ensure that the default CSS name and keywords match what you want - they should be named after their `streamline-outline` equivalent, so if it was called `sl-pencil-3` you name it `pencil-3`
7. Repeat steps 5 and 6 for each icon you want to add
8. Click "Download webfont"
9. Unzip the downloaded archive
10. Copy the new `config.json` to `fontello-config.json`
11. Copy the new fonts into the `streamline-custom` font directory (don't copy `streamline-custom.svg` - it is not used)
12. Copy the new icon definitions from the new `streamline-custom.css` into the local `streamline-custom.css` - only copy the icon definitions, and make sure they are contained within the `:global` definition

You do not need to restart your dev server to see the changes.
