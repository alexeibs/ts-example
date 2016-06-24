/* global requirejs */
(function() {

var SRC_URL = '/base/src';
var TESTS_URL = '/base/tests';
var srcRegExp = new RegExp('^' + SRC_URL.replace('/', '\\/') + '\\/(.+)\\.js$');
var testsRegExp = new RegExp('^' + TESTS_URL.replace('/', '\\/') + '\\/(.+)\\.js$');
var allTestFiles = [];

Object.keys(window.__karma__.files).forEach(function(file) {
  var matches = file.match(srcRegExp);
  if (matches !== null) {
    allTestFiles.push(matches[1]);
  } else {
    matches = file.match(testsRegExp);
    if (matches !== null) {
      allTestFiles.push('../tests/' + matches[1]);
    }
  }
});

requirejs.config({
  baseUrl: SRC_URL,
  waitSeconds: 300 // 5 minutes
});

require(allTestFiles, function() {
  window.__karma__.start();
});

})();
