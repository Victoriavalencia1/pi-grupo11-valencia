let acaVaLaAPIKey = "99871c7c00dfc64424c61b446dd23039";
window.addEventListener("load",function(){
    //
    
    // Trailer pelicula
    var urlParams = new URLSearchParams(window.location.search);
    var query = urlParams.get("id");
    // buscar en la URL de la pagina lo que queremos agarrar, en este caso el id
    var url = 'https://api.themoviedb.org/3/movie/"+ query + "/videos?api_key=99871c7c00dfc64424c61b446dd2'
    var urlTrailer = ""
    
    fetch(url)
    // trae la api para buscar informacion
      .then(function(respond) {
        return respond.json();
        // devuelve un asincrono (solicitud que empieza pero no sabemos cuando termina) en formato JSON indispensable
      })
    
      .then(function(data) {
        console.log(data);
        console.log(data.status_code);
          var trailer = data.results[0].key
          urlTrailer = '<iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/' + trailer + '"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    
          // Detalle pelicula
          var url = "https://api.themoviedb.org/3/movie/" + query + "?api_key=99871c7c00dfc64424c61b446dd2&language=en-US"
          // va aca adentro asi el trailer sabe de que pelicula tiene que ser y no se rompe cuando carga
          fetch(url)
            .then(function(respond) {
              return respond.json();
            })
    
            .then(function(detalle){
              console.log(detalle)
    
              var ul = document.querySelector("ul.detalles")
              var urlposter = "https://image.tmdb.org/t/p/original"
              var arrayGeneros = detalle.genres
    
              var id = detalle.id
              var titulo = detalle.title
              var idioma = detalle.original_language
              var sinopsis = detalle.overview
              var estreno = detalle.release_date
              var foto = detalle.poster_path
              var puntuacion = detalle.vote_average
    
              li = "<li>"
              // = crea el li =+ agrega elementos
              li += "<h1 class='peli'>"+ titulo + "</h1>"
              li += "<img src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
              li += "<button class='estrellita' onclick='agregarFavoritos("+id+")'> &#9733 </button>"
              li += "<p class='sinop'> <span class='underline'>Sinopsis</span>: "+ sinopsis + "</p>"
              li += "<p> <span class='underline'>Géneros</span>: "
                  for (var i = 0; i < arrayGeneros.length; i++) {
                    var id = arrayGeneros[i].id
                    var genero = arrayGeneros[i].name
                    li += genero
                  }
              li += "</p>"
              li += "<p> <span class='underline'>Idioma original:</span> "+ idioma + "</p>"
              li += "<p> <span class='underline'>Fecha de estreno:</span> "+ estreno + "</p>"
              li += "<p> <span class='underline'>Puntuación:</span> "+ puntuacion + "</p>"
              li +="<h2 class='trailer'> <span class='underline trailer'>Tráiler:</span><br>"+ urlTrailer + "</br> </h2>"
              li += "</li>"
    
              ul.innerHTML += li
              // agrega todos los elementos en el HTML
    
    
              // que desaparezca la palabra trailer si no hay trailer
              var iframe = document.querySelector("iframe.iframe")
                console.log(iframe);
                console.log(typeof iframe);
    
                if (iframe === null) {
                  document.querySelector("h2.trailer").innerText = ""
                }
    
            })
            .catch(function(error) {
              return console.log("Error" + error);
              // agarra errores en caso de que los haya
            })
    
      })
      .catch(function(error) {
        console.log(error);
        return console.log("Error" + error);
      })
    
    
    // Recomendaciones
    var urlParams = new URLSearchParams(window.location.search);
    var query = urlParams.get("id");
    var url = "https://api.themoviedb.org/3/movie/"+ query + "/recommendations?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US&page=1"
    
    fetch(url)
      .then(function(respond) {
        return respond.json();
      })
    
      .then(function(data) {
        console.log(data);
    
        var ul = document.querySelector("ul.recomen")
    
        for (var i = 0; i < data.results.length; i++) {
          var id = data.results[i].id;
          var title = data.results[i].title;
          var foto = data.results[i].poster_path;
    
          li = "<li class='li'>"
            li += "<p class='titulos'>"+ title + "</p>"
            li += "<a href='peliculas.html?id=" + id + "'>"
            li += "<img class=imgPelis src=https://image.tmdb.org/t/p/w500/"+ foto + ">"
            li += "</a>"
          li += "</li>"
    
          ul.innerHTML += li
    
        }
    
      })
    
      .catch(function(error) {
        return console.log("Error" + error);
      })
    
    // Que se abran las recomendaciones
      var recom = document.querySelector ('button.recomendaciones')
      recom.addEventListener ("click", function() {
        // cuando clickeas en el boton se abren las recomendaciones
      var ul = document.querySelector("ul.recomen")
      ul.classList.toggle("display-none")
    })
    
    
    //Media query event handler
      if(matchMedia){
          const mq = window.matchMedia( "(max-width:768px)" );//sets the width you want
          mq.addListener(WidthChange);
          WidthChange(mq)
      }
    
      function WidthChange(mq){
          if(mq.matches){
              //if window width is less than or equal to 768px;
              $("#navbar_toggle").removeClass("dis-none"); //makes toggler visible
              $("#navbar_collapse").addClass("dis-none");//makes the menu not visible initially
              //so you can only see the menu items when you click the toggler
    
              $("#navbar_toggle").on('click', function(e){
                  $("#navbar_collapse").slideToggle();
                  $("#navbar_collapse").css({"display": "block"});
              })
          }else{
              //for larger screens
              $("#navbar_toggle").addClass('dis-none');
              $("#navbar_collapse").removeClass('dis-none');
          }
      }
    
    })

