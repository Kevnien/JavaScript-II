// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const name = 'Lyle Dylandy';
function enroll()
{
    let codeName = 'LockOn Stratos';
    console.log(`Hello ${name}, you are now ${codeName}.`);
    function sayHi()
    {
        console.log(`Welcome, ${codeName}, to Celestial Being.`);
    }
    return sayHi;
}
let enrollLyle = enroll();
enrollLyle();
enrollLyle();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked, increments and returns a counter variable.
    let count = 0;
    function increment()
    {
        count++;
        console.log( count);
    }
    return increment;
};
const newCounter =  counter();
newCounter();
newCounter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
