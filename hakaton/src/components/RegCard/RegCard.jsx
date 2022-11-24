import React from 'react';
import "./regcard.css";
import data from "../../data/data";
import MonCard from '../MonCard/MonCard';



function RegCard() {

    const region = data.Region.filter(e => e.id === 1);


    function buttonMenu() {

        return {

        };
    }

    return (

        <div>
            <div className='regCard' >
                <div className="buttonMenu" onClick={buttonMenu}></div>
                <h4>{region[0].name}</h4>
                <img src={region[0].url} alt="" />
                <p>{region[0].desc}</p>
            </div>
            <div>
                {data.Touristique.map((monuments, index) =>
                    (<MonCard key={index} monuments={monuments} />))}
            </div>
        </div>
    );
};

export default RegCard;