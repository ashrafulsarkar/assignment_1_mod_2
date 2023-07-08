// Exercise 9:

// Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.

function filterEvenNumbers(numbers) {
    const evenNumbers = numbers.filter((number) => {
        return number % 2 === 0
    })
    return evenNumbers
}