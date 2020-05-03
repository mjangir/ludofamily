import firestore from '@react-native-firebase/firestore';
import generateRandomNumber from '../utils/randomNumber';

class Game {
  async createPlayer(playerName, color) {
    const doc = await firestore()
      .collection('Players')
      .add({
        playerName,
        color,
      });
    return doc.id;
  }

  async createRoom(playerName, color) {
    const roomCode = String(generateRandomNumber());
    const playerId = await this.createPlayer(playerName, color);
    await firestore()
      .collection('Rooms')
      .doc(roomCode)
      .set({
        createdBy: playerName,
        color,
        isFull: false,
        maxPlayers: 4,
        players: [playerId],
      });
    return roomCode;
  }

  async joinRoom(roomCode, playerName, color) {
    const playerId = await this.createPlayer(playerName, color);
    await firestore()
      .collection('Rooms')
      .doc(roomCode)
      .update({
        players: firestore.FieldValue.arrayUnion(playerId),
      });
  }

  getRooms() {}

  getPlayers() {}

  getTracks() {}
}

const instance = new Game();

export default instance;
