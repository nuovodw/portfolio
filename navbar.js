'use strict';

const checkbox = document.querySelector("input[type='checkbox']");
const navList = document.querySelectorAll('.nav-link');

navList.forEach((navLink) => {
	navLink.addEventListener('click', () => {
		checkbox.checked = false;
	});
});
// navList.addEventListener('click', () => {
// 	checkbox.checked = false;
// });

// checkbox.addEventListener('change', function () {
// 	if (this.checked) {
// 		navList.style.color = 'red';
// 	} else {
// 		console.log('not checked');
// 	}
// });

// checkbox.addEventListener('change', (e) => {
// 	if (e.target.checked) {

// 	}
// });
// const input = document.querySelector('input');

// function closeNav() {
// 	if ((checkbox.checked = true)) {
// 		console.log('checked');
// 		navList.style.color = 'red';
// 	}
// }

// closeNav();

// Navigation Bar

// let nav = document.querySelector('nav');
// let scrollBtn = document.querySelector('.scroll-button a');

// let val;

// window.onscroll = function () {
// 	if (document.documentElement.scrollTop > 20) {
// 		nav.classList.add('sticky');
// 		scrollBtn.style.display = 'block';
// 	} else {
// 		nav.classList.remove('sticky');
// 		scrollBtn.style.display = 'none';
// 	}
// };

//Side Nav Menu
// let body = document.querySelector('body');
// let navBar = document.querySelector('.navbar');
// let menuBtn = document.querySelector('.menu-btn');
// let cancelBtn = document.querySelector('.cancel-btn');

// menuBtn.onclick = function () {
// 	navBar.classList.add('active');
// 	menuBtn.style.opacity = '0';
// 	menuBtn.style.pointerEvents = 'none';
// 	body.style.overflowX = 'hidden';
// 	scrollBtn.style.pointerEvents = 'none';
// };

// cancelBtn.onclick = function () {
// 	navBar.classList.remove('active');
// 	menuBtn.style.opacity = '1';
// 	menuBtn.style.pointerEvents = 'auto';
// 	body.style.overflowX = 'auto';
// 	scrollBtn.style.pointerEvents = 'auto';
// };

// Side Nav Menu closes after click
// let navLinks = document.querySelectorAll('.menu li a');
// for (var i = 0; i < navLinks.length; i++) {
// 	navLinks[i].addEventListener('click', () => {
// 		navBar.classList.remove('active');
// 		menuBtn.style.opacity = '1';
// 		menuBtn.style.pointerEvents = 'auto';
// 	});
// }
