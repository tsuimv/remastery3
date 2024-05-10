const animal = require("./animal");

class cat extends animal {
    constructor(name, breed, sound) {
        super(name, breed, sound) 
    }

    whatCat() {
        return `${this.name} is a ${this.breed} cat.`
    }
}

let flub = new cat('flub', 'calico', 'meow')
let momo = new cat('momo')
console.log(flub.whatCat())
console.log(flub.speak())
console.log(cat.pet(momo))