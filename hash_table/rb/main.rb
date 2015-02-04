require 'json'
require_relative 'hash_table'

file = File.read('dictionary.json')
data_hash = JSON.parse(file)

dictionary = HashTable.new

data_hash.each do |key, value|
  safe_word = key.gsub(/\W/, '')

  if safe_word.length > 0
    dictionary.trie_put(safe_word, value)
  end
end

dictionary.show_distribution
dictionary.trie_get("strength")
dictionary.trie_get("apple")
dictionary.trie_get("computer")
