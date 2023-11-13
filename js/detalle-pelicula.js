document.addEventListener('DOMContentLoaded', function () {
  let acaVaLaAPIKey = "99871c7c00dfc64424c61b446dd23039";
  
  let qs= location.search;
  let qsObj = new URLSearchParams(qs);
  let id_movie = qsObj.get("idPelicula");

  let titulo= document.querySelector(".titulo3");
  let imagen= document.querySelector(".fotodetail");
  let calificacion= document.querySelector(".valoracion");
  let fechaEstreno= document.querySelector(".fecha");
  let sinopsis= document.querySelector(".textodesc");
  let genero= document.querySelector(".botongenero");
  let duracion= document.querySelector(".duracion");

  let urlDetalleSerie = `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${acaVaLaAPIKey}`;

  console.log(urlDetalleSerie);

  fetch(urlDetalleSerie)
  .then(function(response) {
      return response.json()
  })
  .then(function(data) {

      console.log(data);

      imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
      titulo.innerText= data.title;
      duracion.innerText = `Duracion: ${data.runtime} minutos`;
      calificacion.innerText = `Popularidad: ${data.popularity}`;
      fechaEstreno.innerText = `Fecha de estreno: ${data.release_date}`;
      sinopsis.innerText= `Sinopsis: ${data.overview}`;
      let generos = data.genres.map((genre) => genre.name);
      genero.innerText = `${generos.join(", ")}`;

  })

  .catch(function(error) {
      console.log(error);
  });


/*recomendaciones*/
  var urlParams = new URLSearchParams(window.location.search);
      var query = urlParams.get("idPelicula");
      var url = `https://api.themoviedb.org/3/movie/${id_movie}/recommendations?api_key=${acaVaLaAPIKey}`
  
      let recomendaciones = document.querySelector("#button");
      recomendaciones.addEventListener("click", function () {
      
      fetch(url)
      .then(function(respond) {
          return respond.json();
      })
  
      .then(function(data) {
          if(data.results.length==0){
            alert("No hay recomendaciones")
          }
  
          var ul = document.querySelector("ul.recomen")
  
          let li = "";
          console.log(data.results);
          for (var i = 0; i < 5; i++) {
          var id = data.results[i].id;
          var title = data.results[i].title;
          var foto = data.results[i].poster_path;

          li += `<li class='li recomendados-item'>
                      <p class='titulos'>${title}</p>
                      <a href='detalle-Pelicula.html?idPelicula=${id}'>
                          <img class="imgPelis" src="https://image.tmdb.org/t/p/w500/${foto}" >
                      </a>
                 </li>`
          }

          ul.innerHTML = li
  
      })
  
      .catch(function(error) {
          return console.log("Error" + error);
      })

      // Que se abran las recomendaciones
    var recom = document.querySelector('#ver-recomendaciones')
    recom.addEventListener ("click", function() {
      // cuando clickeas en el boton se abren las recomendaciones
          var ul = document.querySelector("ul.recomen")
          ul.classList.toggle("display-none")
  })
      })

      
  // Que se abran las recomendaciones
    var recom = document.querySelector('#ver-recomendaciones')
    recom.addEventListener ("click", function() {
      // cuando clickeas en el boton se abren las recomendaciones
          var ul = document.querySelector("ul.recomen")
          ul.classList.toggle("display-none")
  })

});

