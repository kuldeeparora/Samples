(function () {
    'use strict';
    Demo.TvGuide.app.service('EpgListing', function ($http, $log, $q) {
        return {
            getEpgListing : function(url){
                var deferred = $q.defer();
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