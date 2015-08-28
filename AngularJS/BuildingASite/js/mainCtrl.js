(function () {
    "use strict";

    KD.home.app.factory('countryService', function ($http) {
        var baseUrl = 'services/';

        return {
            getCountries: function(){
                return $http.get(baseUrl + 'getCountries.php');
            }
        }

    });

    KD.home.app.controller('mainCtrl', function ($scope, countryService) {
        $scope.myName = "Which Country";

        var that = this;
        countryService.getCountries().success(function(data){
            that.countries = data;
        });

    });

    KD.home.app.directive('stateView', function(){
        return {
            restrict : 'E',
            templateUrl: 'state-view.html',
            controller: function(){
                this.addStateTo = function(country){
                    if(!country.states){
                        country.states = [];
                        console.log(country.states);
                    }
                    country.states.push({name: this.newState});
                    this.newState = "";
                }
            },
            controllerAs : 'stateCtrl'
        }
    });

})();

