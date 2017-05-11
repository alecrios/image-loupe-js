# Image Loupe JS

Description coming soon.

&nbsp;

## Demo

https://alecrios.github.io/image-loupe-js/

&nbsp;

## Features

* Lightweight
* No dependencies
* Performant
	* Animates only `transform` and `opacity`
	* Utilizes the `requestAnimationFrame` API
* Customizable
	* Very minimal CSS
	* Easy to change loupe size, border, shadow, etc

&nbsp;

## Development

This project is still under development and not production-ready. It is written in ES2015, so it needs to be compiled with something like [Babel](https://babeljs.io/) for better browser support.

&nbsp;

## Usage

1. Include `image-loupe.css`.

``` html
<link href="css/image-loupe.css" rel="stylesheet">
```

2. Include `image-loupe.js`.

``` html
<script src="js/image-loupe.js"></script>
```

3. Add the `data-loupe-image` attribute to an `<img>`.

``` html
<img src="img/fruit.jpg" data-loupe-image>
```
