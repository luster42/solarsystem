import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  // Your code goes here...

  const temps = data.planets.map((planet) => {
    return planet.avgTemp;
  })

  const sum = temps.reduce((acc, currentVal) => {
    return acc + currentVal;
  })



  return sum / temps.length;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
