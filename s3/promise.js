// let promise = new Promise(function(resolve, reject) {
// 	// the function is executed automatically when the promise is constructed
 
// 	// after 1 second signal that the job is done with the result "done"
// 	setTimeout(() => resolve("done"), 1000);
//  });

 let promise = new Promise(function(resolve, reject) {
	// setTimeout(() => resolve("done!"), 1000);
	setTimeout(() => reject(new Error("Whoops!")), 1000);
 });
 
//  resolve runs the first function in .then
 promise.then(
	result => console.log(result), // shows "done!" after 1 second
	error => console.log(error) // doesn't run
 );

 promise.then(console.log);


// let myPromise = new Promise(function(myResolve, myReject) {
// 	let x = 0;

// // The producing code (this may take some time)

// 	if (x == 0) {
// 	myResolve("OK");
// 	} else {
// 	myReject("Error");
// 	}
// });

// myPromise.then(
// 	function(value) {myDisplayer(value);},
// 	function(error) {myDisplayer(error);}
// );