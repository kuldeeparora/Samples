(function () {
    'use strict';
    Demo.TvGuide.app.controller('ChannelFilterCtrl', function ($scope, ChannelDropdown) {
        ChannelDropdown.getChannelDropdown().then(
            function(dropdownValues){
                $scope.dropdownValues = dropdownValues;
                console.log($scope.dropdownValues);
            }
        )
    });
}());

