const Playlist = require('../models/playlistModel');

class PlaylistService {
  async createPlaylist(playlistId, name) {
    try {
      const playlist = new Playlist({ _id: playlistId, name });
      await playlist.save();
    } catch (error) {
      throw new Error('Error creating playlist');
    }
  }

  async addSong(playlistId, title, artists, url) {
    try {
      const playlist = await Playlist.findById(playlistId);
      if (!playlist) {
        throw new Error('Playlist not found');
      }
  
      const song = { title, artists, url };
      playlist.songs.push(song);
      await playlist.save();
    } catch (error) {
      console.error('Error adding song to playlist:', error);
      throw new Error('Error adding song to playlist');
    }
  }  

  async getSong(playlistId, songId) {
    try {
      const playlist = await Playlist.findById(playlistId);
      if (!playlist) {
        throw new Error('Playlist not found');
      }
      const song = playlist.songs.id(songId);
      if (!song) {
        throw new Error('Song not found');
      }

      // Increment the playCount
      song.playCount += 1;
      await playlist.save();

      return song;
    } catch (error) {
      throw new Error('Error retrieving song');
    }
  }


  async getAllSongs(playlistId) {
    try {
      const playlist = await Playlist.findById(playlistId);
      if (!playlist) {
        throw new Error('Playlist not found');
      }
      return playlist.songs;
    } catch (error) {
      throw new Error('Error retrieving songs');
    }
  }

  async getSortedSongsByPlayCount(playlistId) {
    try {
      const playlist = await Playlist.findById(playlistId);
      if (!playlist) {
        throw new Error('Playlist not found');
      }
      const sortedSongs = playlist.songs.sort((a, b) => b.playCount - a.playCount);
      return sortedSongs;
    } catch (error) {
      throw new Error('Error retrieving sorted songs');
    }
  }
}

module.exports = PlaylistService;
