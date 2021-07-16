'use strict';

const openDescription1 = document.querySelector('#description-1');
const openDescription2 = document.querySelector('#description-2');
const openDescription3 = document.querySelector('#description-3');
const projectDescription1 = document.querySelector('.project-1-description');
const projectDescription2 = document.querySelector('.project-2-description');
const projectDescription3 = document.querySelector('.project-3-description');

openDescription1.addEventListener('click', (e) => {
	projectDescription1.classList.toggle('open');
});

openDescription2.addEventListener('click', (e) => {
	projectDescription2.classList.toggle('open');
});

openDescription3.addEventListener('click', (e) => {
	projectDescription3.classList.toggle('open');
});
