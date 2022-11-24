import React from 'react';
import "./card.css";

function Card({ monuments }) {

    return (
        <div>
            <div>{monuments.name}</div>
            <img src={monuments.url} alt="" />
            <div>{monuments.desc}</div>
        </div>
    );
};

export default Card;
