(function () {
    'use strict';

    Demo.Search.app.controller('SearchCtrl', function($scope, $http, $timeout){
        $scope.searchTerm = "";
        $scope.startedSearch = false;
        $scope.isSearching = false;
        $scope.hasError = false;
        $scope.numberLimitTo = 5,

            $scope.hideSearchResults = function() {
                $timeout(function(){
                    $scope.startedSearch = false;
                }, 400);
            };

        $scope.doSearch = function(){
            $scope.isSearching = true;
            $scope.startedSearch = true;
            $scope.hasError = false;
            if($scope.searchTerm.length >=3 ){
                $http({method: 'GET', url: Demo.Search.url.replace("%searchTerm%", $scope.searchTerm)}).
                    success(function(data, status, headers, config) {
                        $scope.searchResult = data;
                        $scope.isSearching = false;
                        Demo.Search.container.show();
                        $scope.$watch('totalResults', function(newvalue, oldvalue){
                            if (newvalue){
                                $scope.totalResults = newvalue;
                            }
                        }, true);
                        $scope.totalResults = Demo.Search.Helper.countVisibleResults();
                    }).
                    error(function(data, status, headers, config) {
                        $scope.hasError = true;
                    });
            }
        };

    });
}());


