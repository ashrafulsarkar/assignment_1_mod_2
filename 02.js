// Exercise 2:

// Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.

const sumNumbers = (...numbers) => {
    let sum = 0
    for (const number of numbers) {
        sum += number
    }
    return sum
}