/**
 * Created by kuldeeparora on 11/09/15.
 */
(function () {
    "use strict";

    Vm.home.app.directive('displayBox', function () {
        return {
            restrict : 'E',
            templateUrl : '../public/directive/transclusion/displayBox.html',
            controller : function ($scope) {
                $scope.hidden = false;
                $scope.close = function () {
                    $scope.hidden = true;
                }
            },
            transclude : true
        }
    });
})();