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
        console.log(`The ${this.species} makes a sound`);
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

function createDog() {
    const myDog = new Dog("Golden Retriever");
    myDog.makeSound();
    myDog.bark();
    const message = `The ${myDog.species} makes a sound. It says "woof".`;
    document.getElementById("output").textContent = message;
}

// Function to create a Cat object and display its behavior
function createCat() {
    const myCat = new Cat("Siamese");
    myCat.makeSound();
    myCat.purr();
    const message = `The ${myCat.species} makes a sound. It says "purr".`;
    document.getElementById("output").textContent = message;
}






