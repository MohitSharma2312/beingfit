/* Smooth Scrolling */

const links = document.querySelectorAll('nav a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}

/* Hover Effects */

const services = document.querySelectorAll('.service');

services.forEach(service => {
  service.addEventListener('mouseover', () => {
    service.style.backgroundColor = '#f43b47';
    service.style.color = '#fff';
    service.querySelector('i').style.color = '#fff';
  });
  service.addEventListener('mouseout', () => {
    service.style.backgroundColor = '#f9f9f9';
    service.style.color = '#333';
    service.querySelector('i').style.color = '#f43b47';
  });
});
