import React from "react";
import LibrarySong from "./components/LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  setIsPlaying,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            isPlaying={isPlaying}
            key={song.id}
            setCurrentSong={setCurrentSong}
            song={song}
            songs={songs}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
