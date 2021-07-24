'use strict';

// nav bar
const checkbox = document.querySelector("input[type='checkbox']");
const navList = document.querySelectorAll('.nav-link');

navList.forEach((navLink) => {
	navLink.addEventListener('click', () => {
		checkbox.checked = false;
	});
});
