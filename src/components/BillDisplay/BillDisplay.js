/** @format */
import './BillDisplay.css';
const BillDisplay = ({ userInput, reset }) => {
	const { perPersonTipAmount, totalTipAmount } = userInput;

	return (
		<div className='bill-display-container'>
			<div className='tip-amount'>
				<div className='tip-amount-label'>
					<h2 className='heading'>Tip Amount</h2>
					<p className='sub-heading'>/ person</p>
				</div>
				<h1 className='label'>${perPersonTipAmount}</h1>
			</div>
			<div className='total'>
				<div className='total-label'>
					<h2 className='heading'>Total</h2>
					<p className='sub-heading'>/ person</p>
				</div>
				<h1 className='label'>${totalTipAmount}</h1>
			</div>
			<button className='reset-btn' onClick={reset}>
				RESET
			</button>
		</div>
	);
};

export default BillDisplay;
