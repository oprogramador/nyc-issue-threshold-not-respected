const { foo } = require('./index');
const { expect } = require('chai');

describe('foo', () => {
  it('works', () => {
    const result = foo(2, 3);

    expect(result).to.equal(6);
  });
});
