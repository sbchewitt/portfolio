module.exports = function(grunt) {

  // LOAD IN ALL TASKS
  require('load-grunt-tasks')(grunt, { pattern: ['grunt-*'] });

  // INIT GRUNT CONFIG
  grunt.initConfig({

    // READ IN PACKAGE.JSON
    pkg: grunt.file.readJSON('package.json'),


    // #############################################################################
    // VARIABLES
    // #############################################################################
    
    // dir: {
    //   'styles': {
    //     src:    'src/scss',
    //     unprefixed: 'src/css',
    //     dist:     'dist/css'
    //   },
    //   'scripts': {
    //     src:    'src/js',
    //     dist:     'dist/js'
    //   },
    //   'images': {
    //     src:    'src/img',
    //     dist:     'dist/img'
    //   }
    // },


    // #############################################################################
    // STYLES
    // #############################################################################

    // COMPASS
    compass: {
      build: {
        options: {
          sourcemap: false,
          specify: 'src/scss/bundle-noprefix.scss',
          sassDir: 'src/scss',
          cssDir: 'src/css',
          environment: 'production',
          outputStyle: 'compressed'
        }
      }
    },

    // AUTOPREFIXER
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 9', 'ios 6', 'android 4'],
        map: true
      },
      files: {
        flatten: true,
        src: 'src/css/bundle-noprefix.css',
        dest: 'dist/assets/css/bundle.css'
      },
    },


    // #############################################################################
    // SCRIPTS
    // #############################################################################

    // CONCAT
    concat: {
      dist: {
        src: [
          'src/js/vendor/jquery.js',
          'src/js/vendor/*.js',
          'src/js/*.js'
          ],
        dest: 'dist/assets/js/bundle.js'
      }
    },

    // UGLIFY
    uglify: {
      scripts: { // our scripts
        files: [{
          src: 'dist/assets/js/bundle.js',
          dest: 'dist/assets/js/bundle.min.js'
        }],
      }
    },


    // #############################################################################
    // IMAGES
    // #############################################################################

    imagemin: {
      src: {
        options: {
          optimizationLevel: 7,
          progressive: true,
          interlaced: true
        },
        files: [{
          expand: true,
          cwd: 'src/images',
          src: '**/*.{png,jpg,gif}',
          dest: 'dist/assets/images'
        }]
      }
    },


    // #############################################################################
    // WATCH
    // #############################################################################
    
    watch: {
      css: {
        files: 'src/scss/**',
        tasks: ['compass:build', 'autoprefixer:files']
      },
      js: {
        files: 'src/js/**',
        tasks: ['concat', 'uglify:scripts']
      },
      images: {
        files: 'src/images/**',
        tasks: ['newer:imagemin:src']
      }
    }
  });


  // #############################################################################
  // TASKS
  // #############################################################################
  grunt.registerTask('default', ['compass:build', 'autoprefixer', 'concat', 'uglify:scripts', 'newer:imagemin']);
  grunt.registerTask('style', ['compass:build', 'autoprefixer']);
  grunt.registerTask('script', ['concat', 'uglify:scripts']);
  grunt.registerTask('image', ['newer:imagemin']);
};

