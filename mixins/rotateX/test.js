var assert = require('assert');

describe('rotateX', function() {

  it('should return the same value', function(done) {
    test.resultProperty = 'transform';
    test.rotateX('20', 'rotateX(20deg)', done);
  });

});