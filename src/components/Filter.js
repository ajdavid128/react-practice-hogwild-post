

function Filter({hogs, greased, setGreased, setFilter, filter}) {

    
    const handleChange = () => {
        console.log("changing???")
    }

    const handleSearch = () => {
        
    }

    return (
        <div>
            <label>Greasy Piggies</label>
            <input 
                type="checkbox"
                onChange={handleChange}
                />
            <br/>
            <input 
                type="text"
                placeholder="search"
                onChange={handleSearch}
            />
        </div>
    )
};

export default Filter;