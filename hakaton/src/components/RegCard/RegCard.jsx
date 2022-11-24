import React from 'react';
import "./regcard.css";

function RegCard() {

    const data =
    {
        "Region": [
            {
                "id": 1,
                "name": "GrandEst",
                "url": "http://images.innoveduc.fr/php_parcours/cp2/chocolate.png",
                "desc": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
            },
            {
                "id": 2,
                "name": "IleDeFrance",
                "url": "http://images.innoveduc.fr/php_parcours/cp2/chocolate.png",
                "des": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
            }
        ]
    }


    function buttonMenu() {
        console.log('clic Vers menu')
        return {

        };
    }

    function buttonMonCard() {
        console.log('clic Vers monuments')
        return {

        };
    }

    return (
        <div className='regCard' >

            <div className="buttonMenu" onClick={buttonMenu}></div>

            <div className="buttonMonCard" onClick={buttonMonCard}></div>

        </div >
    );
};

export default RegCard;