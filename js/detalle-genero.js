let acaVaLaAPIKey = '99871c7c00dfc64424c61b446dd23039';

let qs= location.search;
let qsObj = new URLSearchParams(qs);

let id_genero = qsObj.get("id_genero");

let urlDetalleGenero = `https://api.themoviedb.org/3/genre/${id_genero}?api_key=${acaVaLaAPIKey}`;
let urlDiscover = `https://api.themoviedb.org/3/discover/movie?api_key=${acaVaLaAPIKey}&with_genres=${id_genero}`;

// Obtener información del género
fetch(urlDetalleGenero)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if (data.name) {
            document.getElementById('nombreGenero').innerText = `Películas o Series del género ${data.name}`;
        } else {
            document.getElementById('nombreGenero').innerText = 'Género no encontrado';
        }
    })
    .catch(function(error) {
        console.log(error);
    });

// Obtener listado de películas o series del género
fetch(urlDiscover)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let listaPeliculas = document.getElementById('listaPeliculas');
        listaPeliculas.innerHTML = ''; // Limpiar la lista

        if (data.results && data.results.length > 0) {
            data.results.forEach(function(pelicula) {
                let li = document.createElement('li');
                li.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="${pelicula.title}">
                                <p>${pelicula.title}</p>`;

                // Agregar un evento de clic para redirigir al detalle
                li.addEventListener('click', function() {
                    window.location.href = `detalle-serie.html?idSerie=${pelicula.id}`;
                });

                listaPeliculas.appendChild(li);
            });
        } else {
            listaPeliculas.innerHTML = '<p>No se encontraron películas o series para este género.</p>';
        }
    })
    .catch(function(error) {
        console.log(error);
    });

