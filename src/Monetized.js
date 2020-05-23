import React from "react";
import MusicPlayer from "./MusicPlayer";
import photo from "../image.png";

export const Monetized = () => {
	return (
		<div>
			<div className="premwelcome">
				<img src={photo} style={{ width: 50 + "%" }} />
			</div>
			<div style={{ fontSize: 25 + "px" }}>
				Welcome you have Web Monetization enabled enjoy our exclusive premium
				content
			</div>
			<div className="content1">
				<MusicPlayer
					name="https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg10.wav"
					id={0}
				></MusicPlayer>
				<MusicPlayer
					name="https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav"
					id={1}
				></MusicPlayer>
				<MusicPlayer
					name="https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther60.wav"
					id={2}
				></MusicPlayer>
				<MusicPlayer
					name="https://www2.cs.uic.edu/~i101/SoundFiles/taunt.wav"
					id={3}
				></MusicPlayer>
				<MusicPlayer
					name="https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"
					id={4}
				></MusicPlayer>
				<MusicPlayer
					name="https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav"
					id={5}
				></MusicPlayer>
				<MusicPlayer
					name="https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav"
					id={6}
				></MusicPlayer>
				<MusicPlayer
					name="https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav"
					id={7}
				></MusicPlayer>
			</div>
		</div>
	);
};

export default Monetized;
