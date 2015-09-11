module.exports = function(){
    return {
        main: {
            files: [
                {
                    expand: true,
                    flatten: true,
                    src: ['<%= assets %>sprites/*.scss'],
                    dest: '<%= assets %>scss',
                    filter: 'isFile'
                }
            ]
        }
    }
};