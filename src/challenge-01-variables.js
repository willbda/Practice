// Challenge 1: Variables and Data Types
// 🎯 Goal: Master variable declarations, data types, and basic operations

updateChallengeInfo(
  "Challenge 1: Variables & Data Types",
  "Practice declaring variables, understanding data types, and performing basic operations. Complete each TODO below.",
  [
    "Use let for variables that change, const for constants",
    "JavaScript has 7 primitive types: string, number, boolean, undefined, null, symbol, bigint",
    "Use typeof operator to check data types",
    "Template literals use backticks: `Hello ${name}`",
  ]
);

console.log("📚 Starting Challenge 1: Variables and Data Types");

// TODO 1: Variable Declarations
// Declare a variable called 'userName' using let and assign it your name
// Declare a constant called 'birthYear' and assign your birth year
// Declare a variable called 'isStudent' and assign a boolean value

// YOUR CODE HERE:

let userName = "David Williams";
const birthYear = 1992;
let isStudent = false;

// TODO 2: Data Type Exploration
// Create variables of each primitive type and log their typeof
// Create: myString, myNumber, myBoolean, myUndefined, myNull

// YOUR CODE HERE:

let myString = "hello friend!",
  myNumber = 23,
  myBoolean = true,
  myUndefined,
  myNull = null;

// TODO 3: String Operations
// Create a greeting message using template literals that includes:
// - Your name from userName variable
// - Your calculated age (current year - birth year)
// - Whether you're a student or not

// YOUR CODE HERE:

const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

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

// TODO 4: Number Operations
// Create two number variables and demonstrate:
// - Addition, subtraction, multiplication, division
// - Modulo operator (%)
// - Increment and decrement operators

// YOUR CODE HERE:

console.log("\n let's do some math");

let n = 5,
  m = 27;

console.log(`First, there's addition. Easy to do:\n\t${n} + ${m} = ${n + m}`);
console.log(`\nWhereas subtraction goes in reverse:\n\t${m} - ${n} = ${m - n}`);
console.log(
  `\nModulo is up next; this one is funny because we don't talk about it much, but it's intuitive and useful. It's just the remainder of division;\n\tthe remainder of ${m} % ${n} is of course: ${
    m % n
  }, which is to say ${
    m % n
  } is what's left over when you divide ${n} evenly into ${m}`
);
console.log(
  `\nAnother way to think about addition and subtraction is with increment and decriment. Take a look at this!\n\n`
);
for (let i = 0; i < n + 1; i++) {
  let w = m - i;
  console.log(`Step:${i + 1}:\t${m}-${i}=${w}\t\t and\t\t ${w}+${i}=${m}`);
}

// TODO 5: Type Conversion
// Demonstrate both implicit and explicit type conversion:
// - Convert a string to a number
// - Convert a number to a string
// - Show what happens with "truthy" and "falsy" values

// YOUR CODE HERE:

let stringWithImpliedNum = "33";
let implicitNumberConversion = 1 * stringWithImpliedNum;
console.log("implicitNumberConsersion is a", typeof implicitNumberConversion);
let definitelyANumber = 29;
let explicitNumberConversiontoString = String(definitelyANumber);
console.log(
  `explicitNumberConversiontoString (${explicitNumberConversiontoString}) is a`,
  typeof explicitNumberConversiontoString
);
if (definitelyANumber !== true) {
  console.log(`Wait, what?? ${definitelyANumber} is not truthy?`);
}

// 🧪 Test your solutions
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

// Uncomment the line below when you're ready to test your solution
runTests("Challenge 1", testChallenge1);
