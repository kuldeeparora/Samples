module.exports = function(){
    return {
        all: {
            files: [{
                expand: true,
                cwd: '<%= webImg %>',
                src: '**/*.{gif,GIF,jpg,JPG,png,PNG}',
                dest: '<%= webImg %>'
            }]
        }
    }
};