

function PigCard({pig}) {

// console.log(pig)

const {name, greased, weight, image, specialty, "highest medal achieved": medal} = pig

    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="piggy"/>
        </div>
    )
};

export default PigCard;