import {setViewedCountryData} from './data.helper.js';

function redirectToOtherPage (url) {
    window.location.href = url;
}

function redirectToViewedCountry (country) {
    setViewedCountryData(country);
    redirectToOtherPage('/Homework 19/src/pages/viewCountry.html');
}

export {redirectToOtherPage};
export {redirectToViewedCountry};