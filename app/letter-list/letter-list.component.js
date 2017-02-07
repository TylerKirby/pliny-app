/**
 * Sets up controller for letterList.
 * Note that letterList depends on core.letter service for low-level http requests.
 * If there is a problem with the letter service, run protractor.
 *
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