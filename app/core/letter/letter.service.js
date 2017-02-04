/**
 * Created by Tyler on 2/3/17.
 */
'use strict';

angular.module('core.letter').factory('Letter', ['$resource',
  function ($resource) {
    return $resource('letters/:letterId.json', {}, {
      query: {
        method: 'GET',
        params: {letterId: 'letters'},
        isArray: true
      }
    });
  }
]);
