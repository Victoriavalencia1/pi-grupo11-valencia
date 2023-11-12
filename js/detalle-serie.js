let qs= location.search;
let qsObj = new URLSearchParams(qs);
let idPersonaje = qsObj.get("idPersonaje");

let url = `https://api.themoviedb.org/3/movie/popular?api_key=99871c7c00dfc64424c61b446dd23039/${idPersonaje}`
<script>
    let, seriesDetails ={
        coverImage: "./img/gossip.jpeg",
        title: "Gossip Girl",
        rating: "4.5",
        releaseDate: "19/09/2007",
        duration: "6 seasons",
        synopsis: "\"Gossip Girl\" is a drama and romance series...",
        genres: ["Teen Drama", "Romantic Cinema"],
        recommendations: [
            { title: "Recommendation 1", poster: "./img/recommendation1.jpg" },
            { title: "Recommendation 2", poster: "./img/recommendation2.jpg" },
         
        ]
    };

    document.getElementById("img-logo").src = seriesDetails.coverImage;
    document.querySelector(".titulo3").innerText = seriesDetails.title;
    // Update other elements for series details...

    document.getElementById("ver-recomendaciones").addEventListener("click", () => {
        document.getElementById("recomendaciones-section").classList.toggle("hidden");

        const recommendationsContainer = document.getElementById("recomendaciones-container");
        recommendationsContainer.innerHTML = "";

        seriesDetails.recommendations.forEach((recommendation) => {
            const recommendationElement = document.createElement("div");
            recommendationElement.innerHTML = `<img src="${recommendation.poster}" alt="${recommendation.title}">`;
            
            recommendationElement.addEventListener("click", () => {
                console.log(`Redirect to detail page of ${recommendation.title}`);
            });

            recommendationsContainer.appendChild(recommendationElement);
        });
    });




