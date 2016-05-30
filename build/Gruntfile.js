'use strict';

// Ne regarde que dans un niveau en dessous :
// 'test/spec/{,*/}*.js'
// Regarde dans tous les niveaux descendant :
// 'test/spec/**/*.js'

module.exports = function (grunt) {
	grunt.file.preserveBOM = true;
	grunt.util.linefeed = '\r\n';
  // Temps que prennent les taches
  require('time-grunt')(grunt);

  // Chargement auto des taches grunt (grunt-...)
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates'
  });

  // Parametrage :
  var appConfig = {
	    root: '../',
	    app: '../app',
	    test: '../test',
	    dist: 'dist'
  };

  // Configuration des taches
  grunt.initConfig({

    // recuperation du parametrage
    conf: appConfig,

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        // Change this to 'localhost' to prevent access from outside.
        hostname: '0.0.0.0'
      },
      dist: {
        options: {
          open: true,
          base: '<%= conf.dist %>'
        }
      }
    },

    // verification que le Gruntfile.js (fichier courant) est bien conforme
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js'
        ]
      }
    },

    // Verification que le code est bien ecrit
    jscs: {
      options: {
        config: '.jscsrc',
        verbose: true
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= conf.app %>/modules/**/*.js'
        ]
      },
      test: {
        src: ['<%= conf.test %>/modules/**/*.js']
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      all: {
          files: ['<%= conf.app %>/modules/**/*.*', '<%= conf.app %>/styles/**/*.*'],
          tasks: ['newer:typescript',
                  'newer:copy:styles',
                  'newer:copy:js',
                  'newer:postcss',
                  'ngtemplates',
                  'newer:copy:dist',
                  'newer:copy:fonts',
                  'newer:copy:local',
                  'newer:injector']
        }
    },
    
    // Nettoyage des repertoires cibles
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= conf.dist %>'
          ]
        }]
      },
      fin: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= conf.dist %>/intranet'
          ]
        }]
      }
    },

    ngtemplates: {
      dist: {
        options: {
          module: 'sphere',
          htmlmin: '<%= htmlmin.dist.options %>',
          usemin: 'app/scripts/scripts.js'
        },
        cwd: '..',
        src: 'app/modules/*/*/views/*.html',
        dest: '.tmp/app/modules/views/templateCache.js'
      }
    },
    
    // ajout des prefixes au CSS (-webkit , -moz, ...)
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: ['last 1 version']})
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/app/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/app/styles/'
        }]
      }
    },

    // injection automatique des composants bower dans l'appli
    wiredep: {
      app: {
          src: ['../index.html'],
          options: {
        	  cwd: '../',
        	  ignorePath:  /\.\.\//,
	      	  fileTypes: {
		      	html: {
		      	    block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
		      	    detect: {
		      	      js: /<script.*src=['"]([^'"]+)/gi,
		      	      css: /<link.*href=['"]([^'"]+)/gi
		      	    },
		      	    replace: {
		      	      js: '<script src="{{filePath}}"></script>',
		      	      css: '<link rel="stylesheet" href="{{filePath}}" />'
		      	    }
		      	  }
			      }
		      }
      }
    },
    
    injector: {
    	options: {
			lineEnding: '\r\n',
    		sort: function (a, b) {

    			if (a.split('/').length < b.split('/').length) {
    				return -1;
    			}
    			
    			if (a.split('/').length > b.split('/').length) {
    				return 1;
    			}
    			
    			return 0;
    		}
    	},
        js: {
        	options: {
        		transform: function (filePath, index, length) {
        			
        			if (filePath == '') {
        				return '';
        			}
        			
              filePath = filePath.substring('/dist/'.length, filePath.length);
        			
        			return '<script src="'+filePath+'"></script>';
        		}
        	},
        	files: {
                'dist/index.html': ['.tmp/app/**/*.js']
              }
        },
        css: {
        	options: {
        		transform: function (filePath, index, length) {
        			
        			if (filePath == '') {
        				return '';
        			}

              filePath = filePath.substring('/dist/'.length, filePath.length);
        			
        			return '<link rel="stylesheet" type="text/css" href="'+filePath+'">';
        		}
        	},
        	files: {
                'dist/index.html': ['.tmp/app/**/*.css']
              }
        }
    },
    
    
    // Compilation du TypeScript en JavaScript
    typescript: {
      base: {
        src: ['<%= conf.app %>/modules/**/*.ts'],
          dest: '.tmp/app/modules',
          options: {
            module: 'amd', //or commonjs
            target: 'es5', //or es3
            rootDir: '<%= conf.app %>/modules',
            sourcemap: true,
            noImplicitAny: false
        }
      }
    },
    
    // Renomme les fichiers pour eviter les problemes de cache navigateur
    filerev: {
      dist: {
        src: [
          '<%= conf.dist %>/app/scripts/{,*/}*.js',
          '<%= conf.dist %>/app/styles/{,*/}*.css'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      dist: {
	  	  src: 'dist/index.html',
	        options: {
	          dest: '<%= conf.dist %>',
	          flow: {
	            html: {
	              steps: {
	                js: ['concat', 'uglifyjs'],
                    css: ['cssmin']
	              },
	              post: {}
	            }
	          }
	        }
      	}
    },
    
    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= conf.dist %>/**/*.html'],
      css: ['<%= conf.dist %>/app/styles/**/*.css'],
      js: ['<%= conf.dist %>/app/scripts/**/*.js'],
      options: {
        assetsDirs: [
	         '<%= conf.dist %>',
	         '<%= conf.dist %>/images',
	         '<%= conf.dist %>/app/scripts'
        ],
        patterns: {
          js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
        }
      }
    },
    
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true
        },
        files: [{
          expand: true,
          cwd: '<%= conf.dist %>',
          src: ['*.html'],
          dest: '<%= conf.dist %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/app/scripts',
          src: '*.js',
          dest: '.tmp/app/scripts'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
        dist: {
            files: [{
              expand: true,
              dot: true,
              cwd: '<%= conf.root %>',
              dest: '<%= conf.dist %>',
              src: [
                'index.html',
                'app/*.{ico,png,txt}',
                'app/*.html',
                'app/images/{,*/}*'
              ]
            }]
          },
         fonts: {
              files: [{
                  expand: true,
                  cwd: '<%= conf.app %>/styles/fonts',
                  dest: '<%= conf.dist %>/app/styles/fonts',
                  src: '**/*'
                }]
            },
         local: {
        	 files: [{
        		 cwd: '.tmp',
        		 expand: true,
        		 dot: true,
        		 dest: '<%= conf.dist %>',
        		 src: '**/*'
        	 }]
         },
         styles: {
          files: [{
              expand: true,
              cwd: '<%= conf.app %>/styles',
              dest: '.tmp/app/styles/',
              src: '{,*/}*.css'
            }]
         },
         bower: {
          files: [{
              expand: true,
              cwd: '<%= conf.root %>',
              dest: 'dist',
              src: 'bower_components/**/*'
            }]
         },
         js: {
       	 	files: [{
   		      	expand: true,
   		      	cwd: '<%= conf.app %>/modules',
   		      	dest: '.tmp/app/modules/',
   		      	src: '**/*.js'
         		}]
          }
    }
  });

  grunt.registerTask('build', [
	    'clean:dist',
	    'wiredep',
	    'typescript',
	    'copy:styles',
	    'copy:js',
	    'postcss',
	    'ngtemplates',
	    'copy:dist',
	    'copy:fonts',
	    'injector',
  		'useminPrepare',
  		'concat',
  		'cssmin',
  		'ngAnnotate',
  		'uglify',
  		'filerev',
  		'usemin'//,
	    //'htmlmin', // on ne fait pas l'HTML-min (pb d'encoding)
	    //'clean:fin'
	    ]);

  grunt.registerTask('local', [
	    'clean:dist',
	    'wiredep',
	    'typescript',
	    'copy:styles',
	    'copy:js',
	    'postcss',
	    'ngtemplates',
	    'copy:dist',
	    'copy:fonts',
	    'copy:local',
      'copy:bower',
	    'injector'
	    ]);

  grunt.registerTask('local-watch', [
	    'local',
	    'watch'
	    ]);

  grunt.registerTask('default', [
	    'local-watch'
	    ]);

  grunt.registerTask('serveur', [
        'connect:dist:keepalive'
        ]);

};
