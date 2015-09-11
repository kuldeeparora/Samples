/**
 * Created by kuldeeparora on 10/09/15.
 */

(function(){
    "use strict";

    Vm.home.app.directive('infoDirective', function () {
       return {
           templateUrl : '../public/directive/component/userInfoCard.html',
           restrict : "E",
           scope : {
               user : "=person",
               initialCollapsed : "@collapsed"
           },
           controller : function ($scope) {
               $scope.collapsed = ($scope.initialCollapsed === 'true');
               $scope.knightMe = function (user) {
                   user.rank = "knight"
               };
               $scope.collapse = function () {
                 $scope.collapsed = !$scope.collapsed;
               };
               $scope.removeFriend = function (friend) {
                   var idx = $scope.user.friends.indexOf(friend);
                   if(idx > -1){
                       $scope.user.friends.splice(idx, 1);
                   }
               };
           }
       }
    });

    Vm.home.app.directive('removeFriend', function () {
       return {
           templateUrl : '../public/directive/component/removeFriend.html',
           restrict : "E",
           scope : {
               notifyParent : '&method'
           },
           controller : function ($scope) {
               $scope.removing = false;
               $scope.startRemove = function () {
                   $scope.removing = true;
               };
               $scope.cancelRemove = function () {
                   $scope.removing = false;
               };
               $scope.confirmRemove = function () {
                   $scope.notifyParent();
               }
           }
       }
    });

    Vm.home.app.directive('address', function () {
        return {
            templateUrl : '../public/directive/component/address.html',
            restrict : "E",
            scope: true,
            controller : function ($scope) {
                $scope.collapsed = false;
                $scope.collapseAddress = function () {
                    $scope.collapsed = true;
                };
                $scope.expandAddress = function () {
                    $scope.collapsed = false;
                };
            }
        }
    });
})();