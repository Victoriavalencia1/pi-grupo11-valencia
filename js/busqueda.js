let qs = location.search;
let qsObj= new URLSearchParams(qs);
let nombrePelicula= qsObj.get("nombrePersonaje");

let url= `https://api.themoviedb.org/3/movie/popular?name=${nombrePelicula}`

