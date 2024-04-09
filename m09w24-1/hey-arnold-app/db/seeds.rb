# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "running the seeds"

puts "creating the locations"

20.times do
  Location.create(
    name: Faker::TvShows::HeyArnold.location()
  )
end

puts "retrieving the locations"

locations = Location.all

puts "creating the characters"
num = 10

num.times do
  Character.create(
    name: Faker::TvShows::HeyArnold.character,
    quote: Faker::TvShows::HeyArnold.quote,
    location: locations.sample
  )
end

puts "all done!!"
