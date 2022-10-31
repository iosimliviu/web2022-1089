// filter - shallow copy of a potion of the array passed given a function
const someNames = ['John', 'Andy', 'Billy', 'Justin'];

const nameToFilter = 'Justin';

const filteredNames = someNames.filter(e => e !== nameToFilter);

console.log(someNames);
console.log(filteredNames);