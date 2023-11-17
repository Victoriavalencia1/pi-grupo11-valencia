let acaVaLaAPIKey = "99871c7c00dfc64424c61b446dd23039";

let urlGeneroPeli= `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`;
let urlGeneroSerie= `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`;


let contenedorGenerosPeli = document.querySelector("#contenedorPeliGenero");
let contenedorGenerosSerie= document.querySelector("#contenedorSerieGenero");
fetch(urlGeneroPeli)
.then(function(response) {
    return response.json()
})
.then(function(data) {

    let miData = data.genres;

    let contenido= "";

    for (let i = 0; i < miData.length; i++) {

        console.log(miData[i]);
        contenido += `<li class="cajagenero"> 
                        <a href="./detalle-genero.html?id_genero=${miData[i].id}">${miData[i].name}</a> 
                    </li>`
    }
       
    contenedorGenerosPeli.innerHTML = contenido;

})
.catch(function(error) {
    console.log(error);
});
/* /segundo fetch*/

fetch(urlGeneroSerie)
.then(function(response) {
    return response.json()
})
.then(function(data) {

    let miData = data.genres;

    let contenido= "";

    for (let i = 0; i < miData.length; i++) {

        console.log(miData[i]);
        contenido += `<li class="cajagenero"> 
                        <a href="./detalle-Genero.html">${miData[i].name}</a> 
                    </li>`
    }
       
    contenedorGenerosSerie.innerHTML= contenido;

})
.catch(function(error) {
    console.log(error);
});
