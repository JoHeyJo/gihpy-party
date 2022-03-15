"use strict"

async function getGif() {
  let searchInput = $("#search-input").val();

  let response = await axios.get(
    "http://api.giphy.com/v1/gifs/search", { params: { searchInput }}
  );

  console.log('resp.... ' + response);
}

console.log("Let's get this party started!");