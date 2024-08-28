/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  const newArray = data.asteroids.map((a) => {
    return a.discoveryYear;
  });

  const count = {};

  newArray.forEach((element) => {
    count[element] = (count[element] || 0) +1;
  });

  const array = Object.keys(count).map((key) => ({ key, value: count[key]}));

  const max = array.sort((a, b) => {
    return b.value - a.value;
  });
  return parseInt(max[0].key);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
