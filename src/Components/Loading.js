import React from "react";

export default function Loading() {
	return (
		<div
			style={{
				minHeight: "100vh",
				background: "black",
				color: "white",
			}}
		>
			<h1
				style={{
					textAlign: "center",
					position: "absolute",
					top: "50vh",
					left: "50vw",
                    transform: "translate(-50%,-50%)",
                    fontWeight:"100"
				}}
			>
				LOADING...
			</h1>
		</div>
	);
}
