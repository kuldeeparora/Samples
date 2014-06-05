
//Email Validation
var signupSubmit = document.getElementById('signupSubmit');

signupSubmit.addEventListener('click', function () {
    "use strict";

    var signup = document.getElementById('uswitchSignup');
    var regEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    var validEmail = regEmail.test(signup.value);

    var applyFieldStyle = function (isError) {
        signup.style.background = isError ? '#cccccc' : '#ffffff';
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

}, false);


//Responsive Menu Nav Button
var uswitchNavButton = document.getElementById('uswitchNavButton');

uswitchNavButton.addEventListener('click', function () {
    "use strict";

    var el = document.getElementById('mainUswitchNav');
    el.className = (el.className !== 'hideNav' ? 'hideNav' : '');
}, false);
