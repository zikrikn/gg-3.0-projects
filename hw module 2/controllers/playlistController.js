const PlaylistService = require('../services/playlistService');

const playlistService = new PlaylistService();

class PlaylistController {
  async createPlaylist(req, res) {
    try {
      const { playlistId, name } = req.body;
      await playlistService.createPlaylist(playlistId, name);
      res.status(201).json({ message: 'Playlist created' });
    } catch (error) {
      console.error('Error creating playlist:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async addSong(req, res) {
    try {
      const { playlistId, title, artists, url } = req.body;
      await playlistService.addSong(playlistId, title, artists, url);
      res.status(201).json({ message: 'Song added to playlist' });
    } catch (error) {
      console.error('Error adding song to playlist:', error);
      res.status(500).json({ message: 'Error adding song to playlist' });
    }
  }
  
  async getSong(req, res) {
    try {
      const { playlistId, songId } = req.params;
      const song = await playlistService.getSong(playlistId, songId);
      res.status(200).json(song);
    } catch (error) {
      console.error('Error retrieving song:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getAllSongs(req, res) {
    try {
      const { playlistId } = req.params;
      const songs = await playlistService.getAllSongs(playlistId);
      res.status(200).json(songs);
    } catch (error) {
      console.error('Error retrieving songs:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getSortedSongsByPlayCount(req, res) {
    try {
      const { playlistId } = req.params;
      const sortedSongs = await playlistService.getSortedSongsByPlayCount(playlistId);
      res.status(200).json(sortedSongs);
    } catch (error) {
      console.error('Error retrieving sorted songs:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = PlaylistController;
