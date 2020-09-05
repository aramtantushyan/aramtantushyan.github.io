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

async function request (countryName, localStorageKey) {
    try {
        const response = await doGet(`https://restcountries.eu/rest/v2/${countryName}?fields=name;capital;flag;languages;currencies;region;population;area;borders`);
        const arrangedData = response.map((element) => createDataObj(element)); 
        setToLocalStorage(localStorageKey, arrangedData);
    } catch (error) {
        setToLocalStorage(localStorage, []);
        console.log(error);
    }
}

function fetchAllCountries () {
    const searchFor = 'all';
    const localStorageKey = 'allCountries';
    request(searchFor, localStorageKey);
    location.reload();
}

function fetchCountryByName (name) {
    const searchFor = `name/${name}`;
    const localStorageKey = 'searchResults';
    request(searchFor, localStorageKey);
}

export {fetchAllCountries};
export {fetchCountryByName};
