const links = document.querySelectorAll('nav a');

links.forEach(link => {
  if (!link.classList.contains('artists')) {
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
let ind1 = 0;

window.onload = function () {

var trig = document.getElementById("quote1");

const text="People haven't always been there for me but music always has!";

function type1() {

trig.innerHTML += text.charAt(ind1);

ind1++;

setTimeout(type1, 200);

}

type1();

}