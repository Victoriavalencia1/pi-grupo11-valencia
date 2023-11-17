let acaVaLaAPIKey = '99871c7c00dfc64424c61b446dd23039';




/*Boton favoritos*/
    
const botonFavoritos = document.getElementById('buscador');
const params = new URLSearchParams(window.location.search);
const idPelicula = params.get('idPelicula');

function estaEnFavoritos(id) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    return favoritos.includes(id);
}

function gestionarFavoritos(id) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const indice = favoritos.indexOf(id);

    if (indice === -1) {
        favoritos.push(id);
    } else {
        favoritos.splice(indice, 1);
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

if (estaEnFavoritos(idPelicula)) {
    botonFavoritos.textContent = 'Quitar de favoritos';
}

botonFavoritos.addEventListener('click', function () {
    gestionarFavoritos(idPelicula);

    if (estaEnFavoritos(idPelicula)) {
        botonFavoritos.textContent = 'Quitar de favoritos';
    } else {
        botonFavoritos.textContent = 'Añadir a favoritos';
    }
});