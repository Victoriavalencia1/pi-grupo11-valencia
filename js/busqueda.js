let acaVaLaAPIKey = "99871c7c00dfc64424c61b446dd23039";

let qs = location.search;
let qsObj= new URLSearchParams(qs);
let dataBuscada= qsObj.get("buscar");

let urlBuscadosPelicula= `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${dataBuscada}`;
let urlBuscadosSerie= `https://api.themoviedb.org/3/search/tv?api_key=${acaVaLaAPIKey}&query=${dataBuscada}`;


let contenedorBuscador= document.querySelector(".contenedorpeliculas");
let miPelicula= document.querySelector(".miBuscado");


fetch(urlBuscadosPelicula)
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
       
    contenedorBuscador.innerHTML = contenido;
    miPelicula.innerText= dataBuscada;

})

.catch(function(error) {
    console.log(error);
});



fetch(urlBuscadosSerie)
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
                        <a href="./detalle-Pelicula.html?idPelicula=${miData[i].id}"> 
                        <img class="fotopelicula" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}"> 
                        </a>
                        <h6>${miData[i].first_air_date}</h6>
                    </article>`
    }
       
    contenedorBuscador.innerHTML = contenido;

})

.catch(function(error) {
    console.log(error);
});
