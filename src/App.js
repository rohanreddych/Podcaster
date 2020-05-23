import React from "react";
import ReactDOM from "react-dom";
import { Monetization } from "./isMonetized";
import { NotMonetised } from "./notMonetised";
import { Monetized } from "./Monetized";

const App = () => {
	const { isMonetized, isLoading } = Monetization();
	if (isLoading) {
		return (
			<div className="center">
				<div className="loader"></div>
				<p> Checking if you have web monetization enabled </p>
			</div>
		);
	} else if (isMonetized) {
		return <Monetized />;
	} else {
		return <NotMonetised />;
	}
};

ReactDOM.render(<App />, document.getElementById("root"));
