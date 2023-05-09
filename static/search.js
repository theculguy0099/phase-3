function search() {
    
    // Get the search term from the search bar input field
    var searchTerm = document.getElementById("search-bar").value;
    
    // Get the maximum duration from the duration filter input field
    var maxDuration = document.getElementById("duration-filter").value;
    
    // Get the explicitness filter value
    var explicitness = document.getElementById("explicitness-filter").value;
    
    // Construct the search URL with filters
    var url =
      "https://itunes.apple.com/search?term=" +
      searchTerm +
      "&entity=song" 
      
      
    
    // Add duration filter to the search URL if a value is specified
  
    
    // Add explicitness filter to the search URL if a value is specified
   
    
    
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Check if any results were returned
    
          // Display the search results
          var searchResults = document.getElementById("search-results");
          searchResults.innerHTML = "";
          var i=0;
          var count=0;
          console.log(data);
          while(count<10&&i<data.resultCount) {
            
            var result = data.results[i];
            if (result.trackExplicitness=='explicit'&& explicitness=='notExplicit'){
              
              i++;
              continue;
            }
            if (result.trackTimeMillis>maxDuration*60000&&maxDuration){
              
              i++;
              continue;
            }
            
  
            // Create a card for the search result
            var card = document.createElement("div");
            card.classList.add("card");
  
            // Add the album poster to the card
            var artwork = document.createElement("img");
            artwork.src = result.artworkUrl100;
            card.appendChild(artwork);
  
            // Add the artist name to the card
            var artistName = document.createElement("p");
            artistName.innerText = "Artist Name: "+ result.artistName;
            card.appendChild(artistName);
  
            // Add the track name to the card
            var trackName = document.createElement("p");
            trackName.innerText = "Track Name: " + result.trackName;
            card.appendChild(trackName);
  
            // Check if the search result contains a playable audio clip
            if (result.kind === "song" && result.previewUrl) {
              // Add an audio player to the card
              var audio = document.createElement("audio");
              audio.controls = true;
              audio.src = result.previewUrl;
              card.appendChild(audio);
            }
  
            // Add the card to the search results container
            searchResults.appendChild(card);
            
            i++;
            count++;
          }
          console.log(count)
          if (count ==0) {
            console.log('count0')
            // Display a message indicating that no results were found
            var searchResults = document.getElementById("search-results");
            searchResults.innerHTML = "<h1>No results found!!</h1>";
          }
        
      })
      .catch(function (error) {
        console.error(error);
      });

  }
  function clearFilters() {
    
    // Clear the duration filter input field
    document.getElementById("duration-filter").value = "";
    
    // Clear the explicitness filter input field
    document.getElementById("explicitness-filter").value = "";
    
    // Call the search function to update the search results
    search();
  }

  const links = document.querySelectorAll('nav a');

links.forEach(link => {
  if (!link.classList.contains('back')) {
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



