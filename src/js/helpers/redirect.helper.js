import {setViewedCountryData} from './data.helper.js';

function redirectToOtherPage (url) {
    window.location.href = url;
}

function redirectToViewedCountry (country, url) {
    setViewedCountryData(country);
    redirectToOtherPage(url);
}

export {redirectToOtherPage};
export {redirectToViewedCountry};