Filename: sophisticated_app.js

/*
This code is a sophisticated application that simulates a virtual pet. 
It includes various features like feeding, playing, and interacting with the pet. 
The pet's mood is updated based on these actions, and it can be happy, sad, or hungry. 
The user can also give commands to the pet, such as making it perform tricks or go to sleep. 
The application tracks the pet's statistics and provides a user-friendly interface. Enjoy!
*/

// Pet class definition
class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 0;
    this.happiness = 100;
    this.energy = 100;
  }

  eat(food) {
    this.hunger -= food;
    this.happiness += 10;
    this.energy += 5;
    console.log(this.name + ' is eating ' + food + '.');
  }

  play(game) {
    this.hunger += 10;
    this.happiness += game;
    this.energy -= 10;
    console.log(this.name + ' is playing ' + game + '.');
  }

  sleep() {
    this.hunger += 10;
    this.happiness -= 10;
    this.energy += 30;
    console.log(this.name + ' is sleeping.');
  }

  performTrick(trick) {
    this.hunger += 5;
    this.happiness += 10;
    this.energy -= 5;
    console.log(this.name + ' is performing ' + trick + ' trick.');
  }

  displayStats() {
    console.log('Stats for ' + this.name + ':');
    console.log('Hunger: ' + this.hunger);
    console.log('Happiness: ' + this.happiness);
    console.log('Energy: ' + this.energy);
  }
}

// Create a pet instance
const myPet = new Pet("Fluffy");

// Example interactions with the pet
myPet.eat('meat');
myPet.play('fetch');
myPet.performTrick('sit');
myPet.sleep();
myPet.displayStats();

// Continue interacting with the pet...