let qs= location.search;
let qsObj = new URLSearchParams(qs);
let idPersonaje = qsObj.get("idPersonaje");

let url = `https://api.themoviedb.org/3/movie/popular?api_key=99871c7c00dfc64424c61b446dd23039/${idPersonaje}`



