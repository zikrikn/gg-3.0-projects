const PlaylistService = require('../services/playlistService');

const playlistService = new PlaylistService();

class PlaylistController {
  async addSong(req, res) {
    try {
      const { title, artists, url } = req.body;
      await playlistService.addSong(title, artists, url);
      res.status(201).json({ message: 'Song added to playlist' });
    } catch (error) {
      console.error('Error adding song to playlist:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getSong(req, res) {
    try {
      const songId = req.params.id;
      const song = await playlistService.getSongById(songId);
      if (!song) {
        res.status(404).json({ message: 'Song not found' });
      } else {
        res.status(200).json(song);
      }
    } catch (error) {
      console.error('Error retrieving song from playlist:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getAllSongs(req, res) {
    try {
      const songs = await playlistService.getAllSongs();
      res.status(200).json(songs);
    } catch (error) {
      console.error('Error retrieving playlist:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = PlaylistController;

