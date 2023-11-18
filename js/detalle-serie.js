document.addEventListener('DOMContentLoaded', function () {
    let acaVaLaAPIKey = "99871c7c00dfc64424c61b446dd23039";
    
    let qs= location.search;
    let qsObj = new URLSearchParams(qs);
    let id_serie = qsObj.get("idSerie");
    /*console.log(id_serie);*/

    let titulo= document.querySelector(".titulo3");
    let imagen= document.querySelector(".fotodetail");
    let calificacion= document.querySelector(".valoracion");
    let fechaEstreno= document.querySelector(".fecha");
    let sinopsis= document.querySelector(".textodesc");
    let genero= document.querySelector(".botongenero");

    let urlDetalleSerie = `https://api.themoviedb.org/3/tv/${id_serie}}?api_key=${acaVaLaAPIKey}`;
    let urlTrailerSerie= `https://api.themoviedb.org/3/tv/${id_serie}}/videos?api_key=${acaVaLaAPIKey}`;
    let urlReviews = `https://api.themoviedb.org/3/tv/${id_serie}/reviews?api_key=${acaVaLaAPIKey}`;
    


    console.log(urlDetalleSerie);
    console.log(urlTrailerSerie);
    console.log(urlReviews);
    

    fetch(urlDetalleSerie)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {

        console.log(data);

        imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
        titulo.innerText= data.name;
        calificacion.innerText = `Popularidad: ${data.vote_average}`;
        fechaEstreno.innerText = `Fecha de estreno: ${data.first_air_date}`;
        sinopsis.innerText= `Sinopsis: ${data.overview}`;
        let generos = data.genres;
            let generosSerie= "";
            let generoContainer= document.querySelector(".botongenero");

        for (let i =0;  i< generos.length; i++) {
            generosSerie += `<a class="botongenero" href="./detalle-genero.html?id_genero=${generos[i].id}&name=${generos[i].name}"> ${generos[i].name}</a>`
        };

        generoContainer.innerHTML += generosSerie;

    })

    .catch(function(error) {
        console.log(error);
        
    });

    fetch(urlTrailerSerie)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {

        console.log(data)

    const videoContainer = document.querySelector('.video-container');

    if (data.results && data.results.length > 0 && data.results[0].key != null){
      for (let i = 0; i < 1; i++) {
        videoContainer.innerHTML+= ` <div> 
                                        <p> Trailer: </p>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${data.results[i].key}?si=Nos9i3Oyq0ndkgNa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>`
      }
    } else {
    videoContainer.innerHTML += '<p class="mensaje_trailer"> <i class="fa-solid fa-triangle-exclamation"></i> Trailer: No hay trailer disponible para esta serie. </p>';
    }
  })
  
    .catch(function(error) {
    console.log(error);
    });


/*recomendaciones*/
 
        let urlReview = `https://api.themoviedb.org/3/tv/${id_serie}/recommendations?api_key=${acaVaLaAPIKey}`
    
        let recomendaciones = document.querySelector("#button");
        recomendaciones.addEventListener("click", function () {
        
        fetch(urlReview)
        .then(function(respond) {
            return respond.json();
        })
    
        .then(function(data) {
            if(data.results.length==0){
                alert("No hay recomendaciones")
              }
    
            let ul = document.querySelector("ul.recomen")
    
            let li = "";
            for (var i = 0; i < 5; i++) {
            let id = data.results[i].id;
            let title = data.results[i].name;
            let foto = data.results[i].poster_path;

            li += `<li class='li-recomendados-item'>
                        <p class='titulos'>${title}</p>
                        <a href='detalle-serie.html?idSerie=${id}'>
                            <img class="imgPelis" src="https://image.tmdb.org/t/p/w500/${foto}" >
                        </a>
                   </li>`
            }

            ul.innerHTML = li
    
        })
    
        .catch(function(error) {
            return console.log("Error" + error);
        })
        })


    /*reviews*/

    const botonReviews = document.getElementById('buttonReviews');
    const ulReviews = document.querySelector('.reviews');

    botonReviews.addEventListener('click', function () {
        fetch(urlReviews)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.results.length === 0) {
                    alert("No hay reseñas disponibles");
                }

                let li = "";
                for (var i = 0; i < data.results.length  && i < 3; i++) {
                    let autor = data.results[i].author;
                    let contenido = data.results[i].content;

                    li += `<li class='li-review-item'>
                            <p class='autor'>Autor: ${autor}</p>
                            <p class='contenido'>Review: ${contenido}</p>
                          </li>`;
                }

                ulReviews.innerHTML = li;
            })
            .catch(function (error) {
                console.log("Error: " + error);
            })
    });
    })
