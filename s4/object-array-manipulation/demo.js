const objectsToFilter = [
	{
		 name: 'John',
		 hasVisa: true,
		 yearOfBirth: 1990
	},
	{
		 name: 'Joe',
		 hasVisa: false,
		 yearOfBirth: 2007
	},
	{
		 name: 'Alex',
		 hasVisa: false,
		 yearOfBirth: 1987
	},
	{
		 name: 'Alex',
		 hasVisa: true,
		 yearOfBirth: 1960
	}
];

const filterObject = {
	hasVisa: true,
	name: 'Alex'
}

const filterArray = (array, filterObj) => {
	return array.filter(element => {
		 let isOk = false;
		 for (const elProperty of Object.keys(filterObj)) {
			  if (!element[elProperty] || element[elProperty] !== filterObj[elProperty]) {
					isOk = true;
					break;
			  }
		 }
		 return isOk;
	});
};

console.log(filterArray(objectsToFilter, filterObject));
console.log(objectsToFilter.filter(obj => (obj.hasVisa !== filterObject.hasVisa || obj.name !== filterObject.name)))

