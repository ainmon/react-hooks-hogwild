import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";



function App() {
	const [hogArray, setHogArray] = useState(hogs)
	const [tile, setTile] = useState(false)

	function handleTileClick(){
		setTile((tile) => !tile)
	}

	function handleHogFilter(){

	}

	function handleHogSort(){

	}

	// Allow the user to filter the hogs that are greased
	// Allow the user to sort the hogs based on name or weight

	return (
		<div className="App">
			<Nav hogs={hogArray} filterHog={handleHogFilter}/>
			<HogList hogs={hogs} 
			displayTile={tile} 
			showInfo={handleTileClick}/>
		</div>
	);
}

export default App;
