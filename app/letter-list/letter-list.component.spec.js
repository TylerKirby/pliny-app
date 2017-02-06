/**
 * Created by Tyler on 2/5/17.
 */
'use strict';

describe('letterList', function() {

  // Load letterList module
  beforeEach(module(letterList));

  // Test the controller
  describe('LetterListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('letters/letters.json')
                  .respond([{id: 'ep3-7'}]);
      ctrl = $componentController(letterList);
    }));

    it('should create a `letters` property with 1 letter fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.letters).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.phones).toEqual([{id: 'ep3-7'}]);
    });
  })
});
