let api_key = '5250bf75f45f30f38d66823aecdea1c4'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
//let urlBaseEs = 'https://api.themoviedb.org/3/movie/popular?language=es-SP' traducida al español
let urlImg = 'https://image.tmdb.org/t/p/w200'

let resultadoDiv = document.getElementById('results')

document.getElementById('searchButton').addEventListener('click', (buscarPeliculas))

function buscarPeliculas (){
    resultadoDiv.innerHTML = 'cargando...'
    let nombrePelicula = document.getElementById('searchInput').value
    fetch(`${urlBase}?query=${nombrePelicula}&api_key=${api_key}`)

    .then(respuesta => respuesta.json())
    .then(respuesta => mostrarPelicula(respuesta.results))
}

function mostrarPelicula(movies){
    
    
    resultadoDiv.innerHTML = ''
    if(movies.length === 0){  
       resultadoDiv.innerHTML = '<p>No se encontro la pelicula</p>'
       return
    }
    movies.forEach(movie => {

            let movieDiv = document.createElement('div')
            movieDiv.classList.add('movie')

            let tituloDiv = document.createElement('h2')
             tituloDiv.textContent = movie.title
             
            let descDiv = document.createElement('p')
            descDiv.textContent = movie.overview

            let imgDiv = document.createElement('img')
            imgDiv.src = urlImg + movie.poster_path

             resultadoDiv.appendChild(movieDiv)
             movieDiv.appendChild(tituloDiv)
             movieDiv.appendChild(descDiv)
             movieDiv.appendChild(imgDiv)
    });
}