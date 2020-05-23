import { useEffect, useState } from "react";
//import { ReactDOM } from "react-dom";

export const Monetization = () => {
	const [isMonetized, setIsMonetized] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	//var state;
	useEffect(() => {
		if (!document.monetization) {
			setIsLoading(false);
			setIsMonetized(false);
			return;
		}

		var state = document.monetization;

		if (state === "stopped") {
			setIsLoading(false);
			setIsMonetized(false);
		}

		document.monetization.addEventListener("monetizationstart", () => {
			setIsMonetized(true);
			setIsLoading(false);
		});
	}, []);

	return { isMonetized, isLoading };
};
