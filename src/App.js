// imports here
import React, { useState } from "react";
// import styles
import "./styles/app.scss";
// import components
import Player from "./components/Player";
import Songs from "./components/Songs";
//import utils
import data from "./util/data";
import Library from "./Library";

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Songs currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
