Message.destroy_all
Room.destroy_all
User.destroy_all

@donny = User.create!(username: 'Donny E.', email: 'email@email.com', password: '123456', profile_pic: 'https://ca.slack-edge.com/T0351JZQ0-U01UBRS5VFW-5ef35a002c46-72')
@maggie = User.create!(username: 'Maggie Laton', email: 'mail@email.com', password: '654321', profile_pic: 'https://ca.slack-edge.com/T0351JZQ0-U01UBRS5VFW-5ef35a002c46-72')
@chad = User.create!(username: 'Chad Jarvis', email: 'jarjar@email.com', password: '123123', profile_pic: 'https://ca.slack-edge.com/T0351JZQ0-U01UBRS5VFW-5ef35a002c46-72')
@jamie = User.create!(username: 'Jamie Raja', email: 'orangecedar@email.com', password: '456456', profile_pic: 'https://www.summitrecords.com/wp-content/uploads/2014/07/arturosandovalmichaelkane.jpg')
@lucia = User.create!(username: 'Maynard F.', email: 'trumpeter@email.com', password: 'trumpet', profile_pic: 'https://4.bp.blogspot.com/-zWnSwsaMfds/VUc506ZkhjI/AAAAAAAAP1A/qG62g_3x9SE/s1600/87ba8f6f4808ae9c182a5275fd6fb.jpg')
@glen = User.create!(username: 'Lao Tzu', email: 'taoteching@email.com', password: 'taoteching', profile_pic: 'https://images.gr-assets.com/authors/1435903703p8/2622245.jpg')
@william = User.create!(username: 'Sun Tzu', email: 'artofwar@email.com', password: 'artofwar', profile_pic: 'https://parade.com/wp-content/uploads/2020/08/Sun-Tzu-quotes.jpg')
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
