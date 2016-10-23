(function () {
    'use strict';

    Demo.Search.app.directive('demoUnhide', function(){
        return {
            link: function(scope, element, attrs, controller) {
                element.removeClass('hide').addClass('show');
            }
        };
    });

    Demo.Search.app.directive('demoFocus', function(){
        return {
            link: function(scope, element, attrs, controller) {
                element[0].focus();
                element[0].select();
            }
        };
    });
}());
