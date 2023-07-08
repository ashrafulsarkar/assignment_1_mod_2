// Exercise 1:

// Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age.

function destructureExample(person, numbers) {
    const { name, age } = person;
    const [firstNumber, ,thirdNumber] = numbers;
  
    return {
      name,
      age,
      firstNumber,
      thirdNumber,
    };
}