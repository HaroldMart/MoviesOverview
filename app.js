const API_KEY = 'api_key=1c9d520e7a99665a12d88d6ab4690e45';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URl = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY;

const MAIN = document.getElementById('main');
const FORM = document.getElementById('form');
const SEARCH = document.getElementById('search');

getMovies(API_URl);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results)
    });
}

function showMovies(data) {
    MAIN.innerHTML = '';
    
    data.forEach(movies => {

        const {title, overview} = movies;
        const MOVIES_ELEMENT = document.createElement('div');
        MOVIES_ELEMENT.classList.add('movie');

        MOVIES_ELEMENT.innerHTML = `
        <img src="${IMAGE_URL+poster_path}" alt="${title}">

            <div class="info">
                <h3>${title}</h3>
            </div>  

            <div class="overview">
                <h3>Overview</h3>
                ${overview}
                <hr>
            
            </div>
        `
        MAIN.appendChild(MOVIES_ELEMENT);     
    });
}


function getColor(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
};

