/* KEYWORDS TABLE
Keyword |	Scope	         | Hoisting | Can Be Reassigned | Can Be Redeclared
-----------------------------------------------------------------------------
var	  |	Function scope | Yes      | Yes	             | Yes
let	  |	Block scope    | No       | Yes	             | No
const	  |	Block scope    | No       | No	             | No
*/

// Assignment of various variables
var name = "Sammy";
var spartans = 300;
var kingdoms = [ "mammals", "birds", "fish" ];
var poem = { roses: "red", violets: "blue" }; 
var success = true;
var nothing = null;

// Assign value to password variable
var password = "hunter2";

// Reassign variable value with a new value
password = "hunter3";

console.log(password);
