let acaVaLaAPIKey = "99871c7c00dfc64424c61b446dd23039";

let urlPelisPopu= `https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`;
let urlSeriesPopu= `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`;
let urlMasValoradas= `https://api.themoviedb.org/3/tv/top_rated?api_key=${acaVaLaAPIKey}`;



let contenedorPelisPopular= document.querySelector("#contenedorpeliculapopu");
let contenedorSeriesPopular= document.querySelector("#contendorserie");
let contenedorValoradas= document.querySelector("#contenedorvaloradas");



fetch(urlPelisPopu)
.then(function(response) {
    return response.json()
})
.then(function(data) {

    let miData = data.results;

    let contenido= "";

    for (let i = 0; i <9; i++) {

        console.log(miData[i]);
        contenido += `<article class="pelicula-1">
                        <h2>${miData[i].title}</h2>
                        <a href="./detalle-Pelicula.html?idPelicula=${miData[i].id}"> 
                        <img class="fotopelicula" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}"> 
                        </a>
                        <h6>${miData[i].release_date}</h6>
                    </article>`
    }
       
    contenedorPelisPopular.innerHTML = contenido;

})

.catch(function(error) {
    console.log(error);
});




/* segundo fetch*/

fetch(urlSeriesPopu)
.then(function(response) {
    return response.json()
})
.then(function(data) {

    let miData = data.results;

    let contenido= "";

    for (let i = 0; i <9; i++) {

        console.log(miData[i]);
        contenido += `<article class="pelicula-1">
                        <h2>${miData[i].name}</h2>
                        <a href="./detalle-serie.html?idSerie=${miData[i].id}"> 
                        <img class="fotopelicula" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}"> 
                        </a>
                        <h6>${miData[i].first_air_date}</h6>
                    </article>`
    }
       
    contenedorSeriesPopular.innerHTML = contenido;

})

.catch(function(error) {
    console.log(error);
});



/* tercer fetch*/


fetch(urlMasValoradas)
.then(function(response) {
    return response.json()
})
.then(function(data) {

    let miData = data.results;

    let contenido= "";

    for (let i = 0; i <9; i++) {

        console.log(miData[i]);
        contenido += `<article class="pelicula-1">
                        <h2>${miData[i].name}</h2>
                        <a href="./detalle-serie.html?idSerie=${miData[i].id}"> 
                        <img class="fotopelicula" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}"> 
                        </a>
                        <h6>${miData[i].first_air_date}</h6>
                    </article>`
    }
       
    contenedorValoradas.innerHTML = contenido;

})

.catch(function(error) {
    console.log(error);
});

