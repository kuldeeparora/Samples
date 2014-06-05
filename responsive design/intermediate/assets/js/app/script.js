function signupSubmit() {
    "use strict";

    var signup = document.getElementById('uswitchSignup');
    var regEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    var validEmail = regEmail.test(signup.value);

    var applyFieldStyle = function (isError) {
        signup.style.background = isError ? '#cccccc' : '#ffffff';
    };

    if (signup.value.length === 0) {
        applyFieldStyle(true);
        alert('Email Address field should not be empty');
        return false;
    }
    if (!validEmail) {
        applyFieldStyle(true);
        alert('Please type Valid Email Address');
        return false;
    }

    applyFieldStyle(false);
    alert('Signup Successfully');
    return true;

}

function show(target) {
//    document.getElementById(target).style.display = 'block';
//    trigger.style.display = "none"
    var el = document.getElementById(target);

    el.style.display = (el.style.display !== 'table' ? 'table' : 'none');
}

