/**
 * Created by Tyler on 2/4/17.
 */
'use strict';

angular.module('pliny-app').config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
      when('/letters', {
        template: '<letter-list></letter-list>'
      }).
      // TODO: Uncomment once letter-detail is ready.
      // when('/letters/:letterId', {
      //   template: '<letter-detail></letter-detail>'
      // }).
      otherwise('/letters');
  }
]);