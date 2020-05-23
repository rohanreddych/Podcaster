import React from "react";
import helloImg from "../content/HelloThere.jpg";
import MusicPlayer from "./MusicPlayer";

export const NotMonetised = () => {
	return (
		<div>
			<div className="welcome">
				<img id="hello" src={helloImg} alt="Hello" />
				<div
					style={{
						float: "right",
						paddingRight: 10 + "%",
						paddingTop: 8 + "%",
						alignContent: "center",
						alignItems: "center",
						fontSize: 20 + "px",
					}}
					id="welcome-text"
				>
					<p> You have not enabled web monetization. Enjoy the free content</p>
					<p>
						{" "}
						Become a member{" "}
						<a href="https://coil.com" className="blue-button">
							VISIT COIL
						</a>
					</p>
					<p>Features</p>
					<ul>
						<li> Exclusive Premium Content. </li>
						<li>No Ads. </li>
						<li>Privacy Protection.</li>
					</ul>
				</div>
			</div>
			<div className="content">
				<MusicPlayer
					name="https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"
					id={0}
				></MusicPlayer>
				<MusicPlayer
					name="https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav"
					id={1}
				></MusicPlayer>
				<MusicPlayer
					name="https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav"
					id={2}
				></MusicPlayer>
				<MusicPlayer
					name="https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav"
					id={3}
				></MusicPlayer>
			</div>
		</div>
	);
};

export default NotMonetised;
