import {renderCountryCards} from './helpers/render.helper.js';
import {debounce} from './helpers/debounce.helper.js';
import {getFromLocalStorage, setToLocalStorage} from './helpers/localStorage.js';
import {redirectToOtherPage, redirectToViewedCountry} from './helpers/redirect.helper.js'
import {fetchAllCountries, fetchCountryByName} from './services/fetchCountriesData.js';
import {addToFavourites} from './helpers/favourites.helper.js';


const mainBody = document.querySelector('.main-body');
const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const favourites = document.getElementById('favourite');
const logout = document.getElementById('logout');
const footer = document.querySelector('.footer');


let favIcon;
let viewCountry;

function initPage () {
    try {
        let allCountriesData = getFromLocalStorage('allCountries');
        if (allCountriesData && allCountriesData.length !== 0) {
            mainBody.innerHTML = '';
            renderCountryCards(mainBody, 'beforeend', allCountriesData);
        } else {
            fetchAllCountries();
            //wait some time for ferchAllCountries function to write data to local storage
            setTimeout(() => {allCountriesData = getFromLocalStorage('allCountries');
            renderCountryCards(mainBody, 'beforeend', allCountriesData)}, 250);
            location.reload();   
        }
        favIcon = document.querySelectorAll('.fav');
        viewCountry = document.querySelectorAll('.view');
        favIcon.forEach((e) => {e.addEventListener('click', (event) => addToFavourites(event.target.id)) });
        viewCountry.forEach((e) => {e.addEventListener('click', (event)=> redirectToViewedCountry(event.target.id)) });
    } catch (error) {
        console.log(error);
    }
}

function showSearchResults () {
    fetchCountryByName(search.value);
    const searchResults = getFromLocalStorage('searchResults');
    console.log(searchResults);
    mainBody.innerHTML = '';
    if (searchResults && searchResults.length === 0) {
        mainBody.insertAdjacentHTML('beforeend', `<h1>No results for "${search.value}".</h1>`);
        footer.classList.add('footerBottom');
    } else if (search.value.trim() === '') {
        initPage();
    } else {
        renderCountryCards(mainBody, 'beforeend', searchResults);
        if(searchResults.length < 5) {
            footer.classList.add('footerBottom');
        } else {
            footer.classList.remove('footerBottom');
        }
    }
    favIcon = document.querySelectorAll('.fav');
    viewCountry = document.querySelectorAll('.view');
    favIcon.forEach((e) => {e.addEventListener('click', (event) => addToFavourites(event.target.id)) });
    viewCountry.forEach((e) => {e.addEventListener('click', (event)=> redirectToViewedCountry(event.target.id)) });
}



initPage();

search.addEventListener('keyup', debounce(showSearchResults, 200));
searchBtn.addEventListener('click', debounce(showSearchResults, 200));
logout.addEventListener('click', () => redirectToOtherPage('../../index.html'));
favourites.addEventListener('click', () => redirectToOtherPage('../pages/favourites.html'))