module.exports = function(){
    return {
        removeJs: [
            'tmp',
            '.sass-cache',
            '<%= webJs %>main_app.js',
            '<%= webJs %>main_libs.js'
        ],
        removeTmp: [
            'tmp',
            '.sass-cache'
        ]
    }
};