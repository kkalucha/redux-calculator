import React from "react";

import "./Display.css";

export default function Display( { operator = "", mem = "", value = 0} ) {
	return (
		<div className="display">
			<div className="display__status">
				{ operator }
				{ mem }
			</div>
			{ value }
		</div>
	);
}