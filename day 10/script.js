const jokeEle = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// NOTE: using.then
// function generateJoke() {
//   config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com/", config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEle.innerHTML = data.joke;
//     });
// }

// NOTE: using async await
async function generateJoke() {
  config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);

  const data = await res.json();

  jokeEle.innerHTML = data.joke;
}
