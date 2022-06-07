'use strict';

// nav bar
const checkbox = document.querySelector("input[type='checkbox']");
const navList = document.querySelectorAll('.nav-link');

navList.forEach((navLink) => {
	navLink.addEventListener('click', () => {
		checkbox.checked = false;
	});
});

window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push({
  type: "event",
  eventName: "custom1",
  tags: {
    revenue: 0, // Optional in cents as integer (500 == $5.00)
    value: 0.00 // Optional as float
  }
});