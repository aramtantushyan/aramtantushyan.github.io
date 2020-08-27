import {getCountryData} from './data.helper.js';
import {getFromLocalStorage, setToLocalStorage} from './localStorage.js';

function addToFavourites (country) {
    const favCountryData = getCountryData(country);
    const favourites = getFromLocalStorage('favourites');
    if (favourites) {
        for (let elem of favourites) {
            if(elem.name === country) {
                return;
            }
        }
        const newFavourites = [...favourites, favCountryData];
        setToLocalStorage('favourites', newFavourites);
    } else {
        setToLocalStorage('favourites', [favCountryData]);
    }
}

export {addToFavourites};