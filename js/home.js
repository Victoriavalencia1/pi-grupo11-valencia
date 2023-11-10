let acaVaLaAPIKey = "99871c7c00dfc64424c61b446dd23039";

let pagina= 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', function(){
    if (pagina<1000){
        pagina += 1;
        allPeliculas();
    }
});

btnAnterior.addEventListener('click', function(){
    if (pagina >1){
        pagina -= 1;
        allPeliculas();
    }
});

let endpoint= `https://api.themoviedb.org/3/movie/popular?api_key=99871c7c00dfc64424c61b446dd23039&page=${acaVaLaAPIKey}`;

fetch(endpoint)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data.results);

    let peliculas = data.results;

    let seccion= document.querySelector(".contenedorpeliculas");

    let allPeliculas= "";

    for (let i = 0; i < peliculas.length; i++) {
        let titulo = peliculas[i].title;
        let imagenURL = "https://image.tmdb.org/t/p/w500" + peliculas[i].poster_path;
  
        allPeliculas += `
          <div>
            <h2>${titulo}</h2>
            <a href="./detalle-Pelicula.html?idPelicula=${peliculas[i].id}">
              <img class="fotopelicula" src="${imagenURL}">
            </a>
          </div>`;
      }
      seccion.innerHTML = allPeliculas;

})
.catch(function(error) {
    console.log(error);
});
