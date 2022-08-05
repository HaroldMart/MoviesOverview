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

        const {title, vote_average, overview, vote_count, original_language ,release_date} = movies;
        const MOVIES_ELEMENT = document.createElement('div');
        MOVIES_ELEMENT.classList.add('movie');

        MOVIES_ELEMENT.innerHTML = `
            <div class="info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>  

            <div class="overview">
                <h3>Overview</h3>
                ${overview}
                <hr>
                <div>
                    <b>Vote Count: </b> ${vote_count} <br><br>
                    <b>Original Language: </b> ${language(original_language)} <br>
                    <b>Release Date:</b> ${release_date}
                </div>
            </div>
        `
        MAIN.appendChild(MOVIES_ELEMENT);     
    });
}

function language(language) {
    if(original_language = "en") {
        return "English"
    }
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

