// import React from 'react';
// import Avatar from './Avatar'; // Import the Avatar component
// import './App.css';
// const user = {
//   name: 'Generasi Gigih 1',
//   avatarUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEiz7ox5zLNf3jqHQRqCmhyvN1AYB0GNjjfO56SDn9XNujHiU1a86PVmUcJv_KBmb0ubIBVt1ITxYnNq__jYcvRIXr-j2QqpABMfsA3k5iaVHzI_zQdWqagQg6QPXK113HkJe8FAQmn8o3SgRKrQDEwylALO4sEZhXnw1vaNM369f39OF8u1Jg7EpZCb6A',
// };

// const user2 = {
//   name: 'Generasi Gigih 2',
//   avatarUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEiz7ox5zLNf3jqHQRqCmhyvN1AYB0GNjjfO56SDn9XNujHiU1a86PVmUcJv_KBmb0ubIBVt1ITxYnNq__jYcvRIXr-j2QqpABMfsA3k5iaVHzI_zQdWqagQg6QPXK113HkJe8FAQmn8o3SgRKrQDEwylALO4sEZhXnw1vaNM369f39OF8u1Jg7EpZCb6A',
// };

// const App = () => {
//   return (
//     <>
//       <Avatar user={user} />
//       <Avatar user={user2} />
//     </>
//   );
// };

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

  const [mostPlayedSongs, setMostPlayedSongs] = useState([]);

  const [newSong, setNewSong] = useState("");

  const handleAddSong = (event) => {
    event.preventDefault();
    if (newSong.trim() !== "") {
      setSongs([...songs, newSong]);
      setNewSong("");
    }
  };

  const handleAddToMostPlayed = (song) => {
    setMostPlayedSongs((prevMostPlayedSongs) => {
      const songIndex = prevMostPlayedSongs.findIndex((s) => s.name === song);
  
      if (songIndex !== -1) {
        // Jika lagu sudah ada di mostPlayedSongs, update jumlah klik
        const updatedMostPlayedSongs = [...prevMostPlayedSongs];
        updatedMostPlayedSongs[songIndex] = {
          ...updatedMostPlayedSongs[songIndex],
          clicks: updatedMostPlayedSongs[songIndex].clicks + 1,
        };
        return updatedMostPlayedSongs;
      } else {
        // Jika lagu belum ada di mostPlayedSongs, tambahkan sebagai lagu baru
        return [...prevMostPlayedSongs, { name: song, clicks: 1 }];
      }
    });
  };  

  return (
    <div className="container">
      <h1>Spotify</h1>
      <div className="playlist">
        <h2>Playlist</h2>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              {`${index + 1}. ${song}`}{" "}
              <button onClick={() => handleAddToMostPlayed(song)}>
                Play the song
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="most-played-songs">
        <h2>Most played songs</h2>
        <ul>
          {mostPlayedSongs
            .sort((a, b) => b.clicks - a.clicks)
            .map((song, index) => (
              <li key={index}>
                {`${index + 1}. ${song.name} (Played ${song.clicks} times)`}
              </li>
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
