(function () {
    'use strict';
    Demo.TvGuide.app.controller('ChannelCtrl', function ($scope, EpgListing) {
        EpgListing.getEpgListing('/json/25.json').then(function (epglisting) {
            $scope.updateEpg(epglisting);
        });

        $scope.updateEpg = function (epglisting) {
            $scope.channels = [];
            $scope.packages = ['All Packages'];
            $scope.themes = ['All Channels'];
            for (var key in epglisting) {
                $scope.channels.push({channelName: key, channelInfo: epglisting[key]});
                if ($scope.packages.indexOf(epglisting[key].package) === -1) {
                    $scope.packages.push(epglisting[key].package);
                }
                if ($scope.themes.indexOf(epglisting[key].theme) === -1) {
                    $scope.themes.push(epglisting[key].theme);
                }
                $scope.category = $scope.themes[0];
                $scope.package = $scope.packages[0];
            }
            $scope.nowArrow();
//            $scope.onNowTime();
        };

        $scope.checkFilter = function (channel) {
            return (($scope.category === channel.channelInfo.theme && $scope.package === channel.channelInfo.package) || ($scope.category === 'All Channels' && $scope.package === 'All Packages'));
        };

        $scope.findMarginPrevNext = function(){
            return parseInt($('.epg-shows-list').css('margin-left'));
        };

        $scope.prevEpisode = function(){
            $scope.addMargin = $scope.findMarginPrevNext();
            $('.scroller').css('margin-left', ($scope.addMargin + 240) + 'px');
        };

        $scope.nextEpisode = function(){
            $scope.removeMargin = $scope.findMarginPrevNext();
            $('.scroller').css('margin-left', ($scope.removeMargin - 240) + 'px');
        };

        $scope.nowArrow = function(){
            console.log('now status');
        };

        $scope.$on('updateEpgListing', function (event, requestInfo) {
            var selectedDate = requestInfo.selectedDate;
            EpgListing.getEpgListing('/json/' + selectedDate + '.json').then(function (epglisting) {
                $scope.updateEpg(epglisting);
            });
        });

    });
}());