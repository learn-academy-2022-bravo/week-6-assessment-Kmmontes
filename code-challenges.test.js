// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { STRING_UNARY_OPERATORS } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]
// // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe ("occupationName", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  it("Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
expect(occupationName(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])

})
})

// // ● occupation › Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized

// // ReferenceError: occupationName is not defined


// // b) Create the function that makes the test pass.

// ******I received help on this function. I first tried to declare two variables which would be one for splitting the array and one for capitalizing the array but when I tried to work on capitalize the array variable I had trouble with syntax.

// // PSUEDO CODE
// // Create a function called occupationName that takes in an array of objects 
// // I should get a return array with a sentence about each person capitalized
// //  I immediatley know that I first must have a mapped array in order to go through my values
// //  The I must declare a new variable I will call capitalized so that I can capitalize my returned values after I mapped
// //  Then I will definelty use .split (" ") and charAt(0) in order to get my values returned in to a substrings from the key name so that I can capitalize the first letter by using .toUpperCase in my returned substring
// // I will then ask for a reteurn of the joined capitalized name  along with the value of the occupation in a sentence form joining with "is" and putting them in string interporlations to combine my outputs.


  const occupationName = (array) => {
    return array.map (value => {
      let capitalized = value.name.split(" ").map (letter =>{
        return letter.charAt(0).toUpperCase()+letter.substring(1)})
      return `${capitalized.join(" ")} is ${value.occupation}.`})
  }

//   PASS  ./code-challenges.test.js
//   occupationName
//     ✓ Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.144 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.76s.




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// // Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// // Expected output: [ 2, 1, -1 ]

describe ("onlyThree", () => {
  it("Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

expect(onlyThree(hodgepodge1)).toEqual([2, 0, -1, 0 ])
expect(onlyThree(hodgepodge2)).toEqual([2, 1, -1 ])
})
})


// ● onlyThree › Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// ReferenceError: onlyThree is not defined



// // // b) Create the function that makes the test pass.

// ******I recieved help on this problem because I orginally was stuck on the get back the remainder of 3 syntax and also why we need to use typeOf to remove alld ata types******

// PSEUDO CODE
// // Create a function called onlyThree that takes in a mixed data array 
// // I should get a return array of only the REMAINDERS of the numbers/3
// // I will first filter an array by using .filter to filter out on the array to get back my desired number /3
// I will use typeOf in order to ensure I get back a definte number and remove all other data types 
// // I will decalre a new variable called moduloThree so that I can use .map and got through my filtered numbers and return the module of /3 remainders

const onlyThree = (mixedArray) => {
  let filteredNum = mixedArray.filter(num => {
    return typeof num === 'number' 
  })
  let moduloThree = filteredNum.map (value =>{
    return value%3
  })
  return moduloThree
}


// PASS  ./code-challenges.test.js
// onlyThree
//   ✓ Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.141 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.60s.


// // // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// // // a) Create a test with an expect statement using the variables provided.

// // const cubeAndSum1 = [2, 3, 4]
// // // Expected output: 99
// // const cubeAndSum2 = [0, 5, 10]
// // // Expected output: 1125


describe ("cubedSum", () => {
  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]
  it("Create a function that takes in an array of numbers and returns the sum of all the numbers cubed", () => {
expect(cubedSum(cubeAndSum1)).toEqual(99)
expect(cubedSum(cubeAndSum2)).toEqual(1125)
})
})

// ● cubedSum › Create a function that takes in an array of numbers and returns the sum of all the numbers cubed

// ReferenceError: cubedSum is not defined




// // b) Create the function that makes the test pass.


// PSEUDO CODE 
// Create a function called cubedSum that takes in an array of numbers 
// This array will return the sum of all the numbers cubed 
// I will declare a new variable called cubedArray and pass the array in it and .map in the array I pass in
// I will get the return of **3 to cube the value 
// Then I will create another function to also return my cubedArray and .reduce in order to get all the sum of numbers
// I also have to call on the value I want added in the return


  const cubedSum = (array) =>{
    let cubedArray = array.map (value => {
      return value **3
    })
    return cubedArray.reduce ((a,b) => a+b,)
  }
//   PASS  ./code-challenges.test.js
//   cubedSum
//     ✓ Create a function that takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.143 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.74s.
