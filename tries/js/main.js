var Trie = require('./trie')

var trie = new Trie("A");
trie.insert("ANDREW", "awesome");
trie.insert("ANDY", "amazing");
trie.insert("ANT", "what");

console.log(trie.get("ANDY"));
console.log(trie.get("ANDREW"));
console.log(trie.get("ANT"));
