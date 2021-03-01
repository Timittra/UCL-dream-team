import React from 'react';
import './Names.css';

const Names = (props) => {
    
    return (
        <div className='new-players'>
            <h3> <span className='selected-players'>Selected Player(s)</span></h3>
            <p><small> {props.name}</small></p>
        </div>
    );
};

export default Names;