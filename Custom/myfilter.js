// Polyfill of Array.filter

Array.prototype.filter = function(callbackFn) {
    const output = []
    this.forEach((element, index) => {
        if (callbackFn(element, index, this)) {
            output.push(element)
        }
    })
    return output
}

console.log([1,2,3,4,5,6].filter((e) => e % 2 === 0))
