/*
Implement the decorate function
- the function adds to Widget a method called enhance which increases the size of a widget with n
- the method also works on already declared Widgets
*/

class Widget {
	constructor(name, size) {
		this.name = name;
		this.size = size;
	}

	getDescription() {
		return `a ${this.name} of size ${this.size}`
	}
}

function decorate() {
	Widget.prototype.enhance = function (n) {
			this.size += n;
	};
}

let w1 = new Widget('first widget', 10)
decorate(Widget)
w1.enhance(4)
console.log(w1.getDescription())

