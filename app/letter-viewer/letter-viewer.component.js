/**
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

        self.hoverIn = function() {
          this.hoverEdit = true;
        };

        self.hoverOut = function() {
          this.hoverEdit = false;
        };
      }
    ]
  }
);