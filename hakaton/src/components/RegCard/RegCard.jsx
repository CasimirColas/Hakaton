import React from 'react';
import "./regcard.css";
import data from "../../data/data";
import Card from '../Card/Card';
import MonCard from '../MonCard/MonCard';
import { useState } from 'react';

function RegCard() {
    const [monument, setMonument] = useState(true);

    const region = data.Region.filter(e => e.id === 1);


    function buttonMenu() {

        return {

        };
    }

    function buttonMonCard() {
        setMonument(false)
        return {
        };
    }


    return (

        <div className='regCard' >

            <div className="buttonMenu" onClick={buttonMenu}></div>


            <h4>{region[0].name}</h4>
            <img src={region[0].url} alt="" />
            <p>{region[0].desc}</p>

            <div className="buttonMonCard" onClick={buttonMonCard}>
                {
                    monument ?
                        (
                            data.Touristique.map((monuments, index) =>
                                (<Card key={index} monuments={monuments} />))

                        )
                        :
                        (
                            <MonCard />
                        )

                }
            </div>



        </div >
    );
};

export default RegCard;