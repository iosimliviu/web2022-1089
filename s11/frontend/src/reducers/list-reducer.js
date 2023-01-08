const INITIAL_STATE = {
	employees: [],
	error: null,
	fetching: false,
	fetched: false
}

export default function (state = INITIAL_STATE, action) {
	console.log(action.payload)
	switch (action.type) {
		case 'GET_EMPLOYEES_PENDING':
			return {...state, error: null, fetching: true, fetched: false}
		case 'GET_EMPLOYEES_FULLFILLED':
			return {...state, employees: [...state.employees, action.payload], fetching: false, fetched: true}
		case 'GET_EMPLOYEES_REJECTED':
			return {...state, error: null, fetching: false, fetched: false}
		default:
			return state
		
	}
}