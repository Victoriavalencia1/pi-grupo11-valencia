document.addEventListener('DOMContentLoaded', function () {
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
        sinopsis.innerText= `Sinopsis: ${data.overview}`;
        let generos = data.genres.map((genre) => genre.name);
        genero.innerText = `${generos.join(", ")}`;

    })

    .catch(function(error) {
        console.log(error);
    });


/*recomendaciones*/
    var urlParams = new URLSearchParams(window.location.search);
        var query = urlParams.get("idSerie");
        var url = `https://api.themoviedb.org/3/tv/${id_serie}/recommendations?api_key=${acaVaLaAPIKey}`
    
        let recomendaciones = document.querySelector("#button");
        recomendaciones.addEventListener("click", function () {
        
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
                li += "<a href='detalle-Pelicula.html?idSerie=" + id + "'>"
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
