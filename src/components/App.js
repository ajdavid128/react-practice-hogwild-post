import React from "react";
import Nav from "./Nav";
import PigList from './PigList'
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {

	console.log(hogs)

	return (
		<div className="App">
			<Nav />
			<Filter />
			<PigList hogs={hogs} />
		</div>
	);
}

export default App;
