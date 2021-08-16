/** @format */
import './BillCalculator.css';
import dollorSign from '../images/icon-dollar.svg';
import person from '../images/icon-person.svg';
const BillCalculator = ({ userInput, catchValuesUserInput, takePercentfromBtn }) => {
	const { bill, people } = userInput;
	const customPercentage = () => {
		const percent = prompt('Enter your custom %');
		takePercentfromBtn(percent);
	};
	return (
		<div className='bill-calculator-container'>
			<div className='bill-input-container'>
				<p className='tag'>Bill</p>
				<div className='bill-input'>
					<img src={dollorSign} alt='Dollor Sign' className='input-icon' />
					<input type='text' value={bill} onChange={catchValuesUserInput} name='bill' />
				</div>
			</div>
			<div className='tip-container'>
				<p className='tag'>Select Tip %</p>
				<div className='tip-options'>
					<button className='percentage-btn' onClick={() => takePercentfromBtn(5)}>
						5%
					</button>
					<button className='percentage-btn' onClick={() => takePercentfromBtn(10)}>
						10%
					</button>
					<button className='percentage-btn' onClick={() => takePercentfromBtn(15)}>
						15%
					</button>
					<button className='percentage-btn' onClick={() => takePercentfromBtn(25)}>
						25%
					</button>
					<button className='percentage-btn' onClick={() => takePercentfromBtn(50)}>
						50%
					</button>
					<button className='percentage-btn custom' onClick={customPercentage}>
						Custom
					</button>
				</div>
			</div>
			<div className='person-container'>
				<p className='tag'>Number of People</p>
				<div className='person-input'>
					<img src={person} alt='person' className='input-icon' />
					<input type='text' name='people' value={people} onChange={catchValuesUserInput} />
				</div>
			</div>
		</div>
	);
};

export default BillCalculator;
