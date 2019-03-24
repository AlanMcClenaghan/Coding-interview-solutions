// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  // if (n < 0) {
  //   return parseInt(reversed) * -1
  // }

  // Math.sign(n) can be used instead of if statement
  // This returns 1 (for positive number) 0 (for 0)
  // or -1 (for negative number)
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
