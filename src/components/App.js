import React from "react";
import Nav from "./Nav";
import { useState, useEffect } from "react";

import hogs from "../porkers_data";
import PigCards from "./PigCards";

function App() {

	console.log(hogs)

	const pigCardArray = hogs.map((pig) => {
		return <PigCards key={pig.name} {...pig} /> 
	}) 

	return (
		<div className="App">
			<Nav />
			{pigCardArray}
		</div>
	);
}

export default App;
