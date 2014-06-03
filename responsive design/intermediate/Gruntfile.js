'use strict';

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({

        project: {
            assets: 'assets/',
            scss: [
                '<%= project.assets %>scss/'
            ],
            css: [
                '<%= project.assets %>css/'
            ],
            js: [
                '<%= project.assets %>js/'
            ],
            img: [
                '<%= project.assets %>images/'
            ]
        },
        jshint: {
            all: [
                'Gruntfile.js',
                '<%= project.js %>app/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            test: [
                'tmp',
                '.sass-cache'
            ]
        },

        // Configuration to be run (and then tested).
        compass: {
            dev: {                    // Another target
                options: {
                    sassDir: '<%= project.scss %>',
                    cssDir: '<%= project.css %>',
                    imagesDir: '<%= project.img %>',
//                    importPath: '<%= project.scss %>partials/',
                    imagesPath: '<%= project.images %>',
                    httpImagesPath: '<%= project.images %>',
                    generatedImagesDir: '<%= project.images %>commonSprites',
                    generatedImagesPath: '<%= project.images %>commonSprites',
                    httpGeneratedImagesPath: '<%= project.images %>/generated/commonSprites',
//                    spriteLoadPath: '<%= project.images %>commonSprites',
                    fontsPath: '<%= project.css %>font/',
                    httpFontsPath: 'font'
                }
            },
            clean: {
                options: {
                    clean: true
                }
//            },
//            options: {
//                outputStyle: 'compressed'
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9']
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: '<%= project.css %>*.css',
                dest: 'assets/css/'
            }
        },
//        cssmin: {
//            compress: {
//                files: {
//                    '<%= project.css %>/main_combined.css': [
//                        '<%= project.css %>/tv-carousels.css',
//                        '<%= project.css %>/tv-global.css',
//                        '<%= project.css %>/manage-tivo.css',
//                        '<%= project.css %>/tv-content.css',
//                        '<%= project.css %>/search.css',
//                        'web/js/libs/fancybox/jquery.fancybox.css',
//                        'web/css/libs/html5boilerplate.css',
//                        '<%= project.css %>/theme.css',
//                        '<%= project.css %>/layout.css',
//                        '<%= project.css %>/style.css',
//                        '<%= project.css %>/newfeature-popup.css',
//                        '<%= project.css %>/modal.css',
//                        '<%= project.css %>/non-live.css',
//                        '<%= project.css %>/overlay.css',
//                        'web/css/libs/jquery.jscrollpane.css',
//                        '<%= project.css %>/scrollingPanels.css'
//                    ]
//                }
//            }
//        },

        watch: {
            styles: {
                files: ['<%= project.scss %>**/*.scss'],
                tasks: ['compass', 'autoprefixer'],
                options: {
                    nospawn: true,
                    interrupt: true,
                    livereload: true
                }
            },
            configFiles: {
                files: [ 'Gruntfile.js' ],
                options: {
                    reload: true
                }
            }
        }
    });

//    grunt.log.debug('watch');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('mkdir', grunt.file.mkdir);

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('dev', [
        'jshint',
        'clean',
        'mkdir:tmp',
        'compass:dev',
        'autoprefixer',
        'clean'
    ]);

//    grunt.registerTask('watch_dev', [
//        'jshint',
//        'clean',
//        'mkdir:tmp',
//        'compass:dev',
//        'watch',
//        'clean'
//    ]);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['dev']);
    grunt.registerTask('prod', ['dev', 'cssmin']);
//    grunt.registerTask('watch', ['watch_dev']); //, 'to watch'
};