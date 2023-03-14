import PigDetails from "./PigDetails"
import { useState } from "react";

function PigCards({pig}) {

    const [showDetails, setShowDetails] = useState(false)
    // console.log()
    const {name, weight, image, specialty, greased, "highest medal achieved": medal} = pig

    const handleDetails = () => {
        setShowDetails(!showDetails)
    };

    return (
        <div onClick={handleDetails} className="ui eight wide column">
            <h1>{name}</h1>
            <img src={image} alt="piglet"/>
            {showDetails ? <PigDetails pig={pig}/> : null}
        </div>
    )
};

export default PigCards;