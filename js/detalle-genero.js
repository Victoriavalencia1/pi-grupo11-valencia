let acaVaLaAPIKey = '99871c7c00dfc64424c61b446dd23039';

let qs= location.search;
let qsObj = new URLSearchParams(qs);
let id_genero = qsObj.get("id_genero");

let nombreGenero= qsObj.get("name");

let generoPelicula = document.querySelector("#generoPelicula");
generoPelicula.innerText = nombreGenero;


let urlDiscoverPelicula = `https://api.themoviedb.org/3/discover/movie?api_key=${acaVaLaAPIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=` + id_genero;
    fetch(urlDiscoverPelicula)
    .then(function(respond) {
      return respond.json()
    })
    .then(function(data) {
      console.log(data);
      console.log(data.results);
      let arrayDeResultados = data.results
      console.log(arrayDeResultados);
      console.log(arrayDeResultados.length);
      let li = "";
      let id = "";
      let poster = ""
      let fechaDeLanzamiento = ""
      let puntuacion = ""



      for (let i = 0; i < arrayDeResultados.length; i++) {
          console.log(arrayDeResultados[i]);

          id = arrayDeResultados[i].id

          titulo = arrayDeResultados[i].title
          console.log(titulo);

          poster = arrayDeResultados[i].poster_path
          console.log(poster);

          fechaDeLanzamiento = arrayDeResultados[i].release_date
          console.log(fechaDeLanzamiento);

          puntuacion = arrayDeResultados[i].vote_average
          console.log(puntuacion);

          if (titulo!=null && poster!=null ) {
            let tituloResultados = document.querySelector('.contenedorpeliculas')
            let url = "https://image.tmdb.org/t/p/original" + poster

            tituloResultados.innerHTML += `<div class="pelicula-1">
                                <h2>${titulo}</h2>
            <a href="./detalle-Pelicula.html?idPelicula=${id}"> <img class="fotoavatar" src="${url}"> </a>
            <p> ${fechaDeLanzamiento} </p>
        </div>`

          }
      }

      var genero = document.querySelector('h1.title')
      genero.innerText += nombreGenero

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
      console.log(data.results);
      let arrayDeResultados = data.results
      console.log(arrayDeResultados);
      console.log(arrayDeResultados.length);
      let li = "";
      let id = "";
      let poster = ""
      let fechaDeLanzamiento = ""
      let puntuacion = ""



      for (let i = 0; i < arrayDeResultados.length; i++) {
          console.log(arrayDeResultados[i]);

          id = arrayDeResultados[i].id

          titulo = arrayDeResultados[i].title
          console.log(titulo);

          poster = arrayDeResultados[i].poster_path
          console.log(poster);

          fechaDeLanzamiento = arrayDeResultados[i].release_date
          console.log(fechaDeLanzamiento);

          puntuacion = arrayDeResultados[i].vote_average
          console.log(puntuacion);

          if (titulo!=null && poster!=null ) {
            let tituloResultados = document.querySelector('.contenedorpeliculas')
            let url = "https://image.tmdb.org/t/p/original" + poster

            tituloResultados.innerHTML += `<div class="pelicula-1">
                                <h2>${titulo}</h2>
            <a href="./detalle-Pelicula.html?idPelicula=${id}"> <img class="fotoavatar" src="${url}"> </a>
            <p> ${fechaDeLanzamiento} </p>
        </div>`

          }
      }

      var genero = document.querySelector('h1.title')
      genero.innerText += nombreGenero

    })
    .catch(function(error) {
      console.log("Error" + error) ;
    })

