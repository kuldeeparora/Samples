(function(){
    'use strict';
//    console.log(Demo.TvGuide.app);
    Demo.TvGuide.app.controller('DaytimeCtrl', function ($scope) {
        var currentDate = new Date();
        var weekday = new Array(7);
            weekday[0] = "Sun";
            weekday[1] = "Mon";
            weekday[2] = "Tue";
            weekday[3] = "Wed";
            weekday[4] = "Thu";
            weekday[5] = "Fri";
            weekday[6] = "Sat";
        var weekdayLength = weekday.length;

        $scope.days = [];

        $scope.days.push({day: "Today"});
        currentDate.setDate(currentDate.getDate()+1)
        for (var i = 1; i < weekdayLength; i++ ){
            var day = weekday[currentDate.getDay()];
            var date = currentDate.getDate()+"TH";
            $scope.days.push({day: day, date: date});
            currentDate.setDate(currentDate.getDate()+1)
        }


    });

}());
