import PigCard from "./PigCard";

function PigList({hogs}) {

    const mappedPigArray = hogs.map((pig) => {
        return <PigCard key={pig.name} pig={pig}/>
    })


    return (
        <>
        {mappedPigArray}
        </>
    )
};

export default PigList;