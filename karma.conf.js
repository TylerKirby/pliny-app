/**
 * Created by Tyler on 2/4/17.
 */
module.exports = function(config) {
  config.set({
    basePath: './app',
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      '**/*.module.js',
      '*!(.module|.spec).js',
      '!(bower_components)/**/*!(.module|.spec).js',
      '**/*.spec.js'
    ],
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['Chrome', 'Firefox'],
    plugin: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]
  });
};