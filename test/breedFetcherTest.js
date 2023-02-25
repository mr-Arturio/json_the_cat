const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null); //we expect no error

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());

      done()

    });
  });

  it('returns Invalid when an invalid/non-existent breed is passed in', (done) => {
    fetchBreedDescription('Invalid', (err, desc) => {
      assert.notEqual(err, null); //we expect no error

      const expectedDesc = null;

      assert.equal(expectedDesc, null);

      done();
    });
  });

});