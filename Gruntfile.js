module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        init: {
            jquery: 
        },
        qunit: {
            files : ['src/**/*.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('default',['qunit']);
}