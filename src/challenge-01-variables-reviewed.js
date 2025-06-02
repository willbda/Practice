// Challenge 1: Variables and Data Types - INSTRUCTOR REVIEW
// 🎯 Goal: Master variable declarations, data types, and basic operations

updateChallengeInfo(
    "Challenge 1: Variables & Data Types - REVIEWED",
    "David's excellent work with instructor feedback and suggestions for improvement.",
    [
        "Excellent foundation work with creative exploration",
        "Strong documentation and teaching style",
        "Good experimentation with concepts",
        "Areas identified for further growth"
    ]
);

console.log("📚 Starting Challenge 1: Variables and Data Types - INSTRUCTOR REVIEW");

// TODO 1: Variable Declarations ✅ EXCELLENT
// Declare a variable called 'userName' using let and assign it your name
// Declare a constant called 'birthYear' and assign your birth year
// Declare a variable called 'isStudent' and assign a boolean value

// INSTRUCTOR: Perfect! You correctly used let vs const based on mutability.
// This is a fundamental concept that will serve you well.

let userName = "David Williams";
const birthYear = 1992;
let isStudent = false;

// INSTRUCTOR NOTE: Consider naming conventions as your code grows:
// - camelCase (what you used) is perfect for JavaScript
// - Be consistent: userName vs user_name vs UserName
// - Descriptive names prevent bugs: 'isCurrentlyEnrolledAsStudent' vs 'isStudent'

// TODO 2: Data Type Exploration ✅ GOOD
// Create variables of each primitive type and log their typeof
// Create: myString, myNumber, myBoolean, myUndefined, myNull

// INSTRUCTOR: Good use of comma separation for related variables!
// However, let's talk about when this is helpful vs. when it can cause problems...

let myString = "hello friend!",
    myNumber = 23,
    myBoolean = true,
    myUndefined,        // INSTRUCTOR: Great! You understand undefined vs null
    myNull = null;

// INSTRUCTOR SUGGESTIONS:
console.log("=== Data Type Exploration ===");
console.log("myString:", typeof myString, "value:", myString);
console.log("myNumber:", typeof myNumber, "value:", myNumber);
console.log("myBoolean:", typeof myBoolean, "value:", myBoolean);
console.log("myUndefined:", typeof myUndefined, "value:", myUndefined);
console.log("myNull:", typeof myNull, "value:", myNull); // ⚠️ This will surprise you!

// INSTRUCTOR DEEP DIVE: JavaScript's Famous "Bug"
// typeof null returns "object" - this is a known quirk from 1995!
// In real code, check for null like this:
console.log("Is myNull actually null?", myNull === null);

// FUTURE CONNECTION: You'll see this pattern a lot in Challenge 4 (Objects)
// and when working with APIs that return null vs undefined

// TODO 3: String Operations 🌟 CREATIVE EXCELLENCE
// Create a greeting message using template literals that includes:
// - Your name from userName variable
// - Your calculated age (current year - birth year)
// - Whether you're a student or not

// INSTRUCTOR: BRILLIANT! Using new Date().getFullYear() instead of hardcoding 2025
// This shows you're thinking like a real developer - code that works over time!

const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

// INSTRUCTOR: Switch statement here is interesting! Let's discuss...
switch (isStudent) {
    case true:
        console.log(
            `Greetings, ${userName}! Since you were born in ${birthYear}, that makes you ${age}. Since you're a student, you must be very busy with your studies!`
        );
        break;

    default:
        console.log(
            `Greetings, ${userName}! Since you were born in ${birthYear}, that makes you ${age}. Since you're not a student, what do you do all day?`
        );
        break;
}

// INSTRUCTOR ANALYSIS: Switch vs If/Else
// ✅ GOOD: You wanted to practice switch - smart learning strategy!
// 🤔 CONSIDER: For boolean values, if/else is more idiomatic:
//
// if (isStudent) {
//     console.log("student message");
// } else {
//     console.log("non-student message");
// }
//
// WHEN TO USE SWITCH:
// - Multiple discrete values: switch(dayOfWeek) { case 'monday': ... }
// - Complex logic trees: switch(userRole) { case 'admin': case 'moderator': ... }
//
// FUTURE CONNECTION: You'll love switch statements in Challenge 6 when we 
// determine document types from CSV data!

// INSTRUCTOR SUGGESTION: Template Literal Organization
// For long strings, consider this pattern:
const studentMessage = `
    Greetings, ${userName}! 
    Since you were born in ${birthYear}, that makes you ${age}. 
    Since you're a student, you must be very busy with your studies!
`;
// Notice how this makes complex strings more readable?

