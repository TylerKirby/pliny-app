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

        self.hoverOver = function() {
          self.commentaryView = true;
        };

        self.hoverOut = function() {
          self.commentaryView = false;
        }
      }
    ]
  }
);