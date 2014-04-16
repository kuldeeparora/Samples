(function () {
    'use strict';
    Demo.TvGuide.app.controller('DaytimeCtrl', function ($scope) {
        $scope.currentDate = new Date();
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
                var date = $scope.currentDate;
                var today = new Date();
                if (date.getDate() === today.getDate() && date.getYear() === today.getYear() && date.getMonth() === today.getMonth()) {
                    $scope.days.push({day: 'Today', date: ''});
                } else {
                    var dayOfMonth = weekday[$scope.currentDate.getDay()];
                    var dateOfMonth = $scope.currentDate.getDate();
                    var digitSuffix = ['th', 'st', 'nd', 'rd'];
                    var dateMod = dateOfMonth % 100;
                    var suffix = digitSuffix[(dateMod - 20) % 10] || digitSuffix[dateMod] || digitSuffix[0];
                    $scope.days.push({day: dayOfMonth, date: dateOfMonth + suffix});
                }

                $scope.currentDate.setDate($scope.currentDate.getDate() + 1);
            }
        };

        $scope.prevDays = function () {
            $scope.currentDate.setDate($scope.currentDate.getDate() - 14);
            $scope.updateDates();
        };

        $scope.nextDays = function () {
            $scope.currentDate.setDate($scope.currentDate.getDate() + 7);
            $scope.updateDates();
        };

        $scope.updateDates();
    });

}());
