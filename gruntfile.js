/* global module */
module.exports = function(grunt) {
  var karmaConfig = {
    unit: {
      configFile: 'karma.conf.js',
      browserNoActivityTimeout: 300000, // 5 min
      browsers: ['PhantomJS'],
      autoWatch: false,
      singleRun: true,
      reporters: ['spec', 'junit', 'coverage'],
      junitReporter: {
        outputDir: '.junit'
      }
    },
  };

  var remapIstanbulConfig = {
    build: {
      src: '.coverage/coverage.json',
      options: {
        reports: {
          json: '.coverage/coverage-remap.json',
          lcovonly: '.coverage/lcov.info',
          html: '.coverage/html'
        },
        useAbsolutePaths: true
      }
    }
  };

  var tsConfig = {
    default: {
      tsconfig: 'tsconfig.json'
    }
  };

  var jshintConfig = {
    files: ['gruntfile.js', 'karma-entry.js', 'karma.conf.js'],
    options: {
      jshintrc: './.jshintrc',
      reporter: './node_modules/jshint-path-reporter'
    }
  };

  var jscsConfig =  {
    src: ['gruntfile.js', 'karma-entry.js', 'karma.conf.js'],
    options: {
      config: './.jscsrc'
    }
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: jshintConfig,
    jscs: jscsConfig,
    karma: karmaConfig,
    remapIstanbul: remapIstanbulConfig,
    ts: tsConfig,
  });

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('remap-istanbul');

  grunt.registerTask('default', ['jshint', 'jscs', 'ts:default', 'karma:unit', 'remapIstanbul:build']);
};
