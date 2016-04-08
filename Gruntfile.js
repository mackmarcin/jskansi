module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            bundle: {
                src: [
                    'src/js/**/*.js'
                ],
                dest: 'web/assets/main.js'
            },
            sass: {
                src: [
                    'src/css/grid.css'
                ],
                dest: 'web/assets/main.css'
            }
        },
        sass: {
            options: {
                sourceMap: false,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'web/assets/main.css': 'web/assets/main.scss'
                }
            }
        },
        watch: {
            js: {
                files: [
                    'src/js/**/*.js'
                ],
                tasks : [
                    'concat'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['concat', 'sass']);
};
