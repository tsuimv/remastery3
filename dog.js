const animal = require("./animal");

class dog extends animal {
    constructor(name, breed, sound) {
        super(name, breed, sound) 
    }

    whatDog() {
        return `${this.name} is a ${this.breed} dog.`
    }
}

let rover = new dog('rover', 'labrador', 'bark bark') 
console.log(rover.whatDog())
console.log(rover.speak())
console.log(animal.pet(rover))