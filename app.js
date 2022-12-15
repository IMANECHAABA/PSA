'use strict';

const footer = document.querySelector('.footer');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  footer.scrollIntoView({ behavior: 'smooth' });
});
