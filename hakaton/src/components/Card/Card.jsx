import React from 'react';
import "./card.css";

function Card({ monuments }) {


    function jecpas() {
        console.log(monuments);
    }

    return (
        <div onClick={jecpas} >
            <div>{monuments.name}</div>
            <img src={monuments.url} alt="" />
        </div>
    );
};

export default Card;
