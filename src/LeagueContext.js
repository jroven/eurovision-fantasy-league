import React, { createContext, useState, useContext, useEffect } from "react";

// Create Context
const LeagueContext = createContext();

// Provider component
export const LeagueProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [users, setUsers] = useState([{ id: 100, name: "jonathan", picks: [] }]);
  const [currentTurn, setCurrentTurn] = useState(0); // Start with the first user
  const [round, setRound] = useState(1); // Round keeps track of how many rounds have passed

  useEffect(() => {
    // Initialize songs
    const initialSongs = [
      { id: 1, name: "Titan", artist: "Besa", country: "Albania", isPicked: false },
      { id: 2, name: "Jako", artist: "Ladaniva", country: "Armenia", isPicked: false },
      // Add all 37 songs here
    ];
    console.log("useEffect");
    setSongs(initialSongs);
  }, []);

  const addUser = (name) => {
    setUsers([...users, { id: users.length + 1, name, picks: [] }]);
  };

  const pickSong = (songId, userId) => {
    // Find the song by ID
    const song = songs.find((song) => song.id === songId);
    
    // Update the song and user picks
    if (song && !song.isPicked) {
      setSongs(songs.map((song) => 
        song.id === songId ? { ...song, isPicked: true } : song
      ));

      const user = users.find((user) => user.id === userId);
      user.picks.push(song);
      setUsers([...users]);

      // Move to the next turn
      setCurrentTurn((prevTurn) => (prevTurn + 1) % users.length);
      if (user.picks.length === songs.length / users.length) {
        setRound((prevRound) => prevRound + 1);
      }
    }
  };

  return (
    <LeagueContext.Provider
      value={{
        songs,
        users,
        currentTurn,
        addUser,
        pickSong,
        round
      }}
    >
      {children}
    </LeagueContext.Provider>
  );
};

// Custom hook to use the context
export const useLeague = () => useContext(LeagueContext);
