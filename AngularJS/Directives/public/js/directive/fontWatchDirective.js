/**
 * Created by kuldeeparora on 11/09/15.
 */
(function () {
    "use strict";

    Vm.home.app.directive('fontScale', function ($parse) {
       return {
           link : function (scope, el, attrs) {
               scope.$watch(attrs['fontScale'], function (newValue) {
                   el.css('font-size', newValue + '%');
               })
           }
       };
    });
    
})();