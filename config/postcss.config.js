const importer = require('postcss-import');
const advancedVariables = require('postcss-advanced-variables');
const nested = require('postcss-nested');
const atVariables = require('postcss-at-rules-variables');
const mixins = require('postcss-mixins');
const customMedia = require('postcss-custom-media');
const easings = require('postcss-easings');
const colorFunction = require('postcss-color-function');
const nesting = require('postcss-nesting');
const customSelectors = require('postcss-custom-selectors');
const propertyLookup = require('postcss-property-lookup');
const extend = require('postcss-extend');
const selectorNot = require('postcss-selector-not');
const calc = require('postcss-calc');
const responsiveType = require('postcss-responsive-type');
const discardComments = require('postcss-discard-comments');
const mergeLonghand = require('postcss-merge-longhand');
const discardUnused = require('postcss-discard-unused');
const normalizeCharset = require('postcss-normalize-charset');

const plugins = [
  atVariables,
  importer({
    path: ['./src', './node_modules'],
  }),
  mixins({
    mixinsDir: './src/styles/mixins',
  }),
  advancedVariables,
  customMedia,
  colorFunction,
  easings,
  nesting,
  nested,
  customSelectors,
  propertyLookup,
  extend,
  selectorNot,
  calc({
    mediaQueries: true,
  }),
  responsiveType,
  discardComments({
    removeAll: true,
  }),
  mergeLonghand,
  discardUnused,
  normalizeCharset,
];

module.exports = {
  plugins,
};
