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
            }
        }
    })
        .on('success.form.bv', function (e) {
            // Prevent form submission
            e.preventDefault();
        });
    $('#createEditDoc').bootstrapValidator({
        message: 'This value is not valid',
        excluded: ':disabled',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'First Name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z\s,'-]*$/,
                        message: 'Please enter a valid first name'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'Last Name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[A-Za-z]+$/,
                        message: 'Please enter a valid Last name'
                    }
                }
            },
            address1: {
                validators: {
                    notEmpty: {
                        message: 'Mandatory fields cannot be blank'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9\s,'-]*$/,
                        message: 'Please enter a valid address'
                    }
                }
            },
            userId: {
                validators: {
                    notEmpty: {
                        message: 'Customer Id is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[0-9]*$/,
                        message: 'Please enter a valid Customer ID'
                    }
                }
            },
            county: {
                validators: {
                    notEmpty: {
                        message: 'Please select your county.'
                    },
                    regexp: {
                        regexp: /^[A-Za-z]+$/,
                        message: 'Please enter a valid county'
                    }
                }
            },
            country: {
                validators: {
                    notEmpty: {
                        message: 'Please select your country.'
                    },
                    regexp: {
                        regexp: /^[A-Za-z]+$/,
                        message: 'Please enter a valid country'
                    }
                }
            },
            postcode: {
                validators: {
                    notEmpty: {
                        message: 'Post Code is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i,
                        message: 'Please enter a valid Post Code'
                    }
                }
            }
        }
    })
        .on('success.form.bv', function (e) {
            // Prevent form submission
            e.preventDefault();
        });
});
