import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  isPlaying,
  audioRef,
  setSongs,
}) => {
  const songUpdateHandler = async () => {
    // map over for checking songs
    await setCurrentSong(song);
    const newSongs = songs.map((newSong) => {
      if (newSong.id === song.id) {
        return {
          ...newSong,
          active: true,
        };
      } else {
        return {
          ...newSong,
          active: false,
        };
      }
    });
    await setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songUpdateHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
