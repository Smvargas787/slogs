// Version Increaser

describe('Version Increaser', () => {
  it('Testing to see if version number is increased', (done) => {
    expect(util.bump).to.not.equal(null);
    done();
  });
});
