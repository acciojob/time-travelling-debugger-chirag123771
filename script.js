//your JS code here. If required.
function greet(name) {
  console.log(`Hello, ${name}!`);
  return `Greeted ${name}`;
}

function sayGoodbye(name) {
  console.log(`Goodbye, ${name}!`);
  return `Said goodbye to ${name}`;
}

function main() {
  console.log("Program started!");

  const result1 = greet("Alice");
  console.log(result1);

  const result2 = sayGoodbye("Bob");
  console.log(result2);

  console.log("Program ended!");
}

// Simulating the call stack
console.log("Initial call stack:", []);

main();

console.log("Final call stack:", []);

