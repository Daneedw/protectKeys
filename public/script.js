
const movie ="up";
fetch("/omdb/"+movie)
.then(response => response.json())
.then(movie =>{

console.log(movie)


})