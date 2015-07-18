var Trie = require('./../../tries/js/trie');
// var Node = require('../../tries/js/trie_node');

var HashTable = (function(){
  function HashTable() {
    this.table = new Array(26);
  }

  HashTable.prototype.buildLinks = function() {
    for(var i = 0; i < this.table.length; i++) {
      this.table[i] = [];
    }
  }

  HashTable.prototype.linkBuilt = function() {
    var first = this.table[0];
    if (first === undefined || first.constructor.name !== "Array") {
      return false;
    } else {
      return true;
    }
  }

  HashTable.prototype.simpleHash = function(data) {
    return data.charCodeAt() - 65;
  }

  HashTable.prototype.betterHash = function(data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += data[i].charCodeAt();
    }
    return sum % 26;
  }

  HashTable.prototype.simplePut = function(data) {
    this.table[this.simpleHash(data)] = data;
  }

  HashTable.prototype.linkPut = function(data) {
    if (this.linkBuilt() === false) {
      this.buildLinks();
    }

    var loc = this.simpleHash(data);

    if (this.table[loc] !== undefined) {
      this.table[loc].push(data);
    } else {
      this.table[loc] = data;
    }
  }

  HashTable.prototype.showDistribution = function() {
    for(var i = 0; i < this.table.length; i++) {
      console.log(this.table[i]);
    }
  }

HashTable.prototype.trieBuild = function(char, value) {

var alphabet = ['a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z']


  
 for(var i = 0; i < this.table.length; i++) {
  console.log(alphabet[i])
      this.table[i] = new Trie(alphabet[i])
    }
    
}

   HashTable.prototype.triePut = function(word, definition) {
if (!this.table[0])
{
  this.trieBuild();
}


this.table[this.simpleHash(word[0].toUpperCase())].insert(word, definition)

  }

HashTable.prototype.trieGet = function(word) {
if (!this.table[0])
{
  this.trieBuild();
}

  return this.table[this.simpleHash(word[0].toUpperCase())].get(word)
}


  return HashTable;
})();

module.exports = HashTable;
