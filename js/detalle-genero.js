let acaVaLaAPIKey = '99871c7c00dfc64424c61b446dd23039';

let qs= location.search;

let qsObj = new URLSearchParams(qs);
let id_genero = qsObj.get("id_genero");

let nombreGenero= qsObj.get("name");

let generoPelicula          = document.querySelector("#generoPelicula");
let generoSerie             = document.querySelector("#generoSerie");
generoPelicula.innerText    = nombreGenero;
generoSerie.innerText       = nombreGenero;
let secciongeneroPeliculas = document.querySelector("#secciongeneroPeliculas");




let urlDiscoverPelicula = `https://api.themoviedb.org/3/discover/movie?api_key=${acaVaLaAPIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=` + id_genero;
    fetch(urlDiscoverPelicula)
    .then(function(respond) {
      return respond.json()
    })
    .then(function(data) {
      console.log(data.results.length==0);

      if(data.results.length==0) {
        secciongeneroPeliculas.style.display = 'none';
      }else{
        
      let arrayDeResultados = data.results
      let li = "";
      let id = "";
      let poster = ""
      let fechaDeLanzamiento = ""
      let puntuacion = ""



      for (let i = 0; i < arrayDeResultados.length; i++) {

          id = arrayDeResultados[i].id

          titulo = arrayDeResultados[i].title

          poster = arrayDeResultados[i].poster_path

          fechaDeLanzamiento = arrayDeResultados[i].release_date

          puntuacion = arrayDeResultados[i].vote_average

          if (titulo!=null && poster!=null ) {
            let tituloResultados = document.querySelector('.contenedorpeliculas')
            let url = "https://image.tmdb.org/t/p/original" + poster

            tituloResultados.innerHTML += `<div class="pelicula-1">
                                <h2 class="titulos">${titulo}</h2>
            <a href="./detalle-Pelicula.html?idPelicula=${id}"> <img class="fotoavatar" src="${url}"> </a>
            <h6> ${fechaDeLanzamiento} </h6>
        </div>`

          }
      }

      var genero = document.querySelector('.titulo')
      genero.innerText += nombreGenero
      secciongeneroPeliculas.style.display = 'flex';
      console.log(secciongeneroPeliculas);
      }
     
      
    })
    .catch(function(error) {
      console.log("Error" + error) ;
    })



/* de serie*/


let urlDiscoverSerie = `https://api.themoviedb.org/3/discover/tv?api_key=${acaVaLaAPIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=` + id_genero;
    fetch(urlDiscoverSerie)
    .then(function(respond) {
      return respond.json()
    })
    .then(function(data) {
      console.log(data);
      let arrayDeResultados = data.results

      let li = "";
      let id = "";
      let poster = ""
      let fechaDeLanzamiento = ""
      let puntuacion = ""



      for (let i = 0; i < arrayDeResultados.length; i++) {

          id = arrayDeResultados[i].id

          titulo = arrayDeResultados[i].name

          poster = arrayDeResultados[i].poster_path

          fechaDeLanzamiento = arrayDeResultados[i].first_air_date

          puntuacion = arrayDeResultados[i].vote_average
          if (titulo!=null && poster!=null ) {
            let tituloResultados = document.querySelector('.misSeries')
            let url = "https://image.tmdb.org/t/p/original" + poster

            tituloResultados.innerHTML += `<div class="pelicula-1">
                                <h2 class="titulos">${titulo}</h2>
                                <a href="./detalle-serie.html?idSerie=${id}"> <img class="fotoavatar" src="${url}"> </a>
                                <h6> ${fechaDeLanzamiento} </h6>
                                </div>`

          }
      }

  

    })
    .catch(function(error) {
      console.log("Error" + error) ;
    })

