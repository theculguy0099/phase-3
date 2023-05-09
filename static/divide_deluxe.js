// Get all the anchor tags in the navigation menu
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to each anchor tag
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    // Change the color of the link text on hover
    link.style.color = 'rgb(16, 26, 212)';
    link.style.backgroundColor = '#ddd';
  });

  link.addEventListener('mouseout', () => {
    // Reset the color of the link text when the mouse is moved away
    link.style.color = '#010102';
    link.style.backgroundColor = '#b9df10';
  });
});






// const toggleButtons = document.querySelectorAll('.add-to-playlist-btn');
     
// toggleButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         var liElement = button.parentElement;
//         var liElement = liElement.parentElement;
//         const songName = String(liElement.querySelector('span:first-child').textContent);
 
//         let songDuration = liElement.querySelector('span:last-child').textContent;
//         songDuration = songDuration.replace(/\s/g, '').replace(/\+$/, '');
 
//         const album = String(document.title);
 
//         var artist = document.querySelector('.left-columntophits');
//         var artist = artist.querySelector('p');
//         var artist = String(artist.querySelector('b').textContent);
 
//         const artistID = artist;
//         const songid = songName.replace(/\s/g, '');
//         const songID = String(artistID.concat('', songid, '')).replace(/\s/g, '');
 
//         // Check if the songID already exists in the playlist.db database
//         fetch(`/check_song/${songID}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.exists) {
//                     alert("Song already exists in playlist");
//                 } else {
//                     alert("Song has been added");
//                     // Send data to server to be stored in database
//                     const data = {songName, songDuration, album, artistID, songID};
//                     fetch('/store_data', {
//                         method: 'POST',
//                         body: JSON.stringify(data),
//                         headers: {'Content-Type': 'application/json'}
//                     });
//                 }
//             });
//     });
// });





function addToPlaylist(songId,songName,songDuration,songArtist,songAlbum) {
  fetch('/add-to-playlist', {
  method: 'POST',
  headers: {
     'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'song_id': songId,
    'song_name': songName,
    'song_duration' :songDuration,
    'song_artist':songArtist,
    'song_album':songAlbum
    
  })
})
.then(response => response.json())
.then(data => {
  if (data.status === 'success') {
    alert('Song added to playlist.');
  } else if (data.status === 'duplicate') {
    alert('Song already in playlist.');
  } else {
    alert('Error adding song to playlist.');
  }
})
.catch(error => {
 console.error('Error adding song to playlist:', error);
  alert('Error adding song to playlist.');
});
}