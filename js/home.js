let acaVaLaAPIKey = "99871c7c00dfc64424c61b446dd23039";

let urlPelisPopu= `https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`;
let urlSeriesPopu= `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`;



let contenedorPelisPopular= document.querySelector(".contenedorpeliculas");
let contenedorSeriesPopular= document.querySelector(".contenedorpeliculas1");


fetch(urlPelisPopu)
.then(function(response) {
    return response.json()
})
.then(function(data) {

    let miData = data.results;

    let contenido= "";

    for (let i = 0; i <8; i++) {

        console.log(miData[i]);
        contenido += `<article>
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

    for (let i = 0; i <8; i++) {

        console.log(miData[i]);
        contenido += `<article>
                        <h2>${miData[i].title}</h2>
                        <a href="./detalle-Pelicula.html?idPelicula=${miData[i].id}"> 
                        <img class="fotopelicula" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}"> 
                        </a>
                        <h6>${miData[i].release_date}</h6>
                    </article>`
    }
       
    contenedorSeriesPopular.innerHTML = contenido;

})

.catch(function(error) {
    console.log(error);
});

