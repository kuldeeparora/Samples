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
                var date = $scope.date;
                var today = new Date();
                if (date.getDate() === today.getDate() && date.getYear() === today.getYear() && date.getMonth() === today.getMonth()) {
                    $scope.days.push({day: 'Today', date: ''});
                } else {
                    var dayOfMonth = weekday[$scope.date.getDay()];
                    var dateOfMonth = $scope.date.getDate();
                    var digitSuffix = ['th', 'st', 'nd', 'rd'];
                    var dateMod = dateOfMonth % 100;
                    var suffix = digitSuffix[(dateMod - 20) % 10] || digitSuffix[dateMod] || digitSuffix[0];
                    $scope.days.push({day: dayOfMonth, date: dateOfMonth + suffix});
                }

                $scope.date.setDate($scope.date.getDate() + 1);
            }
        };

        $scope.prevDays = function () {
            var todayTime = new Date().getTime();
            var scopeDate=new Date($scope.date);
            scopeDate.setDate(scopeDate.getDate()-7);
            var scopeTime = scopeDate.getTime();
            if(todayTime > scopeTime){
                console.log('dont do anything');
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
                console.log('dont do anything');
            }
        };

        $scope.changeDate = function(selectedDate){
            $rootScope.$broadcast('updateEpgListing',{selectedDate : selectedDate});
        };

        $scope.updateDates();

    });

}());