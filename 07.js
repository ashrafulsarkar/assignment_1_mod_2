// Exercise 7:

// Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.

function getAddressCity(address) {
    const city = address?.city
  
    return city ?? "Unknown"
}