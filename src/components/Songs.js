import React from 'react';
const Songs = ({currentSong}) => {
    return (
        <div className="song-container">
            <img src={currentSong.cover} alt="album"></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
};
export default Songs;