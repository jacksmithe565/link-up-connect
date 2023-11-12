// Filename: complexCode.js
// Description: A complex and sophisticated code demonstrating advanced JavaScript concepts

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class representing an Animal
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  getDetails() {
    console.log(`${this.name} is a ${this.species}.`);
  }
}

// Function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Function to generate Fibonacci sequence up to 'n' terms
function fibonacci(n) {
  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

// Function to check if a word is a palindrome
function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word.toLowerCase() === reversedWord.toLowerCase();
}

// Example usage of the above classes and functions

const john = new Person('John Doe', 25);
john.greet();

const lion = new Animal('Simba', 'Lion');
lion.getDetails();

console.log(`Factorial of 5 is: ${factorial(5)}`);

const fibonacciSequence = fibonacci(10);
console.log(`Fibonacci sequence: ${fibonacciSequence.join(', ')}`);

console.log(`Is 'level' a palindrome? ${isPalindrome('level')}`);
console.log(`Is 'hello' a palindrome? ${isPalindrome('hello')}`);

// ... More code follows