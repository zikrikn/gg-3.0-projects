const { Schema, model } = require('mongoose');

const songSchema = new Schema({
  title: String,
  artists: [String],
  url: String,
  playCount: { type: Number, default: 0 },
});

const playlistSchema = new Schema({
  _id: { type: String, required: true },
  name: String,
  songs: [songSchema],
});

const Playlist = model('Playlist', playlistSchema);

module.exports = Playlist;
