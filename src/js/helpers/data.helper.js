import {setToLocalStorage} from './localStorage.js';
import {getFromLocalStorage} from './localStorage.js'

function setViewedCountryData (country) {
    const viewedCountry = getCountryData(country);
    setToLocalStorage('viewedCountry', viewedCountry);
}

function getCountryData (country) {
    const allCountries = getFromLocalStorage('allCountries');
    for (let elem of allCountries) {
        if(elem.name === country) {
            return elem;
        }
    }
}

export {getCountryData};
export {setViewedCountryData};