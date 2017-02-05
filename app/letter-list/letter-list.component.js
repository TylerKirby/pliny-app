/**
 * Created by Tyler on 2/3/17.
 */
'use strict';

angular.
  module('letterList').
  component('letterList', {
    templateUrl: 'letter-list/letter-list.template.html',
    controller: ['Letter',
      function LetterListController(Letter) {
        this.letters = Letter.query();
      }
    ]
});