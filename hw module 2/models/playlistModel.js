const { Schema, model } = require('mongoose');

const songSchema = new Schema({
  title: String,
  artists: [String],
  url: String,
});

// The collections in MongoDB are automatically named based on the pluralized version of the model name. In your case, since you have a model named Song, MongoDB automatically pluralizes it to songs and creates a collection with that name.

const Song = model('Song', songSchema);

module.exports = Song;
