// VARIABLE SCOPE EXAMPLE FOR var
// Initialize a global variable
var species = "human";
 
function transform() {
  // Initialize a local, function-scoped variable
  var species = "werewolf";
  console.log(species);
}

// Log the global and local variable
console.log(species);
transform();
console.log(species);

var fullMoon = true;



// VARIABLE SCOPE EXAMPLE FOR let
// Initialize a global variable
let species = "human";

if (fullMoon) {
  // Initialize a block-scoped variable
  let species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species}.`);
}

console.log(`It is not a full moon. Lupin is currently a ${species}.`);