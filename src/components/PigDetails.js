

function PigDetails({pig}) {

    const {name, greased, weight, image, specialty, "highest medal achieved": medal} = pig

    return (
        <div>
            <h3>Specialty: {specialty}</h3>
            <h3>Weight: {weight}</h3>
            <h3>Medal: {medal}</h3>
            <h3>Is this a greasy little pig?: {greased ? "Yup" : "Nope"}</h3>
        </div>
    )
};

export default PigDetails;
