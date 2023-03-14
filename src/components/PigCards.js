

function PigCards({name, greased, image, specialty, weight}) {

    // console.log("pig:", name)

    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="piglet"/>
        </div>
    )
};

export default PigCards;