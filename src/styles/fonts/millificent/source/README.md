# Millificent

## How to add new icons to the font

1. Open http://fontello.com
2. Drag `fontello-config.json` into the "Custom Icons" area of the page - the font and all the icons should load into that section
3. Drag your new icon (which should have been saved as an SVG from `millificent-source.ai`) alongside the other icons
4. Make sure the new icon is selected (has a red circle around it)
5. Click the pencil icon which appears when hovering over the new icon
6. Ensure that the default CSS name and keywords match what you want
7. Click "Download webfont"
8. Unzip the downloaded archive
9. Copy the new `config.json` to `fontello-config.json`
10. Copy the new fonts into the `millicent` font directory (don't copy `millicent.svg` - it is not used)
11. Copy the new icon definitions from the new `millicent.css` into the local `millicent.css` - only copy the icon definitions, and make sure they are contained within the `:global` definition

You will need to restart your dev server to see the changes.
