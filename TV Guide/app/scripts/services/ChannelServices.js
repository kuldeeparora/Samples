(function () {
    'use strict';
    Demo.TvGuide.app.factory('ChannelDropdown', function ($http, $log, $q) {
        return {
            getChannelDropdown : function(){
                var deferred = $q.defer();
                var url = '/json/tvlisting.json';
                $http({method: 'GET', url: url}).
                    success(function (data) {
                        deferred.resolve(data);
                    }).
                    error(function (data, status) {
                        deferred.reject(status);
                    });
                return deferred.promise;
            }
        };
    });
    Demo.TvGuide.app.factory('EpgListing', function ($http, $log, $q) {
        return {
            getEpgListing : function(){
                var deferred = $q.defer();
                var url = '/json/epglisting.json';
//              $http.jsonp(url).
                $http({method: 'GET', url: url}).
                    success(function(data){
                        deferred.resolve(data);
                    }).
                    error(function(data, status){
                        deferred.reject(status);
                    });
                return deferred.promise;
            }
        };
    });
}());