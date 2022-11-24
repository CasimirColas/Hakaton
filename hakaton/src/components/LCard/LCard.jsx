import React from 'react';

const LCard = ({nom,img}) => {
    return (
        <div>
            <h3>{nom}</h3>
            <img src={img} alt='not found?'/>
        </div>
    );
};

export default LCard;