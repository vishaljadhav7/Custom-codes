// problem statement --> Write a function to return the count of numbers in an Array 

// In this question, the candidate needs to implement a function that returns the count of numbers in a provided array.

// The array might contain other data types and nested arrays too.

// Many users have reported that this question was asked in the frontend interview process of companies like MakeMyTrip.

// Syntax
// countNumbers(collection);
// Arguments
// collection (Array): The input array.
// Return
// the total count of numbers inside the array.
// Example
// countNumbers([ 1,"2", [3,4,[5]], function(){}, 8, 9 ]);
// // 6


/**
 * Returns the count of numbers in the provided array.
 * @param {Array} collection - The input array.
 * @returns {number} - The total count of numbers inside the array.
 */
function countNumbers(collection) {
    let count = 0;

    function helper(val) {
        if (typeof val === 'object' && !Array.isArray(val)) {
            // Skip non-array objects (e.g., function, null)
            return;
        }

        if (typeof val === 'function' || typeof val === 'string') {
            // Skip functions and strings
            return;
        }

        if (typeof val === 'number') {
            // Increment count for numbers
            count++;
            return;
        }

        // Recurse into nested arrays or objects
        for (const data of val) {
            helper(data);
        }
    }

    // Start the recursion
    helper(collection);

    return count;
}

// Example usage:
console.log(countNumbers([1, "2", [3, 4, [5]], function () { }, 8, 9])); // Output: 6
console.log(countNumbers([])); // Output: 0
