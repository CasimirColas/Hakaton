import React from 'react';
import "./card.css";

function Card({ monument }) {

    function cardabsolute() {
        return {
            backgroundColor: "white",
            color: "black",
            width: "100%",
            heigh: "100%",
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
        }
    }

    return (

        <div className="card" style={cardabsolute()}>
            <div className='cardName'>{monument.name}</div>
            <img className='imgMonument' src={monument.url} alt="" />
            <div className='cardDesc'>{monument.desc}</div>
        </div>

    );
};

export default Card;
