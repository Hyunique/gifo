fetchImg("blank book");

const btn = document.querySelector("button");
const input = document.querySelector("#searchInput");
const img = document.querySelector("img");

btn.addEventListener("click", () => fetchImg(input.value));
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
  }
});

function fetchImg(keyword) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=rW7cuKJ7grt57ZvWemWr3puXUwU0Zzdy&s=${keyword}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((error) => {
      showError(keyword);
    });
}

function showError(keyword) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=rW7cuKJ7grt57ZvWemWr3puXUwU0Zzdy&s=failed`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
  console.log(`Can't find GIF with entered keyword ${keyword}`);
}
