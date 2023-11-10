let qs = location.search;
let qsObj= new URLSearchParams(qs);
let nombrePelicula= qsObj.get("idPelicula");

let url= `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${Buscar}`

fetch(url)
.then(function(res) {

    return res.json();

})
.then(function(data)  {

    console.log(data.results);

    let personajes = data.results;
    let seccion = document.querySelector(".container")
    let miPersonaje = document.querySelector(".miPersonaje")

    let allCharacters = "";

    for (let i = 0; i < personajes.length; i++) {
        allCharacters += `<article>
                            <h2>${miData[i].title}</h2>
                            <a href="./detalle-Pelicula.html?idPelicula=${miData[i].id}"> 
                            <img class="fotopelicula" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}"> 
                            </a>
                            <h6>${miData[i].release_date}</h6>
                            </article>`
    }

    seccion.innerHTML = allCharacters;
    miPersonaje.innerText = nombrePersonaje;

})
.catch(function(error)  {
    console.log(error);
}) 