import { useState } from 'react'

function StateExample() {
	const [counter, setCounter] = useState(1);

	const handleClick = (evt) => {
		setCounter(counter+1)
	}

	return (
		<>
			<div>
				current value of counter: {counter}			
			</div>

			<div>
				<input type="button" value="+" onClick={handleClick}	/>
			</div>
		</>
	);
 }
 
 export default StateExample;
 