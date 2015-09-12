module.exports = function () {
    return {
        compile: {
            options: {
                sourceMap: true
            },
            files: {
                'ecma6/dist/first.js': 'ecma6/src/first.js'
            }
        }
    }
};