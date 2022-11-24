import {useState} from 'react';
import RegCard from '../RegCard/RegCard';

const LCard = ({id,nom,img}) => {
    const [displayCard, setDisplayCard] = useState(false);
    function click() {
        setDisplayCard(!displayCard)
    }
    return (
        <div className='region-img' style={{background: `url(${img})`}} onClick={click}>
            <h3>{nom}</h3>
            {displayCard?<RegCard id={id}/>:null}
        </div>
    );
};

export default LCard;