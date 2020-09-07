let movies = [
  {
    title: `Aquaman`,
    bio: `Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.`,
    img: `https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg`,
    ageLimit: 11,
  },
  {
    title: `The Dark Knight`,
    bio: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.`,
    img: `https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg`,
    ageLimit: 15,
  },
  {
    title: `The Lion King`,
    bio: `Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.`,
    img: `https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SY1000_CR0,0,673,1000_AL_.jpg`,
    ageLimit: 7,
  },
  {
    title: `Intouchables`,
    bio: `After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.`,
    img: `https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg`,
    ageLimit: 7,
  },
  {
    title: `Joker`,
    bio: `In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.`,
    img: `https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg`,
    ageLimit: 15,
  },
  {
    title: `Taare Zameen Par`,
    bio: `An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.`,
    img: `https://m.media-amazon.com/images/M/MV5BMDhjZWViN2MtNzgxOS00NmI4LThiZDQtZDI3MzM4MDE4NTc0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,699,1000_AL_.jpg`,
    ageLimit: 7,
  },
];

// Element selector
const movieMain = document.querySelector("#movie-rendering");

// Handler
window.onload = function () {
  renderMovies();
  transition();
};
window.onscroll = function () {
  myFunction();
};

// Variables
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

// Functions
function transition() {
  let cards = document.querySelectorAll(".movie-card");
  //selector selecting all .movie-card and puts them in array
  for (let i = 0; i < cards.length; i++) {
    let delay = i * 0.2;
    cards[i].style.animationDelay = `${delay}s`;
  }
  //give each list item an animation-delay attribute
}
function renderMovies() {
  let movieList = document.createElement("section");

  // Setting up id
  movieList.setAttribute("id", "new-movies");
  movieList.setAttribute("class", "container");
  movieMain.appendChild(movieList);

  movies.forEach((movie) => {
    // Creating elements for movie card ...
    let movieCard = document.createElement("article");
    let movieImg = document.createElement("img");
    let movieTitle = document.createElement("h2");
    let movieBio = document.createElement("p");

    movieCard.setAttribute("class", "col movie-card");
    movieImg.setAttribute("class", "movie-image");
    movieTitle.setAttribute("class", "movie-title");
    movieBio.setAttribute("class", "movie-bio");

    movieImg.setAttribute("src", `${movie.img}`);
    movieTitle.innerText = movie.title;
    movieBio.innerText = movie.bio;

    movieList.appendChild(movieCard);
    movieCard.appendChild(movieImg);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieBio);
  });
}

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
