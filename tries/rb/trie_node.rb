class Node
  attr_accessor :char, :value, :next

  def initialize(char, value)
    @char = char
    @value = value
    @next = []
  end
end
