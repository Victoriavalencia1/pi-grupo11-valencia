
const apiKey = '99871c7c00dfc64424c61b446dd23039';
const discoverEndpoint = 'https://api.themoviedb.org/3/discover/movie';

function discoverMovies() {
    const genreId = $('#genre').val();

    $.ajax({
        url: discoverEndpoint,
        method: 'GET',
        data: {
            api_key: '99871c7c00dfc64424c61b446dd23039',
            with_genres: genreId
        },
        success: function (response) {
            displayMovies(response);
        },
        error: function (error) {
            console.error(error);
            $('#moviesList').html('Error al cargar las películas/series.');
        }
    });
}

function displayMovies(data) {
    const accion = $('#genre option:selected').text();
    $('#accion').text(`Género: ${accion}`);
    const aventura  = $('#genre option:selected').text();
    $('#aventura').text(`Género: ${aventura}`);
    const anime = $('#genre option:selected').text();
    $('#anime').text(`Género: ${anime}`);
    const argentinas = $('#genre option:selected').text();
    $('#argentinas').text(`Género: ${argentinas}`);
    const ninos_y_familia = $('#genre option:selected').text();
    $('#ninos_y_familia').text(`Género: ${ninos_y_familia}`);
    const comedias = $('#genre option:selected').text();
    $('#comedias').text(`Género: ${comedias}`);
    const documentales = $('#genre option:selected').text();
    $('#documentales').text(`Género: ${documentales}`);
    const dramas = $('#genre option:selected').text();
    $('#dramas').text(`Género: ${dramas}`);
    const fantasia = $('#genre option:selected').text();
    $('#fantasia').text(`Género: ${fantasia}`);
    const hollywood = $('#genre option:selected').text();
    $('#hollywood').text(`Género: ${hollywood}`);
    const horror = $('#genre option:selected').text();
    $('#horror').text(`Género: ${horror}`);
    const internacionales = $('#genre option:selected').text();
    $('#internacionales').text(`Género: ${internacionales}`);
    const policiales = $('#genre option:selected').text();
    $('#policiales').text(`Género: ${policiales}`);
    const romance = $('#genre option:selected').text();
    $('#romance').text(`Género: ${romance}`);
    const ciencia_ficcion = $('#genre option:selected').text();
    $('#ciencia_ficcion').text(`Género: ${ciencia_ficcion}`);















    const moviesList = $('#moviesList');
    moviesList.empty();

    if (data.results.length === 0) {
        moviesList.html('No se encontraron películas/series para este género.');
        return;
    }

    data.results.forEach(movie => {
        const movieElement = $('<div></div>');
        movieElement.append(`<img src="https://image.tmdb.org/t/p/w185/${movie.poster_path}" alt="${movie.title}">
                           <p>${movie.title}</p>`);

        movieElement.click(() => {
            window.location.href = `detalle-genero.html?id=${movie.id}`; 
        });

        moviesList.append(movieElement);
    });
}