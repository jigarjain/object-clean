module.exports = function (grunt) {
    grunt.initConfig({
        eslint: {
            target: ['*.js']
        },

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test.js']
            }
        }
    });

    // Loads Tasks
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-mocha-test');

    // Default task.
    grunt.registerTask('default', ['eslint', 'mochaTest:test']);
};
