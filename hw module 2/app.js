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

app.get("/", (req, res) => {
  res.json({ message: "Welcome to our application." });
});
app.post('/playlist', controller.addSong);
app.get('/playlist/:id', controller.getSong);
app.get('/playlist', controller.getAllSongs);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
