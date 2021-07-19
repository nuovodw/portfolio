'use strict';

// nav bar
const checkbox = document.querySelector("input[type='checkbox']");
const navList = document.querySelectorAll('.nav-link');

navList.forEach((navLink) => {
	navLink.addEventListener('click', () => {
		checkbox.checked = false;
	});
});

// project descriptions
const openDescription1 = document.querySelector('#description-1');
const openDescription2 = document.querySelector('#description-2');
const openDescription3 = document.querySelector('#description-3');
const openDescription4 = document.querySelector('#description-4');

const projectDescription1 = document.querySelector('.project-1-description');
const projectDescription2 = document.querySelector('.project-2-description');
const projectDescription3 = document.querySelector('.project-3-description');
const projectDescription4 = document.querySelector('.project-4-description');

openDescription1.addEventListener('click', (e) => {
	projectDescription1.classList.toggle('open');
});

openDescription2.addEventListener('click', (e) => {
	projectDescription2.classList.toggle('open');
});

openDescription3.addEventListener('click', (e) => {
	projectDescription3.classList.toggle('open');
});

openDescription4.addEventListener('click', (e) => {
	console.log('opened');
	projectDescription4.classList.toggle('open');
});
