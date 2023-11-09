let endpoint= "https://api.themoviedb.org/3/movie/popular?api_key=99871c7c00dfc64424c61b446dd23039";

fetch(endpoint)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data.results);
})
.catch(function(error) {
    console.log(error);
});


