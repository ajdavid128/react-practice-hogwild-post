import React from "react";
import Nav from "./Nav";
import { useState, useEffect } from "react";

import hogs from "../porkers_data";
import PigCards from "./PigCards";

function App() {

	const [pigFetch, setPigFetch] = useState([]);

	const pigCardArray = hogs.map((pig) => {
		return <PigCards key={pig.id} {...pig} /> 
	}) 

	return (
		<div className="App">
			<Nav />
		</div>
	);
}

export default App;
