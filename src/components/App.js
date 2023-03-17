import React from "react";
import Nav from "./Nav";
import PigList from './PigList'
import Filter from "./Filter";

import Form from "./Form";
import { useState } from "react";

import hogs from "../porkers_data";


function App() {

	const [names, setNames] = useState([])

	const onFirstLastName = (formsubmit) => {
		setNames((newInfo) => [...newInfo, formsubmit])
	}
	console.log(names)

	const nameArray = names.map((name) => {
		return <div>
			<h1>Hi, I'm {name.firstName} {name.lastName}!</h1>
		</div>
	})

	return (
		<div className="App">
			<Nav />
			<Form onFirstLastName={onFirstLastName}/>
			<div>
				{nameArray}
			</div>
			<Filter />
			<PigList hogs={hogs} />
		</div>
	);
}

export default App;
