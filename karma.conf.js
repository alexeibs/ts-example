/* global module */
module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine', 'requirejs'],

    files: [
      'karma-entry.js',
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'src/**/*.ts', included: false},
      {pattern: 'src/**/*.map', included: false},
      {pattern: 'tests/**/*.js', included: false},
      {pattern: 'tests/**/*.ts', included: false},
      {pattern: 'tests/**/*.map', included: false},
    ],

    preprocessors: {
      'src/**/*.js': ['coverage']
    },

    reporters: ['spec'],

    coverageReporter: {
      type : 'json',
      dir: '.coverage',
      subdir : '.',
      file : 'coverage.json'
    },

    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: true,
      suppressSkipped: true
    },

    autoWatch: true,

    browserNoActivityTimeout: 60000
  });
};
