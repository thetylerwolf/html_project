module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      release: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "index.html": "jade/index.jade"
        }
      }
    },
    stylus: {
      compile: {
        options: {
        },
        files: {
          'style.css': 'stylus/style.styl'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.styl',
        tasks: ['stylus'],
        options: {
          livereload: true
        }
      },
      html: {
        files: '**/*.jade',
        tasks: ['jade'],
        options: {
          livereload: true
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['stylus', 'jade']);

};