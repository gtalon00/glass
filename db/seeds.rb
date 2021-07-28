Message.destroy_all
Room.destroy_all
User.destroy_all

@donny = User.create!(username: 'Donny E.', email: 'email@email.com', password: '123456', profile_pic: 'https://dstudiosphotography.com/wp-content/uploads/2019/01/Corporate-Headshots-3-square.jpg')
@maggie = User.create!(username: 'Maggie Laton', email: 'mail@email.com', password: '654321', profile_pic: 'https://content.latest-hairstyles.com/wp-content/uploads/modern-shag-haircut.jpg')
@cab = User.create!(username: 'Cab C.', email: 'minthemooch@email.com', password: 'letmetellyou', profile_pic: 'https://syncopatedtimes.com/wp-content/uploads/2020/02/Cab_in_zoot_suit.jpg')
@dr_arturo = User.create!(username: ' Dr. Arturo S.', email: 'orangecedar@email.com', password: '456456', profile_pic: 'https://pbs.twimg.com/profile_images/1105583370010947585/cdFPnfIk.png')
@Maynard = User.create!(username: 'Maynard F.', email: 'trumpeter@email.com', password: 'trumpet', profile_pic: 'https://4.bp.blogspot.com/-zWnSwsaMfds/VUc506ZkhjI/AAAAAAAAP1A/qG62g_3x9SE/s1600/87ba8f6f4808ae9c182a5275fd6fb.jpg')
@Lao = User.create!(username: 'Lao Tzu', email: 'taoteching@email.com', password: 'taoteching', profile_pic: 'https://cdn.shortpixel.ai/spai/q_lossy+ret_img/http://www.messaggi-online.it/wpres/wp-content/uploads/2019/07/statua_laozi-300x275.jpg')
@Sun = User.create!(username: 'Sun Tzu', email: 'artofwar@email.com', password: 'artofwar', profile_pic: 'http://qt.azureedge.net/resources/authors-images-large/sun-tzu.jpg')
@agatha = User.create!(username: 'Agatha Christie', email: 'boggle@email.com', password: '444444', profile_pic: 'https://i.guim.co.uk/img/media/7fd10f6a8254d8c3be238ea08e7b504643cd1b03/0_102_2367_1419/master/2367.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c3729969f34565d6651279574cdae363')

puts "#{User.count} user(s) created"

@room_one = Room.create!(users: [@donny, @maggie])

puts "#{Room.count} room(s) created"

@message_1 = Message.create!(context: 'Hey Maggie, are you bringing the soup?', user: @donny, room: @room_one)
@message_2 = Message.create!(context: 'No Donny, the picnic was canceled I told you this last Tuesday.', user: @maggie, room: @room_one)
@message_3 = Message.create!(context: "I didn't know you meant this picnic, calm down.", user: @donny, room: @room_one)

puts "#{Message.count} message(s) created"

