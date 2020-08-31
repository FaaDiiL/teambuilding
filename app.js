// let movies = [    {
//     title: 'Title 1',
//     bio: 'Some bio1',
//     ageLimit: 7
// },{
//     title: 'Title 2',
//     bio: 'Some bio2',
//     ageLimit: 2
// },
// {
//     title: 'Title 3',
//     bio: 'Some bio 3',
//     ageLimit: 3
// }
// ]
// console.log(movies.forEach(movie => console.log(movie.title)))




window.onscroll = function() {myFunction()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}