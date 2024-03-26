# block is denoted with do..end

names = ['alice', 'bob', 'carol']

# names.each do |name|
#   puts "hello there #{name}"
# end

# Proc(edure) is a block stored in memory

my_block = Proc.new do |name|
  puts "hello there #{name} inside stored proc"
end

# names.each &my_block

# [1,2,3].each &my_block

def accepting_block &block
  block.call('dean')
end

# accepting_block &my_block

def accepting_invis_block
  yield('elise') # callback()
end

accepting_invis_block &my_block
