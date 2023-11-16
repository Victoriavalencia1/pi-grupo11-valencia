let acaVaLaAPIKey = '99871c7c00dfc64424c61b446dd23039';

let qs= location.search;
let qsObj = new URLSearchParams(qs);

let id_genero = qsObj.get("id_genero");

let urlDiscover = `https://api.themoviedb.org/3/discover/movie?api_key=${acaVaLaAPIKey}`;


// Obtener nombre del género
fetch(`https://api.themoviedb.org/3/genre/${id_genero}?api_key=${acaVaLaAPIKey}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let nombreGeneroElement = document.getElementById('nombreGenero');
    if (data.name) {
      nombreGeneroElement.innerText = `Películas o Series del género ${data.name}`;
    } else {
      nombreGeneroElement.innerText = 'Género no encontrado';
    }
  })
  .catch(function (error) {
    console.log(error);
  });

// Obtener listado de películas o series del género
fetch(urlDiscover)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let listaPeliculas = document.getElementById('listaPeliculas');
    listaPeliculas.innerHTML = '';

    if (data.results && data.results.length > 0) {
      data.results.forEach(function (pelicula) {
        let li = document.createElement('li');
        li.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="${pelicula.title}">
                                <p>${pelicula.title}</p>`;

        li.addEventListener('click', function () {
          window.location.href = `detalle-serie.html?idSerie=${pelicula.id}`;
        });

        listaPeliculas.appendChild(li);
      });
    } else {
      listaPeliculas.innerHTML = '<p>No se encontraron películas o series para este género.</p>';
    }
  })
  .catch(function (error) {
    console.log(error);
  });