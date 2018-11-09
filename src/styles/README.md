# PostCSS plugins explained

In the Javascript ecosystem modularity is king. [PostCSS](//github.com/postcss/postcss) is the modular CSS preprocessor that will hopefully make writing CSS faster and easier. The downside of modularity however is the ability to understand which each module's purpose. At the end of the day PostCSS is CSS, therefore *order matters* so the order we load the plugins in our webpack config is the order in which they compile.

- [postcss-import](#user-content-postcss-import)
- [postcss-mixins](#user-content-postcss-mixins)
- [postcss-advanced-variables](#user-content-postcss-advanced-variables)
- [postcss-custom-media](#user-content-postcss-custom-media)
- [postcss-custom-properties](#user-content-postcss-custom-properties)
- [postcss-color-palette](#user-content-postcss-color-palette)
- [postcss-color-function](#user-content-postcss-color-function)
- [postcss-hexrgba](#user-content-postcss-hexrgba)
- [postcss-nesting](#user-content-postcss-nesting)
- [postcss-nested](#user-content-postcss-nested)
- [postcss-responsive-type](#user-content-postcss-responsive-type)
- [postcss-custom-selectors](#user-content-postcss-custom-selectors)
- [postcss-property-lookup](#user-content-postcss-property-lookup)
- [postcss-extend](#user-content-postcss-extend)
- [postcss-selector-not](#user-content-postcss-selector-not)
- [postcss-calc](#user-content-postcss-calc)
- [autoprefixer](#user-content-autoprefixer)

### [postcss-import](//github.com/postcss/postcss-import)
##### Inlines file content called with @import

```CSS
/* @import can consume `node_modules`, `web_modules` or local modules */
@import "cssrecipes-defaults"; /* == @import "./node_modules/cssrecipes-defaults/index.css"; */
@import "normalize.css"; /* == @import "./node_modules/normalize.css/normalize.css"; */

@import "css/foo.css"; /* relative to stylesheets/ according to `from` option above */

@import "css/bar.css" (min-width: 25em);

body {
  background: black;
}
```
Compiles to
```CSS
/* ... content of ./node_modules/cssrecipes-defaults/index.css */
/* ... content of ./node_modules/normalize.css/normalize.css */

/* ... content of foo.css */

@media (min-width: 25em) {
/* ... content of bar.css */
}

body {
  background: black;
}
```


### [autoprefixer](//github.com/postcss/autoprefixer)
##### Automatically add vendor specific prefixes

```CSS
thing {
  transition: all 3s ease;
}
```

Compiles to:

```CSS
thing {
  -webkit-transition: all 3s ease;
  -moz-transition: all 3s ease;
  -ms-transition: all 3s ease;
  -o-transition: all 3s ease;
  transition: all 3s ease;
}
```

### [postcss-advanced-variables](//github.com/jonathantneal/postcss-advanced-variables)
##### Sass like Variables

```SASS
$variable: 10em;

thing {
  padding: $variable;
}
```

Compiles to:

```CSS
thing {
  padding: 10em;
}
```


### [postcss-calc](//github.com/postcss/postcss-calc)
##### Add, subtract, multiply, and devide units

```CSS
thing {
  width: calc(1em + 2em - 3em * 4 / 5);
  height: calc(1em + 10px);
}
```

Compiles to:

```CSS
thing {
  width: 0.6em;
  height: calc(1em + 10px);
}
```


### [posstcss-color-function](//github.com/postcss/postcss-color-function)
##### Color adjustments

```CSS
thing {
  background: color( rgb(0,0,0) shade(50%) ); /* white */
}

```

Compiles to:

```CSS
thing {
  background: rgb(128, 128, 128); /* 50% grey */
}
```


### [postcss-color-palette](//github.com/zaim/postcss-color-palette)
##### Converts CSS color names to HEX

```CSS
thing {
  color: white;
  background: rebeccapurple;
}
```

Compiles to:

```CSS
thing {
  color: #FFFFFF;
  background-color: #663399;
}
```


### [postcss-custom-media](//github.com/postcss/postcss-custom-media)
##### Transforms W3C CSS Custom Media Queries syntax to more compatible CSS

```CSS
@custom-media --small-viewport (max-width: 30em);

@media (--small-viewport) {
  /* styles for small viewport */
}

```

Compiles to:

```CSS

@media (max-width: 30em) {
  /* styles for small viewport */
}
```


### [postcss-custom-properties](//github.com/postcss/postcss-custom-properties)
##### Transforms W3C CSS Custom Properties for cascading variables

```CSS
:root {
  --color: red;
}
div {
  color: var(--color);
}
```
Compiles to:
```CSS
div {
  color: red;
}
```

### [postcss-custom-selectors](//github.com/postcss/postcss-custom-selectors)
##### Transforms W3C CSS Extensions(Custom Selectors) to more compatible CSS

```CSS
@custom-selector :--heading h1, h2, h3, h4, h5, h6;

article :--heading + p {
  margin-top: 0;
}
```
Compiles to:
```CSS

article h1 + p,
article h2 + p,
article h3 + p,
article h4 + p,
article h5 + p,
article h6 + p {
  margin-top: 0;
}
```

### [postcss-extend](//github.com/travco/postcss-extend)
##### Minimize the number of repeat-selectors and rules you write with @extend

```SASS
.potato {
  color: white;
}

.potato:first-child,
.potato a::after {
  background: brown;
}

#superfun {
  @extend .potato;
}
```
Compiles to:
```SASS
.potato, #superfun {
  color: white;
}

.potato:first-child, .potato a::after, #superfun:first-child, #superfun a::after {
  background: brown;
}
```

### [postcss-hexrgba](//github.com/seaneking/postcss-hexrgba)
##### Adds shorthand hex methods to rgba() values

```CSS
.foo {
  color: rgba(#0fab53, 0.8)
}
```
Compiles to:
```CSS
.bar {
  background: linear-gradient(rgba(#fff, .1), rgba(#fff, .2));
}
.foo {
  color: rgba(15,171,83, 0.8)
}
```

### [postcss-mixins](//github.com/postcss/postcss-mixins)
##### Plugin for SASS like mixins

```CSS
@define-mixin thing $margin, $color: blue {
  padding: 0;
  margin: $margin 0;
  color: $color;
}

potato {
  @mixin thing 1em, red;
}
```

Compiles to:

```CSS
potato {
  padding: 0;
  margin: 1em 0;
  color: red;
}
```

### [postcss-nested](//github.com/postcss/postcss-nested)
##### Unwrap nested rules like how Sass does it

```CSS
.phone {
  &_title {
    width: 500px;
    @media (max-width: 500px) {
      width: auto;
    }
    body.is_dark & {
      color: white;
    }
  }
  img {
    display: block;
  }
}
```

Compiles to:

```CSS
.phone_title {
  width: 500px;
}
@media (max-width: 500px) {
  .phone_title {
    width: auto;
  }
}
body.is_dark .phone_title {
  color: white;
}
.phone img {
  display: block;
}
```

### [postcss-nesting](//github.com/jonathantneal/postcss-nesting)
##### Add the ability to nest one style rule inside another

```SASS
a, b {
  color: red;

  @media (min-width: 30em) {
    color: yellow;

    @media (min-device-pixel-ratio: 1.5) {
      color: green;
    }
  }
}
```

Compiles to:

```CSS
a, b {
  color: red;
}

@media (min-width: 30em) {
  a, b {
    color: yellow;
  }
}

@media (min-width: 30em) and (min-device-pixel-ratio: 1.5) {
  a, b {
    color: green;
  }
}
```

### [postcss-property-lookup](//github.com/simonsmith/postcss-property-lookup)
##### Referencing property values without a variable

```CSS
thing {
  margin-left: 20px;
  margin-right: @margin-left;

  line-height: 1.5;
  font-size: @(line-height)em;
}
```

```CSS
thing {
  margin-left: 20px;
  margin-right: 20px;

  line-height: 1.5;
  font-size: 1.5em;
}
```

### [postcss-responsive-type](//github.com/seaneking/postcss-responsive-type)
##### Autoscaling font-size

```CSS
thing {
  font-size: responsive;
  min-font-size: 12px;
  max-font-size: 21px;
  lower-font-range: 420px;
  upper-font-range: 1280px;
}
```

Compiles to:

```CSS
thing {
  font-size: calc(12px + 9 * ((100vw - 420px) / 860));
}

@media screen and (max-width: 420px) {
  thing {
    font-size: 12px;
  }
}

@media screen and (min-width: 1280px) {
  thing {
    font-size: 21px;
  }
}
```

### [postcss-selector-not](//github.com/postcss/postcss-selector-not)
##### Transforms :not() W3C CSS leve 4 pseudo class to :not() CSS level 3 selectors

```CSS
p:not(:first-child, .special) {
  color: red;
}
```

Compiles to:

```CSS
p:not(:first-child),
p:not(.special) {
  color: red;
}
```
