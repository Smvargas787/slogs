const util = require('../src/util');
const expect = require('chai').expect;


// Debug Tool
describe('debug test', () => {
  //
  it('Testing to see if stub displays', (done) => {
    expect(util.out1).to.not.equal(null);
    done();
  });
});
