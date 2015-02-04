require_relative 'trie'

trie = Trie.new("A")
trie.insert("ANDREW", "awesome")
trie.insert("ANDY", "amazing")
trie.insert("ANT", "what")

puts trie.get("ANDY")
puts trie.get("ANDREW")
puts trie.get("ANT")
