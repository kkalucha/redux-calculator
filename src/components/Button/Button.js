import React from "react";

import "./Button.css";

export default function CalculatorButton( { backgroundColor, callback, color, value } ) {
	return (
		<button
			onClick={ callback }
			className={ `calculator-button` }
			style={ { backgroundColor, color } }
		>
			{ value }
		</button>
	);
}