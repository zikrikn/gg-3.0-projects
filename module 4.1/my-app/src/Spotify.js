import React, { useState } from "react";
import "./App.css";
import "./Spotify.css";

function App() {
  const [songs, setSongs] = useState([
    "Adele - All of Me",
    "Adele - Hello",
    "Adele - Someone Like You",
    "Adele - Rolling in the Deep",
  ]);

  const [mostPlayedSongs, setMostPlayedSongs] = useState(["Adele - All of Me"]);

  const [newSong, setNewSong] = useState("");

  const handleAddSong = (event) => {
    event.preventDefault();
    if (newSong.trim() !== "") {
      setSongs([...songs, newSong]);
      setNewSong("");
    }
  };

  const handleAddToMostPlayed = (song) => {
    setMostPlayedSongs((prevSongs) => [...prevSongs, song]);
  };

  return (
    <div className="container">
      <h1>Spotify</h1>
      <h2>Playlist</h2>
      <div className="playlist">
        <h2>Playlist</h2>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              {`${index + 1}. ${song}`}{" "}
              <button onClick={() => handleAddToMostPlayed(song)}>
                Add to Most Played
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="most-played-songs">
        <h2>Most played songs</h2>
        <ul>
          {mostPlayedSongs.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </div>

      <div className="add-song">
        <h2>Add song</h2>
        <form onSubmit={handleAddSong}>
          <input
            type="text"
            name="song"
            placeholder="Enter song name"
            value={newSong}
            onChange={(e) => setNewSong(e.target.value)}
          />
          <input type="submit" name="submit" value="Add song" />
        </form>
      </div>
    </div>
  );
}

export default App;
