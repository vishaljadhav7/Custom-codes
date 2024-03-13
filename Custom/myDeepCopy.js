if (!Object.prototype.myDeepCopy) {
  Object.prototype.myDeepCopy = function() {
    const visited = new WeakMap(); // To handle circular references

    function clone(obj) {
      if (obj === null || typeof obj !== 'object') {
        return obj; // Base case: primitive values or null
      }

      if (visited.has(obj)) {
        return visited.get(obj); // Return the existing clone for circular references
      }

      const copy = Array.isArray(obj) ? [] : {};
      visited.set(obj, copy); // Mark the object as visited

      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          copy[key] = clone(obj[key]);
        }
      }

      return copy;
    }

    return clone(this);
  };
}

// Test case
const originalObj = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001'
  }
};

const clonedObj = originalObj.myDeepCopy();
console.log(clonedObj);
console.log(clonedObj === originalObj); // Should be false
console.log(clonedObj.address === originalObj.address); // Should be false
