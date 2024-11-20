import React from "react";
import { LeagueProvider } from "./LeagueContext";
import LeaguePage from "./LeaguePage";

function App() {
  return (
    <LeagueProvider>
      <div className="App">
        <LeaguePage />
      </div>
    </LeagueProvider>
  );
}

export default App;
