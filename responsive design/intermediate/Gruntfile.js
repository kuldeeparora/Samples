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
            images: [
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
            dev: {
                options: {
                    sassDir: '<%= project.scss %>',
                    cssDir: '<%= project.css %>',
                    imagesDir: '<%= project.images %>',
                    generatedImagesPath: '<%= project.images %>generatedSprites',
                    httpGeneratedImagesPath: '../../<%= project.images %>generatedSprites',
                    spriteLoadPath: '<%= project.images %>',
                    fontsPath: '<%= project.css %>font/',
                    httpFontsPath: 'font'
                }
            },
            clean: {
                options: {
                    clean: true
                }
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

    // By default, lint and run all tests.
    grunt.registerTask('default', ['dev']);
};