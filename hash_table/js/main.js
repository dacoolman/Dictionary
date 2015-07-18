var HashTable = require('./hash_table');
var words = require('./dictionary.json');

var dictionary = new HashTable();

for(word in words) {
  var safeWord = word.replace(/\W/g, '')
  if(safeWord.length > 0) {
    dictionary.triePut(safeWord, words[word]);
  }
}
// dictionary.triePut('ant', 'an insect')
// console.log(dictionary.trieGet('ant'))
// dictionary.showDistribution();
console.log(dictionary.trieGet("strength"))
console.log(dictionary.trieGet("apple"))
console.log(dictionary.trieGet("computer"))
console.log(dictionary.trieGet("human"))
