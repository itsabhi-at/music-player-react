import React from "react";
import LibrarySong from "./components/LibrarySong";

const Library = ({ songs, setCurrentSong, setIsPlaying }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setIsPlaying={setIsPlaying}
            key={song.id}
            setCurrentSong={setCurrentSong}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
