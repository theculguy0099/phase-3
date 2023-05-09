// Get the nav element
const nav = document.querySelector('nav');

// Apply styles to the nav element
nav.style.backgroundColor = '#b9df10';
nav.style.overflow = 'hidden';
nav.style.marginTop = '-30px';
nav.style.marginRight = '0px';
nav.style.width = '99%';
nav.style.position = 'fixed';

// Get all the anchor elements inside nav
const navLinks = nav.querySelectorAll('a');

// Apply styles to the anchor elements
navLinks.forEach(link => {
  link.style.float = 'right';
  link.style.color = '#010102';
  link.style.textAlign = 'center';
  link.style.padding = '18px 20px';
  link.style.textDecoration = 'none';
  link.style.fontSize = '30px';

  // Add event listener for hover effect
  link.addEventListener('mouseover', () => {
    link.style.backgroundColor = '#ddd';
    link.style.color = 'rgb(16, 26, 212)';
  });

  // Add event listener for mouseout effect
  link.addEventListener('mouseout', () => {
    link.style.backgroundColor = '';
    link.style.color = '#010102';
  });
});
