(function () {
    'use strict';
    Demo.TvGuide.app.controller('DaytimeCtrl', function ($scope, EpgListing, $rootScope) {
        $scope.date = new Date();
        var weekday = new Array(7);
        weekday[0] = 'Sun';
        weekday[1] = 'Mon';
        weekday[2] = 'Tue';
        weekday[3] = 'Wed';
        weekday[4] = 'Thu';
        weekday[5] = 'Fri';
        weekday[6] = 'Sat';
        var weekdayLength = weekday.length;

        $scope.updateDates = function () {
            $scope.days = [];
            for (var i = 0; i < weekdayLength; i++) {
//                var date = $scope.date;
//                var today = new Date();
//                if (date.getDate() === today.getDate() && date.getYear() === today.getYear() && date.getMonth() === today.getMonth()) {
//                    $scope.days.push({day: 'Today', date: ''});
//                } else {
                var dayOfMonth = weekday[$scope.date.getDay()];
                var dateOfMonth = $scope.date.getDate();
                var digitSuffix = ['th', 'st', 'nd', 'rd'];
                var dateMod = dateOfMonth % 100;
                var suffix = digitSuffix[(dateMod - 20) % 10] || digitSuffix[dateMod] || digitSuffix[0];
                $scope.days.push({day: dayOfMonth, date: dateOfMonth, suffix: suffix});
//                }
                $scope.date.setDate($scope.date.getDate() + 1);
            }
        };

        $scope.prevDays = function () {
            var todayTime = new Date().getTime();
            var scopeDate=new Date($scope.date);
            scopeDate.setDate(scopeDate.getDate()-7);
            var scopeTime = scopeDate.getTime();
            if(todayTime > scopeTime){
                return null;
            } else {
                $scope.date.setDate($scope.date.getDate() - 14);
                $scope.updateDates();
            }
        };

        $scope.nextDays = function () {
            var today = new Date();
            today.setDate(today.getDate()+7);
            var todayTime = today.getTime();
            var scopeTime = $scope.date.getTime();
            if(scopeTime < todayTime){
                $scope.date.setDate($scope.date.getDate());
                $scope.updateDates();
                $scope.nextDate = $scope.date;
            } else {
                return null;
            }
        };

        $scope.changeDate = function(selectedDate){
            $rootScope.$broadcast('updateEpgListing',{selectedDate : selectedDate});
        };

        $scope.morningTime= function(){
            $('.scroller').css('margin-left', '0');
        };

        $scope.afternoonTime= function(){
            $('.scroller').css('margin-left', '-1320px');
        };

        $scope.eveningTime= function(){
            $('.scroller').css('margin-left', '-2760px');
        };

        $scope.nightTime= function(){
            $('.scroller').css('margin-left', '-4200px');
        };

        $scope.onNowTime= function(){
            var todayTime = new Date().getTime();
            var startDt = new Date();
            startDt.setHours(6);
            startDt.setMinutes(0);
            var startTime = startDt.getTime();
            var calculateTime = ((((todayTime-startTime)/1000)/60)/60);
            if (calculateTime > 0){
                var beforeTime = -((calculateTime*60)*4);
                $('.scroller').css('margin-left', beforeTime+'px');
            } else {
                var afterTime = -(((calculateTime+24)*60)*4);
                $('.scroller').css('margin-left', afterTime+'px');
            }
        };

        $scope.updateDates();

    });

}());