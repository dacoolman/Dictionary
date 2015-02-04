var HashTable = require('./hash_table');
var words = require('./dictionary.json');

var dictionary = new HashTable();

for(word in words) {
  var safeWord = word.replace(/\W/g, '')
  if(safeWord.length > 0) {
    dictionary.triePut(safeWord, words[word]);
  }
}

dictionary.showDistribution();
dictionary.trieGet("strength");
dictionary.trieGet("apple");
dictionary.trieGet("computer");
