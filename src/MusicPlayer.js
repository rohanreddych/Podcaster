import React, { Component } from "react";
//import logo from "../image.png";

export default class MusicPlayer extends Component {
	constructor(props) {
		super(props);
	}

	playAudio() {
		const audioEl = document.getElementsByClassName("audio-element")[
			this.props.id
		];
		audioEl.play();
	}
	pauseAudio() {
		const audioEL = document.getElementsByClassName("audio-element")[
			this.props.id
		];
		audioEL.pause();
	}
	consolo() {
		console.log(document.getElementsByClassName("audio-element"));
	}

	render() {
		return (
			<div className="container">
				<button className="btn" onClick={this.playAudio.bind(this)}>
					{/* <span>Play </span> */}
					<i className="fa fa-play"></i>
				</button>
				<button className="btn" onClick={this.pauseAudio.bind(this)}>
					{/* <span>Pause</span> */}
					<i className="fa fa-pause"></i>
				</button>
				<p id="trackname">Song Name appears here</p>
				<p id="artistname">Artist Name appears here</p>

				<audio className="audio-element">
					<source src={this.props.name}></source>
				</audio>
				{/* <img id="logo" src={logo} alt="sample" /> */}
			</div>
		);
	}
}
