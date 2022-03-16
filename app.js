"use strict";

/** getGif: async function that grabs our searchInput from HTML and get an
 * AJAX response via Axios using the Giphy API with parameters api_key and q.
 * Returns the response.
 */
async function getGif(event) {
  event.preventDefault();
  let searchInput = $("#search-input").val();
  console.log("searchInput", searchInput);

  let response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { api_key: "O5Wl9rfJfBHEGElUF7fW43DL92j6JKrx", q: searchInput },
  });

  let randomIndex = randNum(response.data.data.length);
  return response.data.data[randomIndex].images.original.url;
}

/** addGift: selects the gifArea div and appends the gif parameter */
function addGif(gif) {
  const $gifArea = $("#gifArea");
  $gifArea.append($(`<img src=${gif}/>`));
}

/** randNum: given length of getGif response array, returns a random number.  */
function randNum(length) {
  return Math.floor(Math.random() * length + 1);
}

console.log("Let's get this party started!");

/** Event handler on the giphy-form that listens a submit. On submit, calls an
 * async callback function that awaits a promise from the getGif function.
 * Calls addGif with the value of promise.
 */
$("#giphy-form").on("submit", async (event) => {
  let gif = await getGif(event);
  addGif(gif);
});

/** Event handler used to delete all gifs in the gifArea once the
 * button is pushed.
 */
$("#delete-button").on("click", () => {
  $("#gifArea").html("");
});

// API KEY:
// O5Wl9rfJfBHEGElUF7fW43DL92j6JKrx
