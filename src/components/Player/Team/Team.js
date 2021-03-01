/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Names from '../Names/Names';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const playersAdded = props.team;
    let names = '';
    let newCollection = [];
    let totalSalary = 0;
    let count = 0;

    let players = playersAdded.reduce((total, playerAdded) => ({
        ...total, [playerAdded.name]: playerAdded.id, [playerAdded.salary]: playerAdded.id
    }), []
    );

    const [player, setPlayer] = useState([]);

    useEffect(() => {
        setPlayer(players);
    }, []);

    playersAdded.forEach(function (players ){
        for(var key in players){
            if(key == 'name'){
                names = players[key];
            }
            if(key == "salary"){
                totalSalary = totalSalary + players[key];
                count = count + 1;
            }

        }
         newCollection.push(names);
    });

    //using font awesome for header and counter of players. 
    return (
        <div>
            <h1 className='team-title'>UCL Dream Team<FontAwesomeIcon icon={faFutbol} /></h1>
            <Names name={' '+newCollection}></Names>
            <h5>Total Selected Player(s) <FontAwesomeIcon icon={faUserCircle}/> : {count}</h5>
            <h4>Total Budget Required for Them: ${totalSalary}</h4>
        </div>
    );
};

export default Team;