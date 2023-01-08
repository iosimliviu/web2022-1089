// export function addEmployee (content) {
// 	return {
// 		type: 'ADD_EMPLOYEE',
// 		payload: content
// 	}
// }

// const SERVER ="https://jsonplaceholder.typicode.com/todos"
const SERVER = "http://localhost:8081"

export function getEmployees() {
	return {
		type: 'GET_EMPLOYEES',
		payload: async () => {
			const response = await fetch(`${SERVER}/api/employees/`)
			// const response = await fetch(`${SERVER}`)
			const data = await response.json();
			console.log(data)
			return data
		}

	}
}