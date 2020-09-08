let movies = []
// Element selector
const movieMain = document.querySelector('#movie-rendering')
const footerDate = document.querySelector('#current-date')
const movieTitleElement = document.querySelector('#admin-movie-crud')
const title = document.getElementById('new-movie-title')
const bio = document.getElementById('new-movie-bio')
const imgUrl = document.getElementById('new-movie-url')
const pg = document.getElementById('new-movie-age-restriction')


// LocalStorage
const moviesJSON = localStorage.getItem('movies')

if(moviesJSON !== null) {
  movies = JSON.parse(moviesJSON).reverse()
} 

// Handler
window.onscroll = function () {
  stickyNavbar()
}

if(movieTitleElement) {
  movieTitleElement.addEventListener('submit', (e) => {
    e.preventDefault()
    adminCreate()
  })
}

// Variables
let navbar = document.getElementById('navbar')
let sticky = navbar.offsetTop


// Functions
// Global
function currentDate() {
  // variable that hold the current year
  footerDate.innerText = new Date().getFullYear()
}
// index.html
function renderMovies() {
  let movieList = document.createElement('section')

  // Setting up id
  movieList.setAttribute('id', 'new-movies')
  movieList.setAttribute('class', 'container')

  movieMain.appendChild(movieList)

  movies.forEach((movie) => {
    
    // Creating elements for movie card ...
    let movieCard = document.createElement('article')
    let movieImg = document.createElement('img')
    let movieTitle = document.createElement('h2')
    let movieBio = document.createElement('p')

    movieCard.setAttribute('class', 'col movie-card')
    movieImg.setAttribute('class', 'movie-image')
    movieTitle.setAttribute('class', 'movie-title')
    movieBio.setAttribute('class', 'movie-bio')

    movieImg.setAttribute('src', `${movie.img}`)
    movieTitle.innerText = movie.title
    movieBio.innerText = movie.bio

    movieList.appendChild(movieCard)
    movieCard.appendChild(movieImg)
    movieCard.appendChild(movieTitle)
    movieCard.appendChild(movieBio)
  })
}

// Adding a movie to localStorage
function adminCreate() {
  let movieId = movies.length -1
  movies.push({
    id: movieId + 1,
    title: title.value,
    bio: bio.value,
    img: imgUrl.value,
    ageLimit: pg.value
  })
  localStorage.setItem('movies', JSON.stringify(movies))
  successMsg()

}

// Let the navbar stick to the top
function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }
}

// Adding a success message and delete it after 3 sek
function successMsg() {
  let successMsg = document.createElement('h3')
  successMsg.setAttribute('style', 'background-color:green; color:white; text-align:center; border-radius: 10px;') 

  successMsg.innerText = `Movie Added!`
  movieTitleElement.appendChild(successMsg)

  setTimeout(function(){successMsg.remove()}, 3000);
}