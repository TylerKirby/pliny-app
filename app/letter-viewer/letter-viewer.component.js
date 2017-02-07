/**
 * Set up controller for letterViewer.
 * Note that letterViewer depends on the core.letter service for low-level http requests. If there
 * is a problem with the letter service, run the e2e test to check for issues.
 *
 * Created by Tyler on 2/5/17.
 */
'use strict';

// Register letter-viewer with its controller and template.
angular.
  module('letterViewer').
  component('letterViewer', {
    templateUrl: 'letter-viewer/letter-viewer.template.html',
    controller: ['$routeParams', 'Letter',
      function LetterViewerController($routeParams, Letter) {
        var self = this;
        self.letter = Letter.get({letterId: $routeParams.letterId}, function(letter) {});
      }
    ]
  }
);