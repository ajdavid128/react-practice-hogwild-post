

function PigCards({pig}) {

    // console.log()
    const {name, weight, image, specialty, greased, "highest medal achieved": medal} = pig

    const handleInfo = () => {
        return(
            <div>
                <h3>Specialty: {specialty}</h3>
                <h3>Weight: {weight}</h3>
                <h3>Highest Medal Acheived: {medal}</h3>
                {greased ? "This is a greasy little piggy" : "This piggy is dry AF"}
            </div>
        )
    }

    return (
        <div onClick={handleInfo} className="ui eight wide column">
            <h1>{name}</h1>
            <img src={image} alt="piglet"/>
        </div>
    )
};

export default PigCards;