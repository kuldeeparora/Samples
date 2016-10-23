//Email Validation
var signupForm = document.getElementById('signupForm');
signupForm.onsubmit = function () {
    "use strict";

    var signup = document.getElementById('uswitchSignup');
    var regEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    var validEmail = regEmail.test(signup.value);

    var applyFieldStyle = function (isError) {
        signup.focus();
        signup.style.background = isError ? '#cccccc' : '#ffffff';
        return;
    };

    if (signup.value.length === 0) {
        alert('Email Address field should not be empty');
        applyFieldStyle(true);
        return false;
    }
    if (!validEmail) {
        alert('Please type Valid Email Address');
        applyFieldStyle(true);
        return false;
    }

    alert('Signup Successfully');
    applyFieldStyle(false);
    return true;

};


//Responsive Menu Nav Button
var uswitchNavButton = document.getElementById('uswitchNavButton');
uswitchNavButton.onclick = function () {
    "use strict";

    var el = document.getElementById('mainUswitchNav');
    el.className = (el.className !== 'hideNav' ? 'hideNav' : '');
};


//Toggle Energy Usage
var hideEnergyUsage = document.getElementById('hideDetails');
hideEnergyUsage.onclick = function () {
    "use strict";

    var el =  document.querySelectorAll('.' + 'energy-usage');
    var elLength = el.length;
    hideEnergyUsage.innerHTML = (hideEnergyUsage.innerHTML !== 'Show details' ? 'Show details' : 'Hide details');

    for (var i = 0; i < elLength; i++) {
        el[i].style.display = (el[i].style.display !== 'none' ? 'none' : '');
    }
};

// Coordinates validations
function validateGeoCode(geoCode) {
    if (typeof geoCode !== 'string') {
        return false;
    }

    var tokens = geoCode.split(",");
    if (tokens.length < 2) {
        return false;
    }

    var lat = tokens[0];
    var lng = tokens[1];
    if (isNaN(lat) || isNaN(lng)) {
        return false;
    }

    lng = parseFloat(lng);
    lat = parseFloat(lat);

    if (Math.abs(lat) >= 0 && Math.abs(lat) <= 90 && Math.abs(lng) >= 0 && Math.abs(lng) <= 180) {
        return true;
    }

    return false;
}