// Custom polyfill for Promise.all()
function myall(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedCount = 0;

        if (promises.length === 0) {
            resolve(results); // Empty input, resolve immediately
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = value;
                    completedCount++;

                    if (completedCount === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}

// Example usage
const p1 = Promise.resolve(3);
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 100);
});

myall([p1, p2])
    .then((values) => {
        console.log(values); // Output: [3, "foo"]
    })
    .catch((error) => {
        console.error("Error:", error);
    });
