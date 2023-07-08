// Exercise 11: 

// Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.

function sortNumbers(numbers) {
    numbers.sort((a, b) => a - b)
    return numbers
}