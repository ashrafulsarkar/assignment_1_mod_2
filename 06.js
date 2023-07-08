// Exercise 6:

// Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).

function getLargestNumber(number1, number2) {
    let largestNumber = number1
    if (number2 > largestNumber && number2 !== undefined) {
      largestNumber = number2
    }
  
    return largestNumber
}
  