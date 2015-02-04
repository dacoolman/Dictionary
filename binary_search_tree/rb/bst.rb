require_relative 'bst_node'

class BST
  attr_accessor :root

  def initialize
    @root = nil;
  end

  def insert(data)
    @root = insert_node(@root, data)
  end

  def insert_node(node, data)
    if node == nil
      return Node.new(data, nil, nil)
    else
      if data < node.data
        node.left = insert_node(node.left, data)
      else
        node.right = insert_node(node.right, data)
      end
      return node
    end
  end

  def in_order(node)
    if node == nil
      return
    else
      in_order(node.left)
      puts node.show
      in_order(node.right)
    end
  end

  def pre_order(node)
    if node == nil
      return
    else
      puts node.show
      in_order(node.left)
      in_order(node.right)
    end
  end

  def post_order(node)
    if node == nil
      return
    else
      puts node.show
      in_order(node.left)
      in_order(node.right)
    end
  end

  def level_order
    if @root == nil
      return nil
    else
      queue = [@root]
      while !queue.empty?
        current = queue[0]
        puts current.data
        queue << current.left if current.left
        queue << current.right if current.right
        queue.shift
      end
    end
  end

  def get_min
    current = @root
    while current.left != nil
      current = current.left
    end
    current.data
  end

  def get_max
    current = @root
    while current.right != nil
      current = current.right
    end
    current.data
  end

  def find(data)
    current = @root
    while current && current.data != data
      if data < current.data
        current = current.left
      else
        current = current.right
      end
    end
    current
  end

  def remove(data)
    @root = remove_node(@root, data)
  end

  def remove_node(node, data)
    if node == nil
      return nil
    end

    if data == node.data
      # node has no children
      if node.left == nil && node.right == nil
        return nil
      end

      # node has no left child
      if node.left == nil
        return node.right
      end

      # node has no right child
      if node.right == nil
        return node.left
      end

      # node has two children
      temp_node = get_smallest(node.right)
      node.data = temp_node.data
      node.right = remove_node(node.right, temp_node.data)
      return node
    elsif data < node.data
      node.left = remove_node(node.left, data)
      return node
    else
      node.right = remove_node(node.right, data)
      return node
    end
  end

  def get_smallest(node)
    current = node
    while current.left != nil
      current = current.left
    end
    current
  end
end
