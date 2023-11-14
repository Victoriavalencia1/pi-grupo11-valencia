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
    let urlTrailerSerie = `https://api.themoviedb.org/3/tv/${id_serie}/videos?api_key=${acaVaLaAPIKey}`;

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
        let generos = data.genres;
        let generosSerie= "";
        let generoContainer= document.querySelector(".botongenero");

        for (let i =0;  i< generos.length; i++) {
            generosSerie += `<a class="botongenero" href="./detalle-genero.html?id=${generos[i].id}"> ${generos[i].name}</a>`
        };

        generoContainer.innerHTML += generosSerie;

    })

    .catch(function(error) {
        console.log(error);
    });


/*recomendaciones*/
 
        let url = `https://api.themoviedb.org/3/tv/${id_serie}/recommendations?api_key=${acaVaLaAPIKey}`
    
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
    
            let ul = document.querySelector("ul.recomen")
    
            let li = "";
            for (var i = 0; i < 5; i++) {
            let id = data.results[i].id;
            let title = data.results[i].name;
            let foto = data.results[i].poster_path;

            li += `<li class='li recomendados-item'>
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

});
