let acaVaLaAPIKey = "99871c7c00dfc64424c61b446dd23039";

let qs= location.search;
let qsObj = new URLSearchParams(qs);
let id_serie = qsObj.get("idSerie");

let titulo= document.querySelector(".titulo3");
let imagen= document.querySelector(".fotodetail");
let calificacion= document.querySelector(".valoracion");
let fechaEstreno= document.querySelector(".fecha");
let sinopsis= document.querySelector(".textodesc");
let genero= document.querySelector(".botongenero");

let urlDetalleSerie = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaVaLaAPIKey}`;

fetch(urlDetalleSerie)
.then(function(response) {
    return response.json()
})
.then(function(data) {

    console.log(data);

    imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    titulo.innerText= data.name;
    calificacion.innerText = `Popularidad: ${data.popularity}`;
    fechaEstreno.innerText = `Fecha de estreno: ${data.first_air_date}`;
    sinopsis.innerText= data.overview;
    let generos = data.genres.map((genre) => genre.name);
    genero.innerText = `${generos.join(", ")}`;

})

.catch(function(error) {
    console.log(error);
});