// TODO 4: Number Operations 🌟 OUTSTANDING CREATIVITY
// Create two number variables and demonstrate:
// - Addition, subtraction, multiplication, division
// - Modulo operator (%)
// - Increment and decrement operators

// INSTRUCTOR: Your documentation style here is exceptional! 
// This is exactly how good developers think and communicate.

console.log("\n let's do some math");

let n = 5,
    m = 27;

// INSTRUCTOR: Beautiful explanatory style! A few enhancements:

console.log(`First, there's addition. Easy to do:\n\t${n} + ${m} = ${n + m}`);
console.log(`\nWhereas subtraction goes in reverse:\n\t${m} - ${n} = ${m - n}`);

// INSTRUCTOR NOTE: Your modulo explanation is perfect! This operator trips up 
// many new programmers, but you explained it clearly.
console.log(
    `\nModulo is up next; this one is funny because we don't talk about it much, but it's intuitive and useful. It's just the remainder of division;\n\tthe remainder of ${m} % ${n} is of course: ${
        m % n
    }, which is to say ${
        m % n
    } is what's left over when you divide ${n} evenly into ${m}`
);

// INSTRUCTOR DEEP DIVE: Modulo's Real-World Power
// You'll use % constantly for:
// - Checking if numbers are even: if (num % 2 === 0)
// - Cycling through arrays: array[index % array.length]
// - Time calculations: if (hour % 12 === 0) // it's noon or midnight

console.log(
    `\nAnother way to think about addition and subtraction is with increment and decriment. Take a look at this!\n\n`
);

// INSTRUCTOR: This loop demonstration is BRILLIANT teaching! 
// You're connecting multiple concepts (loops, arithmetic, string interpolation)
for (let i = 0; i < n + 1; i++) {
    let w = m - i;
    console.log(`Step:${i + 1}:\t${m}-${i}=${w}\t\t and\t\t ${w}+${i}=${m}`);
}

// INSTRUCTOR SUGGESTIONS for your loop:
// 1. Variable naming: 'w' is unclear - maybe 'result' or 'difference'?
// 2. Loop condition: You used < n + 1, which works, but <= n is more direct
// 3. EXCELLENT use of template literals for alignment!

// INSTRUCTOR ENHANCED VERSION (study the differences):
console.log("\n=== Enhanced Loop Demonstration ===");
for (let step = 0; step <= n; step++) {
    const difference = m - step;
    const stepNumber = step + 1;
    console.log(`Step ${stepNumber}: ${m} - ${step} = ${difference} \t|\t ${difference} + ${step} = ${m}`);
}

// TODO 5: Type Conversion 🤔 GREAT QUESTION!
// Demonstrate both implicit and explicit type conversion:
// - Convert a string to a number
// - Convert a number to a string
// - Show what happens with "truthy" and "falsy" values

// INSTRUCTOR: You discovered JavaScript's trickiest concept! Let's explore...

let stringWithImpliedNum = "33";
let implicitNumberConversion = 1 * stringWithImpliedNum;
console.log("implicitNumberConsersion is a", typeof implicitNumberConversion);

// INSTRUCTOR NOTE: Great example! But there are many ways to convert:
console.log("\n=== Number Conversion Methods ===");
console.log("Original string:", stringWithImpliedNum, typeof stringWithImpliedNum);
console.log("Using arithmetic (*1):", 1 * stringWithImpliedNum, typeof (1 * stringWithImpliedNum));
console.log("Using Number():", Number(stringWithImpliedNum), typeof Number(stringWithImpliedNum));
console.log("Using parseInt():", parseInt(stringWithImpliedNum), typeof parseInt(stringWithImpliedNum));
console.log("Using + operator:", +stringWithImpliedNum, typeof +stringWithImpliedNum);

// INSTRUCTOR WARNING: parseInt() has surprises!
console.log("parseInt('33.7'):", parseInt('33.7')); // Drops decimal!
console.log("parseInt('33abc'):", parseInt('33abc')); // Stops at first non-digit!

let definitelyANumber = 29;
let explicitNumberConversiontoString = String(definitelyANumber);
console.log(
    `explicitNumberConversiontoString (${explicitNumberConversiontoString}) is a`,
    typeof explicitNumberConversiontoString
);

