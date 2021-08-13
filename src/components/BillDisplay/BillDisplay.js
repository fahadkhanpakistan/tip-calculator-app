/** @format */
import './BillDisplay.css';
const BillDisplay = (props) => {
	return (
		<div className='bill-display-container'>
			<div className='tip-amount'>
				<div className='tip-amount-label'>
					<h2 className='heading'>Tip Amount</h2>
					<p className='sub-heading'>/ person</p>
				</div>
				<h1 className='label'>$23.99</h1>
			</div>
			<div className='total'>
				<div className='total-label'>
					<h2 className='heading'>Tip Amount</h2>
					<p className='sub-heading'>/ person</p>
				</div>
				<h1 className='label'>$23.56</h1>
			</div>
			<button className='reset-btn'>RESET</button>
		</div>
	);
};

export default BillDisplay;
