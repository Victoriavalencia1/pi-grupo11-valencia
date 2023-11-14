let acaVaLaAPIKey = '99871c7c00dfc64424c61b446dd23039';

let qs= location.search;
let qsObj = new URLSearchParams(qs);
let id_movie = qsObj.get("id_genero");




fetch(urlDetalleSerie)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {

        console.log(data);

    })
