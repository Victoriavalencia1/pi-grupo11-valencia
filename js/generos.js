let acaVaLaAPIKey = "99871c7c00dfc64424c61b446dd23039";

let urlGeneroPeli= `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`;
let urlGeneroSerie= `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`;


let contenedorGenerosPeli = document.querySelector("#contenedorPeliGenero");
let contenedorGenerosSerie= document.querySelector("#contenedorSerieGenero");

