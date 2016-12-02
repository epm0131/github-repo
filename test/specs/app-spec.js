(function() {
  'use strict';

  var expect = chai.expect;

  describe('my application', function () {
    it('should know the namespace exists', function () {
      expect(window.git).to.be.an('object');
    });

    describe('search repos request', function() {
      it('should return an ajax promise', function() {
        var promise = window.git.searchRepos('abc123', 'query');
        expect(promise).to.be.an('object');
      });

    });

  });




}());
