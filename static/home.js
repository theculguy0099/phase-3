const links = document.querySelectorAll('nav a');

links.forEach(link => {
  if (!link.classList.contains('home')) {
    link.addEventListener('mouseover', () => {
      link.style.color = '#c536cf';
      link.style.backgroundColor = '#08dfdf';
    });
    
    link.addEventListener('mouseout', () => {
      link.style.color = '#000000';
      link.style.backgroundColor = '#b7de05';
    });
  }
});
