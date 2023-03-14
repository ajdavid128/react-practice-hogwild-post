

function PigDetails({pig}) {

    const {name, weight, image, specialty, greased, "highest medal achieved": medal} = pig

    return (
        <div>
            <h4>Specialty: {specialty}</h4>
            <h4>Weight: {weight}</h4>
            <h4>Highest Medal Acheived: {medal}</h4>
            {greased ? <h4>This is a greasy little piggy</h4> : <h4>This piggy is dry AF</h4>}
        </div>
    )
};

export default PigDetails;