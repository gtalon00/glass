Message.destroy_all
Room.destroy_all
User.destroy_all

@donny = User.create!(username: 'Donny E', email: 'email@email.com', password: '123456', profile_pic: 'https://ca.slack-edge.com/T0351JZQ0-U01UBRS5VFW-5ef35a002c46-72')
@maggie = User.create!(username: 'Maggie Laton', email: 'mail@email.com', password: '654321', profile_pic: 'https://ca.slack-edge.com/T0351JZQ0-U01UBRS5VFW-5ef35a002c46-72')
@chad = User.create!(username: 'Chad Jarvis', email: 'jarjar@email.com', password: '123123', profile_pic: 'https://ca.slack-edge.com/T0351JZQ0-U01UBRS5VFW-5ef35a002c46-72')
@jamie = User.create!(username: 'Jamie Raja', email: 'orangecedar@email.com', password: '456456', profile_pic: 'https://ca.slack-edge.com/T0351JZQ0-U01UBRS5VFW-5ef35a002c46-72')
@lucia = User.create!(username: 'Lucia P', email: 'luci@email.com', password: '111111', profile_pic: 'https://ca.slack-edge.com/T0351JZQ0-U01UBRS5VFW-5ef35a002c46-72')
@glen = User.create!(username: 'Glen Smith', email: 'glendoll@email.com', password: '222222', profile_pic: 'https://ca.slack-edge.com/T0351JZQ0-U01UBRS5VFW-5ef35a002c46-72')
@william = User.create!(username: 'William V', email: 'woolywilly@email.com', password: '333333', profile_pic: 'https://ca.slack-edge.com/T0351JZQ0-U01UBRS5VFW-5ef35a002c46-72')
@zoë = User.create!(username: 'Zoë Kraus', email: 'boggle@email.com', password: '444444', profile_pic: 'https://ca.slack-edge.com/T0351JZQ0-U01UBRS5VFW-5ef35a002c46-72')

puts "#{User.count} user(s) created"

@room_one = Room.create!(users: [@donny, @maggie])
@room_two = Room.create!(users: [@maggie, @donny])

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
