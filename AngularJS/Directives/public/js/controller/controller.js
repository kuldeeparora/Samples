/**
 * Created by kuldeeparora on 10/09/15.
 */

(function (){
  "use strict";

    Vm.home.app.controller('decoratorCtrl', function($scope){
       $scope.user1 = {
           name : 'Kuldeep Arora',
           address : {
               street : 'Flat - 6',
               city : 'London',
               country : 'UK'
           },
           friends : [
               'KD',
               "AD",
               "GA"
           ],
           level : 0
       };
        $scope.user2 = {
            name : 'Deepti Arora',
            address : {
                street : 'Flat - 6',
                city : 'London',
                country : 'UK'
            },
            friends : [
                'KD',
                "AD",
                "GA"
            ],
            level : 1
        };
    });
    
    Vm.home.app.controller('videoCtrl', function ($scope) {
        $scope.messages = [];

        $scope.handlePause = function (e) {
            $scope.messages.push({text: 'paused!'});
            console.log("video is paused");
            console.log(e);
        };
    });

    Vm.home.app.controller('myClickCtrl', function ($scope) {
        $scope.data = {
            message : 'I have not been clicked'
        };

        $scope.clickHandler = function (p) {
            p.message = "I have clicked";
        }

    });

    Vm.home.app.controller('usrtileCtrl', function ($scope) {
        $scope.user1 = {
            name: "Luke",
            selected : false
        };
    });

    Vm.home.app.controller('fontWatchCtrl', function ($scope) {
        $scope.size = 150;
    })
    
})();