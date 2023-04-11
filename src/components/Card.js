import React from 'react';
import './Card.css';

const Card = ({stance, name, obstacle, tutorial}) => {
    return (
        <div className='card'>
            <h3>{stance} {name}</h3>
            <p>{obstacle}</p>
            <href>{tutorial}</href>
        </div>
    )
}

export default Card;