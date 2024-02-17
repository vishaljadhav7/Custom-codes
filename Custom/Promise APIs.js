// Define the polyfill as a static method of the Promise constructor
Promise.polyfillAll = function(promises) {
  // Initialize an array to store the results
  let results = new Array(promises.length);
  // Initialize a counter to keep track of how many promises have resolved
  let resolvedCount = 0;
  // Return a new promise that will resolve or reject based on the input promises
  return new Promise(function(resolve, reject) {
    // Loop over the promises
    promises.forEach(function(promise, index) {
      // Call the then method of each promise
      promise.then(function(value) {
        // Store the value in the results array at the corresponding index
        results[index] = value;
        // Increment the resolved count
        resolvedCount++;
        // If all promises have resolved, resolve the polyfill promise with the results array
        if (resolvedCount === promises.length) {
          resolve(results);
        }
      }).catch(function(reason) {
        // If any promise rejects, reject the polyfill promise with the same reason
        reject(reason);
      });
    });
  });
};
