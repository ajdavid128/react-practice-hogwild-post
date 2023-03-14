

function PigDetails() {

    
    return (
        <div>
            <h3>Specialty: {specialty}</h3>
            <h3>Weight: {weight}</h3>
            <h3>Highest Medal Acheived: {medal}</h3>
            {greased ? "This is a greasy little piggy" : "This piggy is dry AF"}
        </div>
    )
};

export default PigDetails;