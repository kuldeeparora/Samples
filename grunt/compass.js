module.exports = function(){
    return {
        // Production settings
        prod: {
            options: {
                outputStyle: 'compressed',
                environment: 'production',
                sourceMap : false,
                sassDir: '<%= scss %>/',
                cssDir: 'web/build/css/',
                imagesDir: '<%= srcImg %>',
                importPath: '<%= scss %>partials/',
                imagesPath: '<%= srcImg %>',
                httpImagesPath: '/bundles/appplayer/assets/img',
                generatedImagesPath: '<%= assets %>commonSprites',
                httpGeneratedImagesPath: '/bundles/appplayer/assets/commonSprites',
                specify : ['<%= scss %>*.scss', '<%= scss %>libs/*.scss']
            }
        },

        // Development settings
        dev: {
            options: {
                outputStyle: 'nested',
                environment: 'development',
                sourceMap : false,
                sassDir: '<%= scss %>/',
                cssDir: 'web/build/css/',
                imagesDir: '<%= srcImg %>',
                importPath: '<%= scss %>partials/',
                imagesPath: '<%= srcImg %>',
                httpImagesPath: '/bundles/appplayer/assets/img',
                generatedImagesPath: '<%= assets %>commonSprites',
                httpGeneratedImagesPath: '/bundles/appplayer/assets/commonSprites',
                specify : ['<%= scss %>*.scss', '<%= scss %>libs/*.scss']
            }
        }

    }
};