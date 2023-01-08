import {  useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual} from 'react-redux'
// import { addEmployee } from '../actions/actions';

import {getEmployees} from '../actions/actions'; 

const employeeListSelector = state => state.list.employees

function EmployeeList(props) {
	console.log()
	const employees = useSelector(state => state.list.employees);
	// const [content, setContent] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		console.log("dispatch in list")
		dispatch(getEmployees())
		console.log(employees)
	} ,[dispatch]) 

	console.log("employees", employees)
	return (
			<div >
				<div>
					<h3>List of Employees</h3>
					{/* {
						employees.map((e,i)=> <div key={i}>{e}</div>)
					} */}
					<div>
						{/* {employees[0].id} */}
					</div>
					{
						employees.map((e)=> <div key={e.id}>{e.content}</div>)
					}
				</div>
				{/* <div>
					<h3>Add an Employee</h3>
					<input type='text' placeholder="content" onChange={(evt) => setContent(evt.target.value)}></input>
					<input type='button' value='Add' onClick={()=>dispatch(addEmployee(content))}></input>
				</div> */}
			</div>
	);
 }
 
 export default EmployeeList;
 