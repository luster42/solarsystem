/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  // Your code goes here...

  if (array.length === 0) {
    return undefined;
  }

  let currentMin = cb(array[0]);
  let index = 0;
  let obj = array[0];
  let type = typeof currentMin;

  if (type === "string") {
    for (let i = 1; i < array.length; i++) {
      if (cb(array[i]) < currentMin) {
        currentMin = cb(array[i]);
        index = i;
        obj = array[index];
      }
    }
  } else {
    for (let i = 1; i < array.length; i++) {
      if (currentMin < cb(array[i]) || currentMin === cb(array[i])) {
        obj = array[index];
      } else {
        currentMin = cb(array[i]);
        index = i;
      }
    }
  }

  return obj;
}

export function maxBy(array, cb) {
  // Your code goes here...

  if (array.length === 0) {
    return undefined;
  }

  let currentMax = cb(array[0]);
  let index = 0;
  let obj = array[0];
  let type = typeof currentMin;

  if (type === "string") {
    for (let i = 1; i < array.length; i++) {
      if (cb(array[i].length) > currentMax.length) {
        currentMax = cb(array[i]);
        index = i;
        obj = array[index];
      }
    }
  } else {
    for (let i = 1; i < array.length; i++) {
      if (currentMax > cb(array[i]) || currentMax === cb(array[i])) {
        obj = array[index];
      } else {
        currentMax = cb(array[i]);
        index = i;
      }
    }
  }
  return obj;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function