module.exports = function(){
    return {
        // Production tasks
        prodFirst: ['jshint', 'copy'],
        prodSecond: ['compass:prod'],
        prodThird: ['autoprefixer', 'clean:removeTmp'],

        // Dev tasks
        devFirst: ['jshint', 'copy'],
        devSecond: ['compass:dev'],
        devThird: ['autoprefixer', 'clean:removeTmp'],

        imgFirst: ['imagemin'],

        options: {
            limit: 5,
            logConcurrentOutput: true
        }
    }
};