// INSTRUCTOR: Perfect explicit conversion! Other methods:
console.log("\n=== String Conversion Methods ===");
console.log("Using String():", String(definitelyANumber));
console.log("Using .toString():", definitelyANumber.toString());
console.log("Using template literal:", `${definitelyANumber}`);
console.log("Using concatenation:", definitelyANumber + "");

// INSTRUCTOR: Your confusion about truthiness vs equality is PERFECT!
// This is JavaScript's most confusing concept. Let's demystify it:

if (definitelyANumber !== true) {
    console.log(`Wait, what?? ${definitelyANumber} is not truthy?`);
}

// INSTRUCTOR EXPLANATION: You discovered the difference between:
// 1. TRUTHINESS: Does this value act like true in a boolean context?
// 2. EQUALITY: Is this value literally the same as true?

console.log("\n=== TRUTHINESS vs EQUALITY MASTERCLASS ===");
console.log("29 is truthy:", !!29);                    // true - 29 acts like true
console.log("29 == true:", 29 == true);                // false - weird coercion!
console.log("29 === true:", 29 === true);              // false - different types
console.log("Boolean(29):", Boolean(29));              // true - explicit conversion

// INSTRUCTOR: Why 29 == true is false (JavaScript's weirdest rule):
// When using ==, JavaScript converts true to 1, then compares 29 == 1
console.log("true gets converted to:", Number(true));   // 1
console.log("So 29 == true becomes 29 == 1:", 29 == 1); // false!

// INSTRUCTOR: Truthy vs Falsy values to memorize:
console.log("\n=== Falsy Values (everything else is truthy) ===");
console.log("false:", !!false);
console.log("0:", !!0);
console.log("-0:", !!-0);
console.log("0n (BigInt):", !!0n);
console.log("'' (empty string):", !!'');
console.log("null:", !!null);
console.log("undefined:", !!undefined);
console.log("NaN:", !!NaN);

// INSTRUCTOR: Real-world usage patterns:
console.log("\n=== How Professionals Use Truthiness ===");
const userInput = "David";
if (userInput) {  // Much better than if (userInput === true)
    console.log("User provided input:", userInput);
}

const score = 0;
if (score) {
    console.log("User has a score");
} else {
    console.log("Score is 0 or not set"); // This runs!
}

// INSTRUCTOR BEST PRACTICES going forward:
// ✅ Use === instead of == (avoids weird coercion)
// ✅ Use truthiness for existence checks: if (variable)
// ✅ Use explicit conversion when you mean it: if (Boolean(variable))
// ❌ Avoid == unless you really understand the coercion rules

// 🧪 Test your solutions ✅ PERFECT
function testChallenge1() {
    console.log("🔍 Testing your Challenge 1 solutions...");

    // Test if variables are declared
    try {
        if (typeof userName === "undefined") {
            return "userName variable not declared";
        }
        if (typeof birthYear === "undefined") {
            return "birthYear variable not declared";
        }
        if (typeof isStudent === "undefined") {
            return "isStudent variable not declared";
        }

        // Test data types
        if (typeof userName !== "string") {
            return "userName should be a string";
        }
        if (typeof birthYear !== "number") {
            return "birthYear should be a number";
        }
        if (typeof isStudent !== "boolean") {
            return "isStudent should be a boolean";
        }

        return true;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// INSTRUCTOR: You uncommented the test - shows confidence! Good instinct.
runTests("Challenge 1", testChallenge1);

// INSTRUCTOR OVERALL ASSESSMENT:
console.log("\n" + "=".repeat(50));
console.log("🎓 INSTRUCTOR FINAL FEEDBACK");
console.log("=".repeat(50));
console.log("✅ STRENGTHS:");
console.log("  • Excellent foundational understanding");
console.log("  • Creative problem-solving approach");
console.log("  • Outstanding documentation style");
console.log("  • Good instinct for experimentation");
console.log("  • Shows real programming thinking");

console.log("\n🎯 GROWTH AREAS:");
console.log("  • Variable naming (more descriptive as code grows)");
console.log("  • Understanding === vs == vs truthiness");
console.log("  • When to use different control structures");
console.log("  • Code organization patterns");

console.log("\n🚀 WHAT'S NEXT:");
console.log("  • Challenge 2: Functions will let you package your teaching style");
console.log("  • You're ready for more complex concepts");
console.log("  • Keep that experimental mindset!");
console.log("  • Your CSV project will benefit from this solid foundation");

console.log("\n📊 READINESS FOR CHALLENGE 2: 🌟🌟🌟🌟🌟 (EXCELLENT)");