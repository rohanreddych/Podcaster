import React, { useState, useEffect } from "react";

const Musicplayer = (props) => {
	const [isPlaying, setisPlaying] = useState(false);
	return (
		<div>
			<button onClick={setisPlaying(true)}>
				<span>Play</span>
			</button>
			<button>
				<span>Pause</span>
			</button>

			<audio>
				<source src={props.name}></source>
			</audio>
		</div>
	);
};
