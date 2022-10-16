class Robot {
	constructor (name) {
		this.name = name
	}

	move() {
		console.log(`${this.name} is moving`)
	}
}

const r0 = new Robot('some robot')
r0.move();

class Weapon {
	constructor (description) {
		this.description = description
	}

	fire () {
		console.log(`${this.description} is firing`)
	}
}

const w0 = new Weapon('pew pew laster')
w0.fire()

class CombatRobot extends Robot {
	constructor (name) {
		super(name) //apelam construcotrul clasei parinte
		this.weapons = []
	}

	addWeapon (w) {
		this.weapons.push(w)
	}

	fire () {
		console.log('firing all weapons')
		for( const w of this.weapons) {
			w.fire()
		}

	} 

}

const r1 = new CombatRobot('some combat robot')
r1.addWeapon(w0)
r1.fire()

Robot.prototype.fly = function () { 
	console.log(`${this.name} is flying`)
}

r1.fly();