import {setViewedCountryData} from './data.helper.js';

function redirectToOtherPage (url) {
    window.location.href = url;
}

function redirectToViewedCountry (country) {
    setViewedCountryData(country);
    redirectToOtherPage('Homwork 19/srs/pages/viewCountry.html');
}

export {redirectToOtherPage};
export {redirectToViewedCountry};