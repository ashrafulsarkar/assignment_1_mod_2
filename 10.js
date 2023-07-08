// Exercise 10:
// Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.

function sumArray(numbers) {
    let sum = 0
    for (const i in numbers) {
        sum += numbers[i]
    }
    return sum
}