'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    document.body.style.cssText = 'overflow: hidden';
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.body.style.cssText = 'overflow: visible';
  }
});
