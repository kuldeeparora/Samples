module.exports = function(){
    return {
        options: {
            browsers: ['ie 8', 'opera 12', 'ff 15', 'chrome 25']
        },
        multiple_files: {
            expand: true,
            flatten: true,
            src: '<%= webCss %>*.css',
            dest: '<%= webCss %>'
        }
    }
};