import React from "react";
import Nav from "./Nav";
import { useState, useEffect } from "react";

import hogs from "../porkers_data";
import PigCards from "./PigCards";

function App() {

	console.log(hogs)

	const pigCardArray = hogs.map((pig) => {
		return <PigCards key={pig.name} pig={pig} /> 
	}) 

	return (
		<div className="App">
			<Nav />
			<div className="ui grid container">
				{pigCardArray}
			</div>
		</div>
	);
}

export default App;
