let acaVaLaAPIKey = '99871c7c00dfc64424c61b446dd23039';

let qs= location.search;
let qsObj = new URLSearchParams(qs);
let id_movie = qsObj.get("id_genero");



const discoverEndpoint = 'https://api.themoviedb.org/3/discover/movie';
