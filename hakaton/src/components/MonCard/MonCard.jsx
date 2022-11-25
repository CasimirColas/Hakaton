import React from 'react';
import "./moncard.css";
import data from '../../data/data';

function MonCard({ id, onClick }) {
    return (
        <div>
            <div className='btnmoncard' onClick={onClick}>X</div>
            <div className='monCard'>
                <h3 className='cardName'>{data.Touristique[id - 1].name}</h3>
                <img className='imgMonument' src={data.Touristique[id - 1].url} alt="not found" />
                <p className='cardDesc'>{data.Touristique[id - 1].desc}</p>
            </div>
        </div>
    )
};

export default MonCard;