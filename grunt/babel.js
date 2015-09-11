module.exports = function(){
    return {
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/app.js': 'src/app.js'
                }
            }
        }
    }
};