import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    cuid: { type: "String", required: true },
    title: { type: "String", required: true },
    dateAdded: { type: "Date", default: Date.now, required: true }
});

let Game = mongoose.model('Game', gameSchema);

export default Game;