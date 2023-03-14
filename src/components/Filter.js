

function Filter({hogs}) {

    const handleChange = () => {
        console.log("changing???")
    }

    return (
        <div>
            <label>Greasy Piggies</label>
            <input 
                type="checkbox"
                onChange={handleChange}
                />
        </div>
    )
};

export default Filter;