/** @format */

import './App.css';
import BillCalculator from './components/BillCalculator/BIllCalculator';
import BillDisplay from './components/BillDisplay/BillDisplay';
import logo from './components/images/logo.svg';

function App() {
	return (
		<div className='App'>
			<img src={logo} alt='logo' className='logo' />
			<section className='calculator-container'>
				<BillCalculator />
				<BillDisplay />
			</section>
		</div>
	);
}

export default App;
