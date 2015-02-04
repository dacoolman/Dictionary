require_relative 'trie_node'

class Trie
  attr_accessor :root

  def initialize(char)
    @root = Node.new(char, nil)
  end

  def insert(word, value)
    word = word.upcase
    current = @root

    1.upto(word.length - 1) do |i|
      found = false

      current.next.each do |c|
        if c.char == word[i]
          current = c
          found = true
        end
      end

      if !found
        node = Node.new(word[i], nil)
        current.next.push(node)
        current = node
      end

    end
    current.value = value
  end

  def get(word)
    word = word.upcase
    current = @root

    1.upto(word.length - 1) do |i|
      found = false

      current.next.each do |c|
        if c.char == word[i]
          current = c
          found = true
        end
      end

      if found == false
        current = nil
        break
      end
    end

    if current && current.value
      current.value
    else
      "Not Found"
    end
  end
end
