const chatUsers = [];
const chatRooms = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = chatUsers.find((user) => user.room === room && user.name === name);
  // let unique = {...new Set({chatUsers[room].value})};
  // const existingRoom = gameRoom.find((game) => game.room === room);


  if (!name || !room) return { error: 'Username and room are required.' };
  if (existingUser) return { error: 'Username is taken.' };

  const user = { id, name, room };
  const gameRoom = { id, room, users };

  chatUsers.push(user);
  

  for(let i = 0; i < chatRooms.length; i++) {
    if (chatRooms[i].room !== room) {
      chatRooms.push(gameRoom);
    } else if(chatRooms[i].users < 4 && chatRooms[i].users > -1) {
      chatRooms[i].users++;
    } else {
      return { error: 'That room is full' }
    }
  }

  return { user }, { gameRoom };
}

const removeUser = (id) => {
  const index = chatUsers.findIndex((user) => user.id === id);

  if (index !== -1) return chatUsers.splice(index, 1)[0];
}

const getUser = (id) => chatUsers.find((user) => user.id === id);

const getUsersInRoom = (room) => chatUsers.filter((user) => user.room === room);

const getAllRooms = () => chatRooms.filter((game) => game.room === room);


module.exports = { addUser, removeUser, getUser, getUsersInRoom, getAllRooms };