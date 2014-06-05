
//Email Validation
var signupSubmit = document.getElementById('signupSubmit');


// for IE compatability
if (!signupSubmit.addEventListener) {
    signupSubmit.attachEvent("onclick", signup);
}
else {
    signupSubmit.addEventListener("click", signup, false);
}

function signup () {
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

};


//Responsive Menu Nav Button
var uswitchNavButton = document.getElementById('uswitchNavButton');

// for IE compatability
if (!uswitchNavButton.addEventListener) {
    uswitchNavButton.attachEvent("onclick", toggleNav);
}
else {
    uswitchNavButton.addEventListener("click", toggleNav, false);
}


function toggleNav () {
    "use strict";

    var el = document.getElementById('mainUswitchNav');
    el.className = (el.className !== 'hideNav' ? 'hideNav' : '');
};
