import {getFromLocalStorage} from './helpers/localStorage.js';
import {addToFavourites} from './helpers/favourites.helper.js';
import {redirectToOtherPage} from './helpers/redirect.helper.js';

const countryFlag = document.querySelector('.country-flag');
const countryName = document.querySelector('.country-name');
const countryCapital = document.querySelector('.country-capital');
const countryRegion = document.querySelector('.country-region');
const countryArea = document.querySelector('.country-area');
const countryBorders = document.querySelector('.country-borders');
const countryLanguage = document.querySelector('.country-language');
const countryPopulation = document.querySelector('.country-population');
const countryCurrency = document.querySelector('.country-currency');
const favourites = document.getElementById('favourite');
const logout = document.getElementById('logout');
const addToFav = document.querySelector('.addFav');

function renderCountryCardBig () {
    const country = getFromLocalStorage('viewedCountry');
    addToFav.id = country.name;
    countryFlag.src = country.flag;
    countryName.textContent = country.name;
    countryCapital.textContent = `Capital: ${country.capital}`;
    countryRegion.textContent = `Region: ${country.region}`;
    countryArea.outerHTML = `<p class="country-area">Area: ${country.area} km<sup>2</sup></p>`;
    countryBorders.textContent  = `Borders: ${String(country.borders)}`;
    countryLanguage.textContent = `Language: ${country.language}`;
    countryPopulation.textContent = `Population: ${country.population}`;
    countryCurrency.textContent = `Currency: ${country.currency}`;
}

renderCountryCardBig();

logout.addEventListener('click', () => redirectToOtherPage('../../index.html'));
favourites.addEventListener('click', () => redirectToOtherPage('../pages/favourites.html'))
addToFav.addEventListener('click', (event) => addToFavourites(event.target.id));