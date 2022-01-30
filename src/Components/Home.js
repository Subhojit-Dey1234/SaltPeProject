import React from "react";
import imageHead from '../Images/Head.png'
import "../Mobile.css";
import "../App.css";
export default function Home() {
	return (
		<div className="homeContainer">
			<div className="home">
				<div>
					<h1>We're the New Era of Banking</h1>
					<button onClick={()=>{
						window.location.href = "/login"
					}}>Login</button>
				</div>
				<div>
					<img src={imageHead} alt="Head"/>
				</div>
			</div>
		</div>
	);
}
