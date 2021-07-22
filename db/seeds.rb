User.destroy_all

@random_user = User.create!(username: 'gtalon00', email: 'email@email.com', password: '123456')

puts "#{User.count} user(s) created"