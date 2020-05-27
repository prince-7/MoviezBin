import React from 'react';
import Homepage from './Homepage';
import Result from './Result';
import Watchlist from './Watchlist';
import {Route} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';

const App = () => {
	return(
		<div>
		<BrowserRouter basename="/MoviezBin">
			<Route exact path = "/Homepage" component={Homepage} />
			<Route exact path = "/Result" component={Result} />
			<Route exact path ="/Watchlist" component={Watchlist}/>
		</BrowserRouter>
		</div>
	);
}
export default App;
