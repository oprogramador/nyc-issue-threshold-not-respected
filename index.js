function foo(a, b) {
  if (a < 0) {
    return a + b;
  }

  return a * b;
}

function bar(a, b) {
  if (b < 0) {
    return a + b;
  }

  return a * b;
}

module.exports = {
  foo,
  bar
};
