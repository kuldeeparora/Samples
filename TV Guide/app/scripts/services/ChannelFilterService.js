(function () {
    'use strict';
    Demo.TvGuide.app.factory('ChannelDropdown', function ($http, $log, $q) {
        return {
            getChannelDropdown : function(){
                var deferred = $q.defer();
                $http({method: 'GET', url: '/json/tvlisting.json'}).
                    success(function (data) {
                        deferred.resolve(data);
                    }).
                    error(function (data, status) {
                        deferred.reject(status);
                    });
                return deferred.promise;
            }
        }
    });
}());

