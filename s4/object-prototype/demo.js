class Robot {
	constructor (name) {
		this.name = name
	}
}

class CombatRobot extends Robot {
	constructor (name) {
		super(name)
	}
}

const r0 = new Robot('some robot')
const r1 = new CombatRobot('some combat robot')

Robot.prototype.fly = function () { // pentru toti robotii existenti adaugam un upgrade 
	console.log(`${this.name} is flying`)
}

r1.fly();