import React, { Component } from "react";
import { connect } from "react-redux";

import "./Calculator.css";

import Button from "./Button/Button";
import Display from "./Display/Display";

import {
			clear,
			enterNum,
			evaluate,
			percentage,
			setOp,
			toggleNeg,
			sqrt,
			log,
			mAdd,
			MR
		}	
		from "../store/actions";
import { operators } from "../utils/constants"

export class Calculator extends Component {
	render() {
		const {
				currentValue,
				storedValue,
				operator,
				clear,
				enterNum,
				evaluate,
				percentage,
				setOp,
				toggleNeg,
				sqrt,
				log,
				mAdd,
				MR
			} = this.props;

		const numberButtons = [ 7, 8, 9, 4, 5, 6, 1, 2, 3, 0 ].map( number => (
			<Button
				callback={ () => enterNum( number ) }
				key={ number }
				value={ number }
			/>
		) );
		return (
			<main className="calculator">
				<Display 
					value={ currentValue }
					mem={ storedValue === 0 ? "" : "M" }
					operator={ {
						ADD: "+ ",
						SUBTRACT: "- ",
						DIVIDE: "/ ",
						MULTIPLY: "X ",
						EXP: "^ ",
						DEFAULT: ""
					}[operator] }
				/>
				<div className="calculator__buttons-wrapper">
					<section className="calculator__left-buttons">
						<Button
							backgroundColor="#d6d6d6"
							callback={ () => clear() }
							value="AC"
						/>
						<Button
							backgroundColor="#d6d6d6"
							callback={ () => toggleNeg() }
							value="+/-"
						/>
						<Button
							backgroundColor="#d6d6d6"
							callback={ () => percentage() }
							value="%"
						/>
						{ numberButtons }
						<Button
							callback={ () => enterNum (".") }
							value="."
						/>
					</section>
					<section className="calculator__operator-buttons">
						<Button
							backgroundColor="#d6d6d6"
							callback={ () => mAdd( currentValue ) }
							value="M+"
						/>
						<Button
							backgroundColor="#f5923e"
							callback={ () => setOp( operators.ADD ) }
							color="#ffffff"
							value="+"
						/>
						<Button
							backgroundColor="#d6d6d6"
							callback={ () => MR() }
							value="MR"
						/>
						<Button
							backgroundColor="#f5923e"
							callback={ () => setOp( operators.SUBTRACT ) }
							color="#ffffff"
							value="-"
						/>
						<Button
							backgroundColor="#f5923e"
							callback={ () => setOp( operators.EXP ) }
							color="#ffffff"
							value="^"
						/>
                        <Button
                            backgroundColor="#f5923e"
                            callback={ () => setOp( operators.MULTIPLY ) }
                            color="#ffffff"
                            value="x"
                        />
                        <Button
							backgroundColor="#f5923e"
							callback={ () => sqrt() }
							color="#ffffff"
							value="√"
						/>
						<Button
							backgroundColor="#f5923e"
							callback={ () => setOp( operators.DIVIDE ) }
							color="#ffffff"
							value="÷"
						/>
						<Button
							backgroundColor="#f5923e"
							callback={ () => log() }
							color="#ffffff"
							value="LOG"
						/>
						<Button
							backgroundColor="#f5923e"
							callback={ () => evaluate() }
							color="#ffffff"
							value="="
						/>
					</section>
				</div>
			</main>
		);
	}
}

function mapStateToProps( state ) {
	return state;
}

export default connect( mapStateToProps, {
	clear,
	enterNum,
	evaluate,
	percentage,
	setOp,
	toggleNeg,
	sqrt,
	log,
	mAdd,
	MR
} )( Calculator );