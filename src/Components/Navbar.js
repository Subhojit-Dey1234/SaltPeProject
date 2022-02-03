import React, { useEffect, useState } from "react";
import "../Mobile.css";
import "../App.css";
export default function Navbar() {
	const [isvisible, setIsVisible] = useState(true);
	window.onresize = function (e) {
		if (e.target.innerWidth < 1231) {
			console.log("Hello")
			setIsVisible(false);
		} else {
			setIsVisible(true);
		}
	};

	useEffect(()=>{
		if(window.innerWidth < 1231){
			setIsVisible(false)
		}
		else{
			setIsVisible(true)
		}
	},[])




	return (
		<div>
			<div className="hamburger" onClick={(e) => setIsVisible(!isvisible)}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className="navbar-blur"></div>
			<div
				className="navbar-container"
				style={{ display: isvisible ? "" : "none" }}
			>
				<div></div>
				<div className="navbar-1">
					<ul className="navbar">
						<a href="/">
							<li>Home</li>
						</a>
						<a href="/login">
							<li>Login</li>
						</a>
						<a href="/">
							<li>Socials</li>
						</a>
					</ul>
				</div>
				<div>
					<button className="navbar-button">Get the card</button>
				</div>
			</div>
		</div>
	);
}
