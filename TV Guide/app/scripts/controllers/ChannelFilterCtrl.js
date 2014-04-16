(function () {
    'use strict';
    Demo.TvGuide.app.controller('ChannelFilterCtrl', function ($scope, ChannelDropdown) {
        ChannelDropdown.getChannelDropdown().then(
            function(dropdownValues){
                $scope.categories = dropdownValues.categories;
                $scope.packages = dropdownValues.packages;
                $scope.cities = dropdownValues.cities;
            }
        );
    });
}());

