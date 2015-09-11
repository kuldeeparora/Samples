module.exports = function(){
    return {
        all: [
            'Gruntfile.js',
            '<%= assets %>js/application/boot',
            '<%= assets %>js/application/controller',
            '<%= assets %>js/application/directives',
            '<%= assets %>js/application/filters',
            '<%= assets %>js/application/services',
            '<%= assets %>js/application/search',
            '<%= assets %>js/application/skyDevice'
        ],
        options: {
            jshintrc: '.jshintrc'
        }
    }
};