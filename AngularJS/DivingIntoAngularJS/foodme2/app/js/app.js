/**
 * Created by kuldeeparora on 15/05/2014.
 */

// create a  new module foodme with or without dependencies[]
angular.module('foodme', ['ngRoute', 'customer', 'navigation', 'restaurants', 'common/filters'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'RestaurantsController',
            templateUrl: 'views/restaurant-list.html'
        })
        .when('/customer-info', {
            controller: 'CustomerController',
            templateUrl: 'views/customerInfo.html'
        })
        .when('/who-we-are', {
            templateUrl: 'views/who-we-are.html'
        })
        .when('/how-it-works', {
            templateUrl: 'views/how-it-works.html'
        })
        .when('/help', {
            templateUrl: 'views/help.html'
        });
}]);