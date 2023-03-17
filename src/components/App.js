import React from "react";
import Nav from "./Nav";
import PigList from './PigList'
import Filter from "./Filter";

import Form from "./Form";

import hogs from "../porkers_data";


function App() {

	const onFirstLastName = (newInfo) => {
		
	}


	return (
		<div className="App">
			<Nav />
			<Form />
			<div>

			</div>
			<Filter />
			<PigList hogs={hogs} />
		</div>
	);
}

export default App;
