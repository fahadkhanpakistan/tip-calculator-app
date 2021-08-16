/** @format */

import { useState } from 'react';
import './App.css';
import BillCalculator from './components/BillCalculator/BIllCalculator';
import BillDisplay from './components/BillDisplay/BillDisplay';
import logo from './components/images/logo.svg';

function App() {
	const [userInput, setUserInput] = useState({
		bill: '',
		people: '',
		perPersonTipAmount: 0,
		totalTipAmount: 0,
	});

	//  METHODS
	const catchValuesUserInput = (e) => {
		setUserInput({
			...userInput,
			[e.target.name]: parseInt(e.target.value),
		});
	};
	const takePercentfromBtn = (percentage) => {
		// Calculating percentage
		const totalTipAmount = (percentage * userInput.bill) / 100;
		const perPersonTip = totalTipAmount / userInput.people;

		setUserInput({
			...userInput,
			totalTipAmount: totalTipAmount,
			perPersonTipAmount: perPersonTip.toFixed(2),
		});
	};
	const reset = () => {
		setUserInput({
			...userInput,
			bill: '',
			people: '',
			perPersonTipAmount: 0,
			totalTipAmount: 0,
		});
	};

	return (
		<div className='App'>
			<img src={logo} alt='logo' className='logo' />
			<section className='calculator-container'>
				<BillCalculator
					userInput={userInput}
					catchValuesUserInput={catchValuesUserInput}
					takePercentfromBtn={takePercentfromBtn}
				/>
				<BillDisplay userInput={userInput} reset={reset} />
			</section>
		</div>
	);
}

export default App;
