import './User.css'
import { useState } from 'react'

function UserForm(props) {
	const {onAdd}  = props
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [birthYear, setBirthYear] = useState('');

	const addUser = () => {
		onAdd({
			firstName,
			lastName,
			email,
			birthYear
		})

	}

	return (
		<div className="user-form">
			<div >

				<input type="text" placeholder='username' onChange={(evt) => { console.log(evt); setFirstName(evt.target.value)}}	/>
			</div>
			<div >

				<input type="text" placeholder='lastName' onChange={(evt) => setLastName(evt.target.value)}	/>
			</div>
			<div >

				<input type="text" placeholder='email' onChange={(evt) => setEmail(evt.target.value)}	/>
			</div>
			<div >

				<input type="number" placeholder='birthYear' onChange={(evt) => setBirthYear(evt.target.value)}	/>
			</div>

			<div >

				<input type="button" value='Add' onClick={addUser}	/>
			</div>

		</div>
	)
}

export default UserForm;
 