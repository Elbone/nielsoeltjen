module.exports = function (grunt) {

	// Grunt config
	grunt.initConfig({
		
		// Execute SASS
		sass: {
			dest: {
				options: {
					style: 'compressed'
				},
				files: {
					'src/inline/screen.css': 'src/sass/screen.sass',
					'assets/ie.css' : 'src/sass/ie.sass'
				}
			}
		},
		jade: {
			dest: {
				files: {
					'index.html': 'src/index.jade'
				},
				options: {
					extension: '.html',
					data: grunt.file.readJSON("data/items.json")
				}
			}
		},
		uglify: {
			dest: {
				files: {
					'src/inline/script.js': ['src/js/script.js'],
					'src/inline/head.js': ['src/js/head.js']
				}
			}
		},
		watch: {
			dest: {
				files: ['src/sass/*.sass', 'src/js/*.js', 'src/*.jade', 'src/svg/*.svg'],
				tasks: ['sass', 'uglify', 'jade']
			}
		}
	});

	// Load tasks
	// grunt.loadNpmTasks('jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');

	// Register tasks
	grunt.registerTask('default', ['sass', 'uglify', 'jade', 'watch']);

};