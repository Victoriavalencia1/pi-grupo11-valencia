const cargarPeliculas = () {
    fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error);
});
}

