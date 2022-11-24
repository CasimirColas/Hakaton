import React from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import "./moncard.css";

function MonCard({ monuments }) {
    const [monument, setMonument] = useState();
    const [card, setCard] = useState(true);
    const [btnback, setBtnback] = useState(true);



    function jecpas() {
        setMonument(monuments);
        setCard(false);
        setBtnback(false);
    }


    function btnbackmoncard() {
        setBtnback(true);
        setCard(true);
    }

    return (
        <div>
            {btnback ? null : (<div className='btnBack' onClick={btnbackmoncard}>←</div>)}
            {card ? (
                <div>
                    <div onClick={jecpas} >
                        <div>{monuments.name}</div>
                        <img src={monuments.url} alt="" />
                    </div>
                </div>
            ) : (
                <div>
                    <Card monument={monument} />
                </div>)
            }
        </div>
    );
};

export default MonCard;