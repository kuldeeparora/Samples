$(document).ready(function () {
    $('#validateForm')
        .bootstrapValidator({
        message: 'This value is not valid',
        excluded: ':disabled',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: 'Please enter a valid user ID',
                validators: {
                    notEmpty: {
                        message: 'The username is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            oldPassword: {
                validators: {
                    notEmpty: {
                        message: 'Please enter a valid password'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Please enter a valid password'
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: 'The username must be more than 6 and less than 12 characters long'
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
                        message: 'Passwords do not match'
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
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
            'languages[]': {
                validators: {
                    choice: {
                        min: 1,
                        max: 2,
                        message: 'Please choose 1 - 2 languages you can speak'
                    }
                }
            },
            country: {
                validators: {
                    notEmpty: {
                        message: 'Please select your country.'
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
    $('#createNewDoc') .bootstrapValidator({
        message: 'This value is not valid',
        excluded: ':disabled',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            county: {
                validators: {
                    notEmpty: {
                        message: 'Please select your county.'
                    }
                }
            },
            country: {
                validators: {
                    notEmpty: {
                        message: 'Please select your country.'
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

//data-bv-notempty="true"
//data-bv-notempty-message="The first name is required and cannot be empty"

//data-bv-notempty="true"
//data-bv-notempty-message="The last name is required and cannot be empty"


//data-bv-integer-message="The userid is not valid"
//data-bv-notempty="true"
//data-bv-notempty-message="The username is required and cannot be empty"