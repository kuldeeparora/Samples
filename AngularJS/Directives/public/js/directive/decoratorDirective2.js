/**
 * Created by kuldeeparora on 11/09/15.
 */
(function () {
    "use strict";

    Vm.home.app.directive('myClick', function ($parse) {
       return {
           link : function (scope, el, attrs) {
               var fn = $parse(attrs['myClick']);
               el.on('click', function () {
                   scope.$apply(function () { // .$apply - binding get updated
                       fn(scope);
                   });
               });
           }
       };
    });
    
})();
