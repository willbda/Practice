// Challenge 3: Arrays - The Workhorses of JavaScript
// 🎯 Goal: Master array creation, manipulation, and modern array methods

updateChallengeInfo(
    "Challenge 3: Arrays",
    "Arrays are everywhere in JavaScript! Learn to create, modify, and transform arrays using both classic methods and modern functional approaches.",
    [
        "Arrays are objects in JavaScript - they have properties and methods",
        "Modern methods like map, filter, reduce don't modify original arrays",
        "Use bracket notation [0] or at() method for accessing elements",
        "Length property tells you how many elements, but arrays can be sparse"
    ]
);

console.log("📚 Starting Challenge 3: Arrays");

// TODO 1: Array Creation and Basic Operations
// Create arrays using different methods:
// - 'fruits': array literal with 5 fruits
// - 'numbers': Array constructor with numbers 1-10
// - 'mixed': array with different data types
// - Demonstrate adding/removing elements from beginning and end

// YOUR CODE HERE:


// TODO 2: Array Access and Modification
// Using your fruits array:
// - Access the first and last elements
// - Change the middle element
// - Find the index of a specific fruit
// - Check if the array includes a certain fruit

// YOUR CODE HERE:


// TODO 3: Array Iteration (Traditional)
// Using your numbers array, demonstrate:
// - for loop to print all numbers
// - for...of loop to calculate sum
// - while loop to find first number > 5

// YOUR CODE HERE:


// TODO 4: Modern Array Methods - Transformation
// Using your numbers array, create new arrays using:
// - map(): create array of squares
// - filter(): create array of even numbers only
// - slice(): create array of middle 5 numbers
// Show that original array is unchanged

// YOUR CODE HERE:


// TODO 5: Modern Array Methods - Analysis
// Using your numbers array:
// - reduce(): calculate sum and product
// - find(): find first number > 7
// - every(): check if all numbers > 0
// - some(): check if any number > 8

// YOUR CODE HERE:


// TODO 6: Array of Objects (Real-world scenario)
// Create an array of student objects, each with: name, age, grade, subjects[]
// Then:
// - Find all students with grade A
// - Calculate average age
// - Get all unique subjects across all students
// - Sort students by age

// YOUR CODE HERE:


// TODO 7: 2D Arrays (Matrix operations)
// Create a 3x3 matrix (array of arrays) and:
// - Access elements using double indexing
// - Calculate sum of all elements
// - Find the maximum value
// - Transpose the matrix (swap rows and columns)

// YOUR CODE HERE:


// 🧪 Test your solutions
function testChallenge3() {
    console.log("🔍 Testing your Challenge 3 solutions...");
    
    try {
        // Test array creation
        if (!Array.isArray(fruits) || fruits.length !== 5) {
            return "fruits array should have 5 elements";
        }
        
        if (!Array.isArray(numbers) || numbers.length !== 10) {
            return "numbers array should have 10 elements";
        }
        
        if (!Array.isArray(mixed)) {
            return "mixed array not found";
        }
        
        // Test array methods understanding
        const originalNumbers = [...numbers]; // Copy for comparison
        
        // Check if modern methods were used (look for new arrays)
        let foundSquares = false;
        let foundEvens = false;
        
        // This is a simple check - in real scenarios you'd have more sophisticated tests
        for (let key in window) {
            if (key.includes('square') || key.includes('Square')) {
                foundSquares = true;
            }
            if (key.includes('even') || key.includes('Even')) {
                foundEvens = true;
            }
        }
        
        console.log("✨ Great work! Your arrays are properly structured.");
        console.log(`📊 You created arrays with ${fruits.length + numbers.length + mixed.length} total elements.`);
        console.log("🚀 Arrays are fundamental - you'll use them everywhere!");
        
        return true;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// Uncomment the line below when you're ready to test your solution
// runTests("Challenge 3", testChallenge3);

console.log("💡 Arrays are powerful! Try different methods and see what they return.");
console.log("🎯 Focus on understanding the difference between mutating and non-mutating methods.");
console.log("📝 Use console.log() liberally to see what each method does!");