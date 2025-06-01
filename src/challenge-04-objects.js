// Challenge 4: Objects - JavaScript's Swiss Army Knife
// 🎯 Goal: Master object creation, property access, methods, and advanced object concepts

updateChallengeInfo(
    "Challenge 4: Objects",
    "Objects are the heart of JavaScript! Learn to create, manipulate, and work with objects using various patterns and techniques.",
    [
        "Objects are key-value pairs - keys are strings (or Symbols), values can be anything",
        "Dot notation vs bracket notation: use brackets for dynamic keys or keys with spaces",
        "Methods are functions stored as object properties",
        "Objects are passed by reference, not by value"
    ]
);

console.log("📚 Starting Challenge 4: Objects");

// TODO 1: Object Creation Methods
// Create the same person object using 3 different methods:
// - Object literal: person1 (name, age, city, hobbies array)
// - Object constructor: person2 (same properties)
// - Object.create(): person3 (same properties)

// YOUR CODE HERE:


// TODO 2: Property Access and Modification
// Using person1:
// - Access properties using both dot and bracket notation
// - Add a new property 'email'
// - Modify the age property
// - Delete the city property
// - Try to access a non-existent property

// YOUR CODE HERE:


// TODO 3: Object Methods
// Add methods to person1:
// - introduce(): returns introduction string
// - addHobby(hobby): adds hobby to hobbies array
// - getAge(): returns age
// - hasHobby(hobby): returns boolean
// Demonstrate calling each method

// YOUR CODE HERE:


// TODO 4: Object Iteration
// Create a car object with various properties (make, model, year, features array)
// Then iterate through it using:
// - for...in loop
// - Object.keys()
// - Object.values()
// - Object.entries()

// YOUR CODE HERE:


// TODO 5: Nested Objects
// Create a company object with:
// - name, founded year
// - address object (street, city, country)
// - employees array of employee objects (name, position, salary)
// Practice accessing deeply nested properties

// YOUR CODE HERE:


// TODO 6: Object Destructuring
// Using your company object:
// - Destructure company name and founded year
// - Destructure address properties with renaming
// - Destructure first employee's name and position
// - Use default values in destructuring

// YOUR CODE HERE:


// TODO 7: Object Methods and 'this'
// Create a calculator object with:
// - Properties: result (starts at 0)
// - Methods: add, subtract, multiply, divide (each takes a number)
// - Method: reset (sets result back to 0)
// - Method: getResult (returns current result)
// Demonstrate method chaining if possible

// YOUR CODE HERE:


// TODO 8: Object Comparison and Copying
// Demonstrate:
// - Why object1 === object2 might be false even with same properties
// - Shallow copy using Object.assign() and spread operator
// - The difference between shallow and deep copying
// - JSON.parse(JSON.stringify()) for deep copying (and its limitations)

// YOUR CODE HERE:


// 🧪 Test your solutions
function testChallenge4() {
    console.log("🔍 Testing your Challenge 4 solutions...");
    
    try {
        // Test object creation
        if (typeof person1 !== 'object' || person1 === null) {
            return "person1 object not found or invalid";
        }
        
        if (!person1.hasOwnProperty('name') || !person1.hasOwnProperty('age')) {
            return "person1 missing required properties";
        }
        
        // Test methods exist
        if (typeof person1.introduce !== 'function') {
            return "introduce method not found on person1";
        }
        
        // Test method functionality
        const introduction = person1.introduce();
        if (typeof introduction !== 'string' || !introduction.includes(person1.name)) {
            return "introduce method not working correctly";
        }
        
        // Test object iteration understanding
        if (typeof car !== 'object' || car === null) {
            return "car object not found";
        }
        
        console.log("✨ Excellent! Your objects are well-structured.");
        console.log(`👤 ${person1.name} says: "${person1.introduce()}"`);
        console.log("🏗️ Objects are the building blocks of JavaScript applications!");
        
        return true;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// Uncomment the line below when you're ready to test your solution
// runTests("Challenge 4", testChallenge4);

console.log("💡 Objects are everywhere in JavaScript - master them and you'll master JS!");
console.log("🔧 Try different ways to access and modify properties.");
console.log("🎭 Pay attention to how 'this' behaves in different contexts.");