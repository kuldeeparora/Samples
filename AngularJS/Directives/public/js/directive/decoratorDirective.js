/**
 * Created by kuldeeparora on 11/09/15.
 */
(function () {
    "use strict";

    Vm.home.app.directive('eventPause', function ($parse) {
       return {
            restrict : 'A',
           link : function (scope, el, attrs) {
               var fn = $parse(attrs['eventPause']);
               el.on('pause', function (event) {
                   scope.$apply(function () {
                       fn(scope, {evt : event});
                   });
               });
           }
       };
    });
    
    Vm.home.app.directive('spacebarSupport', function () {
        return {
            restrict : 'A',
            link : function (scope, el, attrs) {
                $('body').on('keypress', function (evt) {
                    var vidEl = el[0];
                    if(evt.keyCode === 32){
                        if(vidEl.paused){
                            vidEl.play();
                        } else {
                            vidEl.pause();
                        }
                    }
                })
            }
        }
    });
})();
