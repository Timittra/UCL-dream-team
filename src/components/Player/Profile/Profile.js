import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap';
import './Profile.css';

const Profile = (props) => {
    //destructuring 
    const { name, image, team_name, position } = props.player;
    const [btnDisable, setBtnDisable] = useState(false);

    //using bootstrap card for showing player information and font awesome for icon in the button
    return (
        <div className='profile'>
            <Card className="card-part">
                <Card.Img variant="top" className='player-img' src={image} />
                <Card.Body>
                    <h1>This is {name}</h1>
                    <h2>He is from {team_name}</h2>
                    <h3>He plays for the {position} position</h3>
                </Card.Body>
            </Card>
            <button
                className={btnDisable ? "add-btn disabled" : "add-btn"}
                onClick={() => {
                    props.handleAddPlayer(props.player);
                    setBtnDisable(true);
                }
                }
            >
                <FontAwesomeIcon icon={faFutbol} /> Add {name}</button>
        </div>
    );
};

export default Profile;