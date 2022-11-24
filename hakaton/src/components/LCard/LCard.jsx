import React from 'react';

const LCard = ({nom,img}) => {
    return (
        <div className='region-img' style={{background: `url(${img})`}}>
            <h3>{nom}</h3>
        </div>
    );
};

export default LCard;