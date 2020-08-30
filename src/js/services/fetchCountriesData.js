import {doGet} from '../helpers/request.helper.js';
import {setToLocalStorage} from '../helpers/localStorage.js';

function createDataObj (el) {
    const obj = {};
    obj.name = el.name;
    obj.capital = el.capital;
    obj.flag = el.flag;
    obj.language = el.languages[0].name;
    obj.currency = el.currencies[0].code;
    obj.region = el.region;
    obj.population = el.population;
    obj.area = el.area;
    obj.borders = el.borders;
    return obj;
}

function request (countryName, localStorageKey) {
    doGet(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.map((element) => createDataObj(element)))
    .then(res => setToLocalStorage(localStorageKey, res))
    .catch (error => {setToLocalStorage(localStorageKey, []), console.log(error)});
}

function fetchAllCountries () {
    const searchFor = 'all';
    const localStorageKey = 'allCountries';
    request(searchFor, localStorageKey);
}

function fetchCountryByName (name) {
    const searchFor = `name/${name}`;
    const localStorageKey = 'searchResults';
    request(searchFor, localStorageKey);
}

export {fetchAllCountries};
export {fetchCountryByName};