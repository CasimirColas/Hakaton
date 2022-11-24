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

    return (

        <div>

            {
                monument ?
                    (


                        <div className='regCard' >

                            <div className="buttonMenu" onClick={buttonMenu}></div>


                            <h4>{region[0].name}</h4>
                            <img src={region[0].url} alt="" />
                            <p>{region[0].desc}</p>

                            <div className="buttonMonCard">

                                {data.Touristique.map((monuments, index) =>
                                    (<Card key={index} monuments={monuments} />))}

                            </div>
                        </div>
                    )
                    :
                    (
                        <MonCard />
                    )

            }

        </div>
    );
};

export default RegCard;