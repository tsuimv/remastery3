class animal {
    constructor(name, breed, sound) {
        this.name = name
        this.breed = breed
        this.sound = sound
    }

    speak() {
        return `${this.name} ${this.sound}`
    }

    static pet(pet) {
        return `You pet ${pet.name}`
    }
}

module.exports = animal