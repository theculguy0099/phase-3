// Zoom in/out effect on artist image
const artistImg = document.querySelector(".artist-container img");

artistImg.addEventListener("mouseover", function () {
  artistImg.style.transform = "scale(1.1)";
});

artistImg.addEventListener("mouseout", function () {
  artistImg.style.transform = "scale(1)";
});


// Rating system
const ratingForm = document.querySelector('form');
const ratingTable = document.querySelector('#rating-table tbody');
let ratingsData = {};

function updateTable() {
  ratingTable.innerHTML = '';

  for (let key in ratingsData) {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const ratingCell = document.createElement('td');
    const reviewCell = document.createElement('td');

    nameCell.textContent = ratingsData[key].name;
    ratingCell.textContent = ratingsData[key].rating + '/5';
    reviewCell.textContent = ratingsData[key].review;

    row.appendChild(nameCell);
    row.appendChild(ratingCell);
    row.appendChild(reviewCell);
    ratingTable.appendChild(row);
  }
}

function submitReview() {
  const nameInput = document.querySelector('#name');
  const ratingInput = document.querySelector('input[name="rating"]:checked');
  const reviewInput = document.querySelector('#review');

  if (nameInput.value && ratingInput && reviewInput.value) {
    const ratingData = {
      name: nameInput.value,
      rating: ratingInput.value,
      review: reviewInput.value
    };

    const timestamp = new Date().getTime();
    ratingsData[timestamp] = ratingData;
    updateTable();

    nameInput.value = '';
    ratingInput.checked = false;
    reviewInput.value = '';
  } else {
    alert('Please fill in all fields');
  }
}

ratingForm.addEventListener('submit', function(event) {
  event.preventDefault();
  submitReview();
});



// Countdown timer
const releaseDate = new Date('September 15, 2023 00:00:00').getTime();
const countdownEl = document.querySelector('#countdown');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `Get ready to experience the musical masterpiece of the year! Speak Now(Taylor's Version), the highly-anticipated album release is just around the corner, with only ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds left until you can enjoy the euphoric melodies and captivating beats of the newest sensation.`;
}

setInterval(updateCountdown, 1000);
updateCountdown();




const links = document.querySelectorAll('nav a');

links.forEach(link => {
  if (!link.classList.contains('artist')) {
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