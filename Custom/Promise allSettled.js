// Define the polyfill as a static method of the Promise constructor
Promise.polyfillAllSettled = function(promises) {
  // Initialize an array to store the results
  let results = [];
  // Initialize a counter to keep track of how many promises have settled
  let settledCount = 0;
  // Return a new promise that will resolve or reject based on the input promises
  return new Promise(function(resolve, reject) {
    // Loop over the promises
    promises.forEach(function(promise, index) {
      // Call the then method of each promise
      promise.then(function(value) {
        // Push an object with the status and value to the results array
        results[index] = {status: "fulfilled", value: value};
        // Increment the settled count
        settledCount++;
        // If all promises have settled, resolve the polyfill promise with the results array
        if (settledCount === promises.length) {
          resolve(results);
        }
      }).catch(function(reason) {
        // Push an object with the status and reason to the results array
        results[index] = {status: "rejected", reason: reason};
        // Increment the settled count
        settledCount++;
        // If all promises have settled, resolve the polyfill promise with the results array
        if (settledCount === promises.length) {
          resolve(results);
        }
      });
    });
  });
};
