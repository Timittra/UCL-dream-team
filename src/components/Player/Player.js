/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import playerData from '../../playerData/playerData';
import Profile from './Profile/Profile';
import Team from './Team/Team';
import './Player.css';

const Player = () => {
    const playersInformation = playerData; 
    const [players, setPlayers] = useState([]);
    const [playersAdded, setPlayersAdded] = useState([]);

    useEffect(() =>{
        setPlayers(playersInformation);
    }, []);

    const handleAddPlayer = (players) => {
        const newPlayer = [...playersAdded, players]; 
        setPlayersAdded(newPlayer); 
    }

    return (
        <div className="player-container">
            <div className="profile-container">
                {
                    players.map(player => <Profile 
                        handleAddPlayer={handleAddPlayer}
                        player={player} key={player.id}></Profile>)
                }
            </div>
            <div className="team-container"> 
                <Team team={playersAdded}> </Team>
            </div>
        </div>
    );
};

export default Player;