// Challenge 1: Variables and Data Types
// 🎯 Goal: Master variable declarations, data types, and basic operations

updateChallengeInfo(
    "Challenge 1: Variables & Data Types",
    "Practice declaring variables, understanding data types, and performing basic operations. Complete each TODO below.",
    [
        "Use let for variables that change, const for constants",
        "JavaScript has 7 primitive types: string, number, boolean, undefined, null, symbol, bigint",
        "Use typeof operator to check data types",
        "Template literals use backticks: `Hello ${name}`"
    ]
);

console.log("📚 Starting Challenge 1: Variables and Data Types");

// TODO 1: Variable Declarations
// Declare a variable called 'userName' using let and assign it your name
// Declare a constant called 'birthYear' and assign your birth year
// Declare a variable called 'isStudent' and assign a boolean value

// YOUR CODE HERE:


// TODO 2: Data Type Exploration
// Create variables of each primitive type and log their typeof
// Create: myString, myNumber, myBoolean, myUndefined, myNull

// YOUR CODE HERE:


// TODO 3: String Operations
// Create a greeting message using template literals that includes:
// - Your name from userName variable
// - Your calculated age (current year - birth year)
// - Whether you're a student or not

// YOUR CODE HERE:


// TODO 4: Number Operations
// Create two number variables and demonstrate:
// - Addition, subtraction, multiplication, division
// - Modulo operator (%)
// - Increment and decrement operators

// YOUR CODE HERE:


// TODO 5: Type Conversion
// Demonstrate both implicit and explicit type conversion:
// - Convert a string to a number
// - Convert a number to a string
// - Show what happens with "truthy" and "falsy" values

// YOUR CODE HERE:


// 🧪 Test your solutions
function testChallenge1() {
    console.log("🔍 Testing your Challenge 1 solutions...");
    
    // Test if variables are declared
    try {
        if (typeof userName === 'undefined') {
            return "userName variable not declared";
        }
        if (typeof birthYear === 'undefined') {
            return "birthYear variable not declared";
        }
        if (typeof isStudent === 'undefined') {
            return "isStudent variable not declared";
        }
        
        // Test data types
        if (typeof userName !== 'string') {
            return "userName should be a string";
        }
        if (typeof birthYear !== 'number') {
            return "birthYear should be a number";
        }
        if (typeof isStudent !== 'boolean') {
            return "isStudent should be a boolean";
        }
        
        console.log("✨ Great job! Your variable declarations look correct.");
        console.log(`👋 Hello ${userName}! You're ${2025 - birthYear} years old.`);
        
        return true;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// Uncomment the line below when you're ready to test your solution
// runTests("Challenge 1", testChallenge1);

console.log("💡 Complete the TODOs above, then uncomment the test line to check your work!");
console.log("🚀 Remember: The goal is understanding, not just passing tests. Experiment!");