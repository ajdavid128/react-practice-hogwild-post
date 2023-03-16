import PigDetails from "./PigDetails";
import {useState} from 'react'

function PigCard({pig}) {

    const [showDetails, setShowDetails] = useState(false)

    // console.log(pig)

    const {name, greased, weight, image, specialty, "highest medal achieved": medal} = pig

    const handleDisplayInfo = () => {
        setShowDetails(!showDetails);
    };
    // console.log(showDetails)

    return (
        <div onClick={handleDisplayInfo}>
            <h1>{name}</h1>
            <img src={image} alt="piggy"/>
            {showDetails ? <PigDetails pig={pig}/> : null}
        </div>
    )
};

export default PigCard;