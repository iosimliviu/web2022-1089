import { useState, useEffect } from 'react'
import User from './User'
import UserForm from './UserForm'
import './UserList.css'

const SERVER = "http://localhost:8081"


function UserList() {
	const [users, setUsers] = useState([])

	const getUsers = async() => {

		const response = await fetch(`${SERVER}/api/employees/`)
		const data = await response.json();

		console.log(data)
		setUsers(data)
	}

	const addUser = async(user) => {
		console.log(user)
		await fetch(`${SERVER}/api/employees`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		getUsers()
	}

	useEffect(() => {
			getUsers()
		} 
	,[]) 


	return (
			<div className="user-list">
				<UserForm onAdd={addUser}/>
				{
					users.map(e => <User key={e.id} item={e}/>)
				}
			</div>
	);
 }
 
 export default UserList;
 