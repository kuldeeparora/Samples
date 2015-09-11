module.exports = function() {
    return {
        options: {
            livereload: true,
            logConcurrentOutput: true
        },
        css: {
            files: ['src/App/PlayerBundle/Resources/public/assets/scss/*.scss'],
            tasks: ['compass']
        }
    }
};