//complete this code
class Animal {
    constructor(species) {
        this.species = species;  // Initialize species
    }

    // Getter for species
    get species() {
        return this._species;  // Return the species of the animal
    }

    // Setter for species
    set species(value) {
        this._species = value;  // Set the species of the animal
    }

    // Method to make a sound
    makeSound() {
        console.log(`${this.species} makes a sound`);
    }
}

// Dog Class Definition (Extends Animal)
class Dog extends Animal {
    constructor(species) {
        super(species);  
    }

    // Method to bark
    bark() {
        console.log("woof");
    }
}

// Cat Class Definition (Extends Animal)
class Cat extends Animal {
    constructor(species) {
        super(species);  
    }

    // Method to purr
    purr() {
        console.log("purr");
    }
}
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
