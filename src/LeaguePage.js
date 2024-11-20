import React, { useState } from "react";
import { useLeague } from "./LeagueContext";

const LeaguePage = () => {
  const { songs, users, currentTurn, addUser, pickSong, round } = useLeague();
  const [userName, setUserName] = useState("jroven");

  const handlePickSong = (songId) => {
    pickSong(songId, users[currentTurn].id);
  };

  const handleAddUser = () => {
    if (userName) {
      addUser(userName);
      setUserName("");  // Clear the input after adding
    }
  };

  const myOnChange = (e) => {
    setUserName(e.target.value)
    console.log(e.target.value)
  };

  return (
    <div>
      <h1>Eurovision Fantasy League</h1>
      <h3>Round {round}</h3>

      <div>
        <h3>Players</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <input
          type="text"
          value={userName}
          onChange={(e) => myOnChange(e)}
          placeholder="Enter your name"
        />
        <button onClick={handleAddUser}>Add Player</button>
      </div>

      <h3>Current Turn: {users[currentTurn]?.name}</h3>

      <div>
        <h3>Pick a Song</h3>
        <ul>
          {songs.map((song) =>
            !song.isPicked ? (
              <li key={song.id}>
                <button onClick={() => handlePickSong(song.id)}>
                  {song.name} - {song.artist} ({song.country})
                </button>
              </li>
            ) : (
              <li key={song.id}>
                {song.name} - {song.artist} ({song.country}) - PICKED
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default LeaguePage;
