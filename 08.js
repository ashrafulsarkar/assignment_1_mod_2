// Exercise 8: 

// Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.

function doubleNumbers(numbers) {
    const doubledNumbers = numbers.map((number) => {
      return number * 2
    })
    return doubledNumbers
}