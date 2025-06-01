// Challenge 2: Functions
// 🎯 Goal: Master function declarations, expressions, arrow functions, and scope

updateChallengeInfo(
    "Challenge 2: Functions",
    "Learn different ways to create functions, understand parameters, return values, and scope. Functions are the building blocks of JavaScript!",
    [
        "Function declarations are hoisted, function expressions are not",
        "Arrow functions inherit 'this' from their enclosing scope",
        "Parameters vs Arguments: parameters are in definition, arguments are passed in",
        "Use default parameters for optional values"
    ]
);

console.log("📚 Starting Challenge 2: Functions");

// TODO 1: Function Declaration
// Create a function called 'greetUser' that:
// - Takes a name parameter
// - Returns a greeting message
// - Has a default parameter for the greeting word (default: "Hello")

// YOUR CODE HERE:


// TODO 2: Function Expression
// Create a function expression assigned to 'calculateArea' that:
// - Takes width and height parameters
// - Returns the area (width * height)
// - Include input validation (return 0 if parameters aren't numbers)

// YOUR CODE HERE:


// TODO 3: Arrow Functions
// Create arrow functions for:
// - 'square': takes a number, returns its square
// - 'isEven': takes a number, returns true if even, false if odd
// - 'createFullName': takes firstName and lastName, returns "firstName lastName"

// YOUR CODE HERE:


// TODO 4: Higher-Order Functions
// Create a function called 'processNumbers' that:
// - Takes an array of numbers and a callback function
// - Applies the callback to each number
// - Returns a new array with the results

// YOUR CODE HERE:


// TODO 5: Scope Challenge
// Demonstrate understanding of scope by:
// - Creating a global variable
// - Creating a function that has a local variable with the same name
// - Showing how they don't interfere with each other

// YOUR CODE HERE:


// TODO 6: Closures (Advanced)
// Create a function called 'counterMaker' that:
// - Returns a function that increments and returns a counter
// - Each returned function should have its own counter
// - Demonstrate with two different counters

// YOUR CODE HERE:


// 🧪 Test your solutions
function testChallenge2() {
    console.log("🔍 Testing your Challenge 2 solutions...");
    
    try {
        // Test function declaration
        if (typeof greetUser !== 'function') {
            return "greetUser function not found";
        }
        
        const greeting1 = greetUser("Alice");
        const greeting2 = greetUser("Bob", "Hi");
        if (!greeting1.includes("Alice") || !greeting2.includes("Bob")) {
            return "greetUser not working correctly";
        }
        
        // Test function expression
        if (typeof calculateArea !== 'function') {
            return "calculateArea function not found";
        }
        
        if (calculateArea(5, 4) !== 20) {
            return "calculateArea not calculating correctly";
        }
        
        // Test arrow functions
        if (typeof square !== 'function' || square(4) !== 16) {
            return "square arrow function not working";
        }
        
        if (typeof isEven !== 'function' || isEven(4) !== true || isEven(5) !== false) {
            return "isEven arrow function not working";
        }
        
        // Test higher-order function
        if (typeof processNumbers === 'function') {
            const doubled = processNumbers([1, 2, 3], x => x * 2);
            if (!Array.isArray(doubled) || doubled[0] !== 2) {
                return "processNumbers not working correctly";
            }
        }
        
        console.log("✨ Excellent! Your functions are working correctly.");
        console.log("🎉 You've mastered function basics!");
        
        return true;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// Uncomment the line below when you're ready to test your solution
// runTests("Challenge 2", testChallenge2);

console.log("💡 Complete the TODOs above, then uncomment the test line to check your work!");
console.log("🔧 Try calling your functions with different arguments to see how they behave!");