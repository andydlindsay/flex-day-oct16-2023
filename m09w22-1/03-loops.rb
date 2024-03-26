# do..end indicates a block of code
i = 0

# loop do
#   i += 1
#   puts "hello #{i}"

#   break if (i >= 10)

#   # if (i >= 10)
#   #   break
#   # end
# end

i = 0

# while (i < 10) do
#   i += 1
#   puts "hello #{i}"
# end

game_over = false

# while (!game_over) do
#   # perform turn actions
# end

# until (game_over) do

# end

names = ['alice', 'bob', 'carol']

# ruby's for..in === js' for..of

# for name in names do
#   puts "hello there #{name}"
# end

# names.forEach((name) => {})

names.each do |name|
  puts "hello there #{name}"
end

names.each_with_index do |name, index|
  puts "hello there #{name} plus #{index}"
end
