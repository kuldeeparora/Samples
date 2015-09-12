/**
 * Created by kuldeeparora on 11/09/15.
 */
(function () {
    "use strict";

    Vm.home.app.directive('userTile', function ($parse) {
       return {
           restrict : 'E',
           scope : {
               user : "="
           },
           templateUrl : '../public/directive/decorator/userTile.html'
       };
    });

    Vm.home.app
        .directive('userClickSelect', function () {
            return {
                link: function (scope, el, attrs) {
                    el.on('click', function () {
                        scope.user.selected = !scope.user.selected;
                        scope.$apply();
                    })
                }
            }
        });
    
})();