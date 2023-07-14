const Song = require('../models/playlistModel');

class PlaylistService {
  async addSong(title, artists, url) {
    const song = new Song({ title, artists, url });
    await song.save();
  }

  async getSongById(id) {
    return await Song.findById(id);
  }

  async getAllSongs() {
    return await Song.find();
  }
}

module.exports = PlaylistService;
