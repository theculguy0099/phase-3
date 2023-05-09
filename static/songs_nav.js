// Get the navigation element
const nav = document.querySelector("nav");

// Set the background color and overflow properties
nav.style.backgroundColor = "#b9df10";
nav.style.overflow = "hidden";
nav.style.marginTop = "-4px";
nav.style.marginRight = "0px";

// Get all the anchor elements inside the navigation element
const links = nav.querySelectorAll("a");

// Loop through the anchor elements and set their styles
links.forEach(link => {
  link.style.float = "right";
  link.style.color = "#010102";
  link.style.textAlign = "center";
  link.style.padding = "18px 20px";
  link.style.textDecoration = "none";
  link.style.fontSize = "30px";

  // Add a hover effect
  link.addEventListener("mouseover", () => {
    link.style.backgroundColor = "#ddd";
    link.style.color = "rgb(16, 26, 212)";
  });

  // Remove the hover effect
  link.addEventListener("mouseout", () => {
    link.style.backgroundColor = "";
    link.style.color = "";
  });
});
