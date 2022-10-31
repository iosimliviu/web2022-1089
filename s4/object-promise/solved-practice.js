const employees = [
	{
		 name: "John Doe",
		 salary: 3000
	},
	{
		 name: "Josheph Miller",
		 salary: 5000
	},
	{
		 name: "Daniel Williams",
		 salary: 12000
	}
];

// const applyBonus = (employees, bonus)  = make a function that returns a promise.
//  the function should `reject` a `string` with the value `Bonus too small` if `bonus` is less than 10% of the max salary from `employees` array;
//  the function should `resolve` an array with applied bonus to each `employee salary`;


const applyBonus = (employees, bonus) => {

	return new Promise((resolve, reject) => {
		 let salaryArray = [];

		  salaryArray = employees.map(employee =>{
			  return employee.salary
		 })

		 if (bonus < 0.1) {
			  reject("Bonus too small");
		 }

		 else {
			  resolve(employees.map(employee => {
					return { salary: employee.salary + bonus }
			  }))
		 }
	})

}



// console.log(applyBonus(employees, 1000)) // reject
// console.log(applyBonus(employees, 1200)) // resolve