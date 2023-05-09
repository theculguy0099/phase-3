let ind1 = 0;

window.onload = function () {

var trig = document.getElementById("quote1");

const text="People haven't always been there for me but music always has!";

function type1() {

trig.innerHTML += text.charAt(ind1);

ind1++;

setTimeout(type1, 100);

}

type1();

}
