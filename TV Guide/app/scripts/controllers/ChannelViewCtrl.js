(function () {
    'use strict';
    Demo.TvGuide.app.controller('ChannelViewCtrl', function ($scope, EpgListing) {
        EpgListing.getEpgListing().then(
            function(epglisting){
                $scope.channels = [];
                for(var key in epglisting){
                    $scope.channels.push({channelName : key, channelInfo : epglisting[key]});
                }
//                console.log($scope.channels);

            }
        );
    });
}());