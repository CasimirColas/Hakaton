import React from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import "./moncard.css";

function MonCard({ monuments }) {
    const [monument, setMonument] = useState();
    const [card, setCard] = useState(true);



    function jecpas() {
        setMonument(monuments);
        setCard(false)
    }

    return (
        <div>
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