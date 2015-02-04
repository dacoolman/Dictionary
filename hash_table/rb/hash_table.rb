require_relative '../../tries/rb/trie'

class HashTable
  def initialize
    @table = Array.new(26)
  end

  def build_links
    @table.length.times { |i| @table[i] = [] }
  end

  def link_built?
    @table[0].class == Array
  end

  def simple_hash(data)
    data.ord - 65
  end

  def better_hash(data)
    data.split("").map { |k, v| data[k].ord }.reduce(:+) % 26
  end

  def simple_put(data)
    @table[simple_hash(data)] = data
  end

  def link_put(data)
    build_links unless link_built?
    loc = better_hash(data)
    @table[loc] ? @table[loc] << data : @table[loc] = data
  end

  def show_distribution
    @table.length.times { |i| puts "#{i}: #{@table[i]}" }
  end
end
