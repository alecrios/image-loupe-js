/* =============================================================================
Image Loupe JS v0.0.1 | MIT License | https://github.com/alecrios/image-loupe-js
============================================================================= */

'use strict';

class imageLoupe {
	constructor(image) {
		// Original Image
		this.originalImage = image;

		// Enlarged Image
		this.enlargedImage = document.createElement('img');
		this.enlargedImage.src = this.originalImage.src;
		this.enlargedImage.setAttribute('data-loupe-enlarged-image', '');

		// Wrapper
		this.wrapper = document.createElement('div');
		this.wrapper.setAttribute('data-loupe-wrapper', '');

		// Loupe
		this.loupe = document.createElement('div');
		this.loupe.setAttribute('data-loupe', '');

		// Add elements to the DOM
		this.wrapper.appendChild(this.loupe);
		this.loupe.appendChild(this.enlargedImage);
		this.originalImage.parentNode.insertBefore(this.wrapper, this.originalImage);
		this.wrapper.appendChild(this.originalImage);

		// Pass `this` through to methods
		this.showLoupe = this.showLoupe.bind(this);
		this.hideLoupe = this.hideLoupe.bind(this);
		this.moveLoupe = this.moveLoupe.bind(this);

		this.addEventListeners();
	}

	addEventListeners() {
		this.originalImage.addEventListener('mouseenter', this.showLoupe);
		this.originalImage.addEventListener('mouseleave', this.hideLoupe);
		this.originalImage.addEventListener('mousemove',  this.moveLoupe);
	}

	showLoupe() {
		this.wrapper.style.zIndex = 1;
		this.loupe.style.opacity = 1;
	}

	hideLoupe() {
		this.wrapper.style.zIndex = 0;
		this.loupe.style.opacity = 0;
	}

	moveLoupe(event) {
		window.requestAnimationFrame(() => {
			// Get the size and position of the original image
			this.originalImageBCR = this.originalImage.getBoundingClientRect();

			// Get the cursor coordinates on the original image
			this.cursorX = event.x - this.originalImageBCR.left + this.originalImage.offsetLeft;
			this.cursorY = event.y - this.originalImageBCR.top + this.originalImage.offsetTop;

			// Determine the corresponding coordinates on the enlarged image
			this.enlargedImageX = -((this.cursorX - this.originalImage.offsetLeft) / this.originalImageBCR.width * this.enlargedImage.width - this.loupe.offsetWidth / 2);
			this.enlargedImageY = -((this.cursorY - this.originalImage.offsetTop) / this.originalImageBCR.height * this.enlargedImage.height - this.loupe.offsetHeight / 2);

			// Center the loupe on the cursor
			this.loupeX = this.cursorX - this.loupe.offsetWidth / 2;
			this.loupeY = this.cursorY - this.loupe.offsetHeight / 2;

			// Apply the translate values
			this.enlargedImage.style.transform = `translate3d(${this.enlargedImageX}px, ${this.enlargedImageY}px, 0)`;
			this.loupe.style.transform = `translate3d(${this.loupeX}px, ${this.loupeY}px, 0)`;
		});
	}
}

// Create a new loupe for each image
document.querySelectorAll('[data-loupe-image]').forEach(function(img) {
	new imageLoupe(img);
});
