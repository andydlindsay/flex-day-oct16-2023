# hash == collection of key/value pairs, object, dictionary, associative arrays

user = {
  "username" => "jstamos",
  "password" => "1234"
}

# puts user
# puts user["password"]

# symbols => lightweight strings

user = {
  :username => "jstamos",
  :password => "1234"
}

# puts user
# p user[:username]

user = {
  username: "jstamos",
  password: "1234"
}

puts user
puts user[:password]
