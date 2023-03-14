import React from "react";
import Nav from "./Nav";
import { useState, useEffect } from "react";

import hogs from "../porkers_data";
import PigCards from "./PigCards";
import Filter from "./Filter";

function App() {

	

	console.log(hogs)

	const pigCardArray = hogs.map((pig) => {
		return <PigCards key={pig.name} pig={pig} /> 
	}) 

	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav />
			</div>
			<div className="sixteen wide column centered">
				<Filter hogs={hogs}/>
			</div>
			<div className="sixteen wide column centered">
				{pigCardArray}
			</div>
		</div>
	);
}

export default App;
