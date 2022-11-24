import React from 'react';


function Card({ monument }) {

    function cardabsolute() {
        return {
            backgroundColor: "rgb(0,0,0)",
            color: "white",
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
            <div> {monument.name}</div>
            <img src={monument.url} alt="" />
            <div> {monument.desc}</div>

        </div>

    );
};

export default Card;
