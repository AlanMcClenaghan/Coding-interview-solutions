// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1 - Using reverse() helper - long version
// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }

// Solution 1 - Using reverse() helper - short version
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Solution 2 - Using a for...of loop
// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// Solution 3 - Using reducer helper - Long version
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

// Solution 3 - Using reducer helper - short version
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev
    , '');
}

module.exports = reverse;
