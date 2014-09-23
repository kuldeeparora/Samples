$(document).ready(function () {
    $('#passwordReset').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            password: {
                validators: {
                    notEmpty: {
                        message: 'Please enter a valid password'
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    identical: {
                        field: 'confirmPassword',
                        message: 'The password and its confirm are not the same'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'The confirm password is required and can\'t be empty'
                    },
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm are not the same'
                    }
                }
            },
            question: {
                validators: {
                    notEmpty: {
                        message: 'Please select a Question'
                    }
                }
            },
            answer: {
                validators: {
                    notEmpty: {
                        message: 'Enter answer to memorable question'
                    }
                }
            }
        }
    })
        .on('success.form.bv', function (e) {

            // Prevent form submission
            e.preventDefault();

           console.log("tested");
        });
});