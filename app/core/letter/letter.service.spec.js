/**
 * Created by Tyler on 2/4/17.
 */
'use strict';

describe('Letter', function() {
  var $httpBackend;
  var Letter;
  var lettersData = [
    {name: 'Letter 1'},
    {name: 'Letter 2'}
  ];

  // Custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load core module for Letter service
  beforeEach(module('core.letter'));

  // Instantiate service and train backend
  beforeEach(inject(function (_$httpBackend_, _Letter_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('letters/letters.json').respond(lettersData);

    Letter = _Letter_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch data from `/letters/letters.json`', function() {
    var letters = Letter.query();

    expect(letters).toEqual([]);

    $httpBackend.flush();
    expect(letters).toEqual(lettersData);
  });
});