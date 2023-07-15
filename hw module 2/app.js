const express = require('express');
const connectToDatabase = require('./config/db');
const playlistController = require('./controllers/playlistController');

const app = express();
const port = 3000;

app.use(express.json());

// Connect to MongoDB
connectToDatabase();

// Playlist routes
const controller = new playlistController();


app.post('/playlist', controller.createPlaylist);
app.post('/playlist/song', controller.addSong);
app.get('/playlist/:playlistId/songs', controller.getAllSongs);
app.get('/playlist/:playlistId/songs/sorted', controller.getSortedSongsByPlayCount);
app.get('/playlist/:playlistId/songs/:songId', controller.getSong);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
