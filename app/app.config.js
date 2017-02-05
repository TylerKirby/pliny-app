/**
 * Created by Tyler on 2/4/17.
 */
'use strict';

angular.
  module('pliny-app').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/letters', {
          template: '<letter-list></letter-list>'
        }).

        when('/letters/:letterId', {
          template: '<letter-viewer></letter-viewer>'
        }).
        otherwise('/letters');
    }
]);