// Challenge 5: Loops - Mastering Iteration Patterns
// 🎯 Goal: Understand different loop types and when to use each one

updateChallengeInfo(
    "Challenge 5: Loops",
    "Loops are essential for processing data and automating repetitive tasks. Master all loop types and understand their best use cases.",
    [
        "for loops are great for counting and when you know iteration count",
        "while loops are perfect when you don't know how many iterations you need",
        "for...in loops iterate over object properties (keys)",
        "for...of loops iterate over iterable values (arrays, strings, etc.)"
    ]
);

console.log("📚 Starting Challenge 5: Loops");

// TODO 1: Basic for Loops
// Create functions that use for loops to:
// - printNumbers(n): print numbers 1 to n
// - factorial(n): calculate n! (factorial)
// - fibonacci(n): generate first n fibonacci numbers
// - multiplicationTable(n): print n×n multiplication table

// YOUR CODE HERE:


// TODO 2: While and Do-While Loops
// Create functions using while/do-while:
// - guessNumber(): simulates number guessing (use Math.random())
// - countDown(n): counts down from n to 1, then says "Blast off!"
// - digitSum(n): sum all digits in a number (e.g., 123 → 6)
// - reverseString(str): reverse a string using while loop

// YOUR CODE HERE:


// TODO 3: for...in Loops (Object Iteration)
// Create a student gradebook object and functions that:
// - displayGrades(): show all subjects and grades
// - calculateGPA(): calculate average grade
// - findHighestGrade(): return subject with highest grade
// - addGrade(subject, grade): add new subject/grade

// YOUR CODE HERE:


// TODO 4: for...of Loops (Array and String Iteration)
// Create functions that use for...of:
// - analyzeText(text): count vowels, consonants, spaces
// - findDuplicates(array): return array of duplicate values
// - processCSVRow(row): split CSV row and clean each field
// - mergeSortedArrays(arr1, arr2): merge two sorted arrays

// YOUR CODE HERE:


// TODO 5: Nested Loops (2D Data Processing)
// Work with 2D arrays representing spreadsheet data:
// - printMatrix(matrix): display matrix in readable format
// - findInMatrix(matrix, value): return [row, col] of value
// - transposeMatrix(matrix): flip rows and columns
// - sumByColumn(matrix): return array of column sums

// YOUR CODE HERE:


// TODO 6: Loop Control (break, continue, labels)
// Demonstrate advanced loop control:
// - findFirstPrime(start): find first prime number >= start
// - processDataUntilError(data): process array until invalid data
// - skipNegatives(numbers): process only positive numbers
// - searchNestedArray(arrays, target): search through array of arrays

// YOUR CODE HERE:


// TODO 7: Performance Comparison
// Compare different loop types for same task:
// - Create array of 1000 numbers
// - Sum them using: for, while, for...of, forEach, reduce
// - Time each approach using console.time()
// - Discuss when you'd use each

// YOUR CODE HERE:


// 🧪 Test your solutions
function testChallenge5() {
    console.log("🔍 Testing your Challenge 5 solutions...");
    
    try {
        // Test basic for loop function
        if (typeof factorial === 'function') {
            const fact5 = factorial(5);
            if (fact5 !== 120) {
                return `factorial(5) should be 120, got ${fact5}`;
            }
        }
        
        // Test while loop function
        if (typeof digitSum === 'function') {
            const sum = digitSum(123);
            if (sum !== 6) {
                return `digitSum(123) should be 6, got ${sum}`;
            }
        }
        
        // Test for...of function
        if (typeof analyzeText === 'function') {
            const analysis = analyzeText("hello");
            if (typeof analysis !== 'object') {
                return "analyzeText should return an object";
            }
        }
        
        console.log("✨ Great! Your loop implementations are working.");
        console.log("🔄 Loops are powerful tools for data processing!");
        
        return true;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// Uncomment the line below when you're ready to test your solution
// runTests("Challenge 5", testChallenge5);

console.log("💡 Each loop type has its strengths - choose the right tool for the job!");
console.log("📊 Think about which loop you'd use for processing CSV data row by row...");
console.log("🎯 Next up: Let's put these skills together for real data processing!");