function myRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise)
                .then(resolve) // Resolve as soon as any promise resolves
                .catch(reject); // Reject if any promise rejects
        });
    });
}

// Example usage:
const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'one'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'two'));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 200, 'three'));

myRace([promise1, promise2, promise3])
    .then((value) => {
        console.log(value); // Output: "two" (since promise2 resolves first)
    })
    .catch((error) => {
        console.error(error);
    });
