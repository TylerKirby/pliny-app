/**
 * Created by Tyler on 2/3/17.
 */
angular.module('letter-list', {
  templateURL: 'letter-list/letter-list.template.html',
  controller: ['Letter',
    function LetterListController(Letter) {
      this.letters = Letter.query()
    }
  ]
});
