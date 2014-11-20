/**
 * Created by kuldeeparora on 15/05/2014.
 */

angular.module('customer', ['common/localStorage'])

    .factory('customerInfo', ['localStorageBinding',
        function (localStorageBinding) {
            return localStorageBinding('fmCustomer');
        }])

    .controller('CustomerController',
    function CustomerController($scope, customerInfo, $location, $log, $timeout) {
        $scope.customer = customerInfo;
        $scope.findRestaurants = function () {
//            alert($scope.customer.name + ' - ' + $scope.customer.address);
            $location.path('/');
        };
    });

