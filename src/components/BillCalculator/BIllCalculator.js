/** @format */
import './BillCalculator.css';
import dollorSign from '../images/icon-dollar.svg';
import person from '../images/icon-person.svg';
const BillCalculator = (props) => {
	return (
		<div className='bill-calculator-container'>
			<div className='bill-input-container'>
				<p className='tag'>Bill</p>
				<div className='bill-input'>
					<img src={dollorSign} alt='Dollor Sign' className='input-icon' />
					<input type='text' />
				</div>
			</div>
			<div className='tip-container'>
				<p className='tag'>Select Tip %</p>
				<div className='tip-options'>
					<button className='percentage-btn'>5%</button>
					<button className='percentage-btn'>10%</button>
					<button className='percentage-btn'>15%</button>
					<button className='percentage-btn'>25%</button>
					<button className='percentage-btn'>50%</button>
					<button className='percentage-btn custom'>Custom</button>
				</div>
			</div>
			<div className='person-container'>
				<p className='tag'>Number of People</p>
				<div className='person-input'>
					<img src={person} alt='person' className='input-icon' />
					<input type='text' />
				</div>
			</div>
		</div>
	);
};

export default BillCalculator;
