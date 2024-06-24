const btnEl = document.querySelector(".btn");
const jokeEl = document.querySelector(".joke");
const apiURL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getJoke = async () => {
  try {
    btnEl.textContent = "Loading...";
    const response = await fetch(apiURL);
    jokeEl.style.display = "block";
    let data = await response.json();
    jokeEl.textContent = data.joke;
    btnEl.textContent = "Get A Random Joke";
  } catch (error) {
    jokeEl.textContent = "An unknown error occurred";
  }
};

btnEl.addEventListener("click", getJoke);
