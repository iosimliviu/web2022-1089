const students = [
	{
		 name: 'John',
		 yearOfBirth: 1990
	},
	{
		 name: 'Joe',
		 yearOfBirth: 2007
	},
	{
		 name: 'Alex',
		 yearOfBirth: 1987
	}
];

const currentYear = 2022;

// const mappedStudents = //use array map to add the age of each adult
const mappedStudents = students.map(student => {
	const newStud = new Object(student)
	newStud.age = currentYear - student.yearOfBirth;
	return newStud;
});

console.log(mappedStudents);
console.log(students);