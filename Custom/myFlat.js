if (!Array.prototype.myFlat) {
  Array.prototype.myFlat = function(depth = 1) {
    const flattened = [];

    function flatten(arr, currentDepth) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && currentDepth < depth) {
          flatten(arr[i], currentDepth + 1);
        } else {
          flattened.push(arr[i]);
        }
      }
    }

    flatten(this, 0);
    return flattened;
  };
}

// Test cases
const array = [1, [2], [3, [3]]];
console.log(array.myFlat()); // Output: [1, 2, 3, [3]]
console.log(array.myFlat(1)); // Output: [1, 2, 3, [3]]
console.log(array.myFlat(3)); // Output: [1, 2, 3, 3]
console.log(array.myFlat(Infinity)); // Output: [1, 2, 3, 3]
