module.exports = function() {
    return {
        prod: {
            files: {
                '<%= webJs %>main_app.js': [
                    '<%= assets %>js/application/model/asset.js',
                    '<%= assets %>js/application/eventDispatcher.js',
                    '<%= assets %>js/application/minuteTimer.js',
                    '<%= assets %>js/application/tenSecondsTimer.js',
                    '<%= assets %>js/application/model/tvlisting_cookie.js',
                    '<%= assets %>js/application/episodeProgressionBar.js',
                    '<%= assets %>js/application/autoTabs.js',
                    '<%= assets %>js/application/dropdowns.js',
                    '<%= assets %>js/application/play.js',
                    '<%= assets %>js/application/carousel-playerpage.js',
                    '<%= assets %>js/application/application.js',
                    '<%= assets %>js/application/thumbs.js',
                    '<%= assets %>js/application/recordbutton.js',
                    '<%= assets %>js/application/dialog.js',
                    '<%= assets %>js/application/errorHandler.js',
                    '<%= assets %>js/application/watchLater.js',
                    '<%= assets %>js/application/notifications.js',
                    'web/js/libs/carousel.js',
                    '<%= assets %>js/application/common.js',
                    '<%= assets %>js/application/boot/commonBoot.js',
                    '<%= assets %>js/application/boot/onNowBoot.js',
                    '<%= assets %>js/application/skyDevice/skyDeviceBoot.js',
                    //'<%= assets %>js/application/boot/searchBoot.js',
                    '<%= assets %>js/application/search/helper.js',
                    '<%= assets %>js/application/filters/searchFilters.js',
                    '<%= assets %>js/application/directives/searchDirective.js',
                    '<%= assets %>js/application/directives/carouselDirective.js',
                    '<%= assets %>js/application/controllers/homeController.js',
                    '<%= assets %>js/application/controllers/searchController.js',
                    '<%= assets %>js/application/search/listeners.js',
                    '<%= assets %>js/application/search/analytics.js',
                    '<%= assets %>sprites/logos-sprite.js'
                ],
                '<%= webJs %>main_libs.js':
                    [
                        'web/js/libs/underscore.js',
                        'web/js/libs/backbone.js',
                        'web/js/libs/bootstrap/bootstrap.js',
                        'web/js/libs/angular/angular.min.js',
                        'web/js/libs/angular-sanitize/angular-sanitize.min.js',
                        'web/js/libs/angular-resource/angular-resource.js',
                        'web/js/libs/swfobject.js',
                        'web/js/libs/fancybox/jquery.fancybox.js',
                        'web/js/libs/jquery.cookie.js',
                        'web/js/libs/jquery.ba-tinypubsub.js',
                        'web/js/libs/jquery.peek.js',
                        'web/js/libs/jquery.mousewheel.js',
                        'web/js/libs/mwheelIntent.js',
                        'web/js/libs/jquery.jscrollpane.js',
                        'web/js/libs/json2.js',
                        'web/js/libs/tempus/tempus.js',
                        'web/js/libs/tempus/tempus.timer.js'
                    ]
            },
            options: {
                mangle: true,
                sourceMap: false,
                banner: '/*! prod <%= grunt.template.today("dd-mm-yyyy HH:MM") %> */\n'
            }
        },
        dev: {
            files: {
                '<%= webJs %>main_app.js': [
                    '<%= assets %>js/application/model/asset.js',
                    '<%= assets %>js/application/eventDispatcher.js',
                    '<%= assets %>js/application/minuteTimer.js',
                    '<%= assets %>js/application/tenSecondsTimer.js',
                    '<%= assets %>js/application/model/tvlisting_cookie.js',
                    '<%= assets %>js/application/episodeProgressionBar.js',
                    '<%= assets %>js/application/autoTabs.js',
                    '<%= assets %>js/application/dropdowns.js',
                    '<%= assets %>js/application/play.js',
                    '<%= assets %>js/application/carousel-playerpage.js',
                    '<%= assets %>js/application/application.js',
                    '<%= assets %>js/application/thumbs.js',
                    '<%= assets %>js/application/recordbutton.js',
                    '<%= assets %>js/application/dialog.js',
                    '<%= assets %>js/application/errorHandler.js',
                    '<%= assets %>js/application/watchLater.js',
                    '<%= assets %>js/application/notifications.js',
                    'web/js/libs/carousel.js',
                    '<%= assets %>js/application/common.js',
                    '<%= assets %>js/application/boot/onNowBoot.js',
                    '<%= assets %>js/application/skyDevice/skyDeviceBoot.js',
                    '<%= assets %>js/application/boot/searchBoot.js',
                    '<%= assets %>js/application/search/helper.js',
                    '<%= assets %>js/application/filters/searchFilters.js',
                    '<%= assets %>js/application/directives/searchDirective.js',
                    '<%= assets %>js/application/controllers/searchController.js',
                    '<%= assets %>js/application/search/listeners.js',
                    '<%= assets %>js/application/search/analytics.js',
                    '<%= assets %>sprites/logos-sprite.js'
                ],
                '<%= webJs %>main_libs.js':
                    [
                        'web/js/libs/underscore.js',
                        'web/js/libs/backbone.js',
                        'web/js/libs/bootstrap/bootstrap.js',
                        'web/js/libs/angular/angular.min.js',
                        'web/js/libs/angular-sanitize/angular-sanitize.min.js',
                        'web/js/libs/angular-resource/angular-resource.js',
                        'web/js/libs/swfobject.js',
                        'web/js/libs/fancybox/jquery.fancybox.js',
                        'web/js/libs/jquery.cookie.js',
                        'web/js/libs/jquery.ba-tinypubsub.js',
                        'web/js/libs/jquery.peek.js',
                        'web/js/libs/jquery.mousewheel.js',
                        'web/js/libs/mwheelIntent.js',
                        'web/js/libs/jquery.jscrollpane.js',
                        'web/js/libs/json2.js',
                        'web/js/libs/tempus/tempus.js',
                        'web/js/libs/tempus/tempus.timer.js'
                    ]
            },
            options: {
                //Specify mangle: false to prevent changes to your variable and function names.
                mangle: false,
                beautify: true,
                sourceMap: true,
                banner: '/*! dev <%= grunt.template.today("dd-mm-yyyy HH:MM") %> */\n'
            }
        }

    }
};