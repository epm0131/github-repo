(function() {
  'use strict';

  var expect = chai.expect;

  describe('my application', function () {
    it('should know the namespace exists', function () {
      expect(window.git).to.be.an('object');
    });

  });




}());
