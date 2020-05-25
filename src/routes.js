
import React from "react";
import { Switch, Route } from "react-router-dom";

import Albums from "./views/albums";
import Player from "./views/player";
import Tracks from "./views/tracks";

function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Albums} />
			<Route path="/player/:id" exact component={Player} />
			<Route path="/tracks/:id" exact component={Tracks} />
		</Switch>
	);
}

export default Routes;
