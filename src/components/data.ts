// data.ts
export const data = [
  {
    userId: 'user1',
    name: 'Sam',
    unreadCount: 2,
    profilePictureURL: 'https://via.placeholder.com/50',
    chat: [
      { message: 'Hello', timeStamp: '10:40', sender: 'Sam' },
      { message: 'Hey', timeStamp: '10:41', sender: 'me' },
      { message: 'How are you doing?', timeStamp: '10:41', sender: 'Sam' },
      { message: 'Fine mate, how about you?', timeStamp: '10:42', sender: 'me' },
      { message: 'Great', timeStamp: '10:44', sender: 'Sam' },
      { message: "Coming to my wedding, right? I don't think you confirmed.", timeStamp: '10:44', sender: 'Sam' },
      { message: 'Oh yes. There is no way I am going to miss that.', timeStamp: '10:44', sender: 'me' },
      { message: 'Awesome. See you there. Let me know if you want me to book tickets.', timeStamp: '10:45', sender: 'Sam' },
    ],
  },
  {
    userId: 'user2',
    name: 'Elon',
    unreadCount: 0,
    profilePictureURL: 'https://via.placeholder.com/50',
    chat: [
      { message: 'There?', timeStamp: '11:39', sender: 'Elon' },
      { message: 'Yeah, what\'s up?', timeStamp: '11:47', sender: 'me' },
      { message: 'Movie tomorrow?', timeStamp: '11:49', sender: 'Elon' },
      { message: 'Yeah sure. Let me know the timings. And which movie again?', timeStamp: '11:52', sender: 'me' },
      { message: 'The new Mad Max movie. Reviews are great.', timeStamp: '11:52', sender: 'Elon' },
      { message: 'Oh yes, I have been waiting for that one.', timeStamp: '11:54', sender: 'me' },
    ],
  },
  {
    userId: 'user3',
    name: 'Kate',
    unreadCount: 1,
    profilePictureURL: 'https://via.placeholder.com/50',
    chat: [
      { message: 'That burger was delicious!', timeStamp: '13:12', sender: 'Kate' },
      { message: 'Oh yes, no doubt.', timeStamp: '13:13', sender: 'me' },
      { message: 'We are definitely going to that place again.', timeStamp: '13:13', sender: 'Kate' },
      { message: 'We are. My mouth waters whenever I drive through that area.', timeStamp: '13:14', sender: 'me' },
      { message: 'Haha, I bet. Let\'s take Tony and Natasha too next time.', timeStamp: '13:14', sender: 'Kate' },
      { message: 'Sure. They would love it.', timeStamp: '13:15', sender: 'me' },
    ],
  },
];
