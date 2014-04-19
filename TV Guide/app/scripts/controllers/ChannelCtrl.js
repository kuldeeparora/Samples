(function () {
    'use strict';
    Demo.TvGuide.app.controller('ChannelCtrl', function ($scope, EpgListing) {
        EpgListing.getEpgListing('/json/epglisting_today.json').then(
            function(epglisting){
                $scope.channels = [];
                $scope.packages = [];
                $scope.themes = [];
                for(var key in epglisting){
                    $scope.channels.push({channelName : key, channelInfo : epglisting[key]});
                    if( $scope.packages.indexOf(epglisting[key].package) === -1 ){
                        $scope.packages.push(epglisting[key].package);
                    }
                    if( $scope.themes.indexOf(epglisting[key].theme) === -1 ){
                        $scope.themes.push(epglisting[key].theme);
                    }
                    $scope.category = $scope.themes[0];
                    $scope.package = $scope.packages[0];
                }
            }
        );
    });
}());