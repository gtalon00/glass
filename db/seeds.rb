Message.destroy_all
Room.destroy_all
User.destroy_all

@donny = User.create!(username: 'DonnyE', email: 'email@email.com', password: '123456', profile_pic: 'https://ca.slack-edge.com/T0351JZQ0-U01UBRS5VFW-5ef35a002c46-72')
@maggie = User.create!(username: 'Maggs', email: 'mail@email.com', password: '654321', profile_pic: 'https://ca.slack-edge.com/T0351JZQ0-U01UBRS5VFW-5ef35a002c46-72')

puts "#{User.count} user(s) created"

@room_one = Room.create!()

puts "#{Room.count} room(s) created"

@message_1 = Message.create!(context: 'Hey Maggie, are you bringing the soup?', user: @donny, room: @room_one)
@message_2 = Message.create!(context: 'No Donny, the picnic was cancled I told you this last Tuesday.', user: @maggie, room: @room_one)
@message_3 = Message.create!(context: "I didn't know you meant this picnic, calm down.", user: @donny, room: @room_one)

puts "#{Message.count} message(s) created"

# @random_user = User.create!(username: 'gtalon00', email: 'email@email.com', password: '123456', profile_pic: 'https://ca.slack-edge.com/T0351JZQ0-U01UBRS5VFW-5ef35a002c46-72')

# puts "#{User.count} user(s) created"

# @room_one = Room.create!()

# puts "#{Room.count} room(s) created"

# @message_1 = Message.create!(context: 'Hey Maggie, are you bringing the soup?', user: @random_user, room: @room_one)
# @message_2 = Message.create!(context: 'No Donny, the picnic was cancled I told you this last Tuesday.', user: @random_user, room: @room_one)
# @message_3 = Message.create!(context: "I didn't know you meant this picnic, calm", user: @random_user, room: @room_one)

# puts "#{Message.count} message(s) created"
