import {renderCountryCards} from './helpers/render.helper.js';
import {getFromLocalStorage, setToLocalStorage} from './helpers/localStorage.js';
import {redirectToOtherPage} from './helpers/redirect.helper.js'
import {getCountryData} from './helpers/data.helper.js';
import {redirectToViewedCountry} from './helpers/redirect.helper.js';

const mainBody = document.querySelector('.main-body');
const logout = document.getElementById('logout');
const footer = document.querySelector('.footer');

let viewCountry;

function initPage () {
    try {
        let allFavCountries = getFromLocalStorage('favourites');
        mainBody.innerHTML = '';
        if (allFavCountries) {
            renderCountryCards(mainBody, 'beforeend', allFavCountries);
            if (allFavCountries.length < 6) {
                footer.classList.add('footerBottom');
            } else {
                footer.classList.remove('footerBottom');
            }
        } else {
            mainBody.insertAdjacentHTML('beforeend', '<h1>There are no favourite countries yet</h1>');
            footer.classList.add('footerBottom');
        }
        viewCountry = document.querySelectorAll('.view');
        viewCountry.forEach((e) => {e.addEventListener('click', (event) => redirectToViewedCountry(event.target.id, '../pages/viewCountry.html')) });
    } catch (error) {
        console.log(error);
    }
}

initPage();

logout.addEventListener('click', () => redirectToOtherPage('../../index.html'));
