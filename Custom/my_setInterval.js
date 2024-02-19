// A polyfill for setInterval using setTimeout
function setIntervalPolyfill(callback, delay) {
  // Create a reference object to store the timeout id
  const timerRef = { id: null };
  // Define a function that calls the callback and recurses
  const timeout = () => {
    timerRef.id = setTimeout(() => {
      callback();
      timeout();
    }, delay);
  };
  // Start the first timeout
  timeout();
  // Return the reference object
  return timerRef;
}

// A polyfill for clearInterval using clearTimeout
function clearIntervalPolyfill(timerRef) {
  // Clear the timeout using the stored id
  clearTimeout(timerRef.id);
}

// Usage example
const timerRef = setIntervalPolyfill(() => {
  console.log("Hello");
}, 1000); // Prints "Hello" every second

setTimeout(() => {
  clearIntervalPolyfill(timerRef); // Stops the interval after 5 seconds
}, 5000);
