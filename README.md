svg.colorAt.js
=============

An extension of [svg.js](https://github.com/svgdotjs/svg.js) which allows to pick a color from a gradint at a specific position

# Demo

For a demo see https://jsfiddle.net/wout/sn7um5fr/

# Get Started

Install `svg.colorAt.js` using bower or npm:

```
bower install svg.colorat.js
npm install svg.colorat.js
```

Include the script after svg.js

```html
<script src="svg.js"></script>
<script src="svg.colorAt.js"></script>
```

Use it

```html
<div id="drawing"></div>
```

```js
var draw = SVG('drawing')

var gradient = draw.gradient('linear', function(stop) {
  stop.at(0, '#799abc')
  stop.at(0.5, '#ccc')
  stop.at(1, '#e88081')
})

var rect = draw.rect(100, 100).move(10, 10).fill(gradient)

draw.circle(10).center(10, 120).fill(gradient.colorAt(0))
draw.circle(10).center(35, 120).fill(gradient.colorAt(0.25))
draw.circle(10).center(60, 120).fill(gradient.colorAt(0.5))
draw.circle(10).center(85, 120).fill(gradient.colorAt(0.75))
draw.circle(10).center(110, 120).fill(gradient.colorAt(1))
```