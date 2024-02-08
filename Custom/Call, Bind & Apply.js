// Check if the browser already supports call, bind & apply
if (!Function.prototype.call || !Function.prototype.bind || !Function.prototype.apply) {
  // Define a custom constructor function for Function
  var Function = function (func) {
    // Validate the func argument
    if (typeof func !== 'function') {
      throw new TypeError('Function must be a function');
    }
    // Initialize the internal function
    var self = func;
    // Define the call method
    self.call = function (context, ...args) {
      // If the context is null or undefined, use the global object
      context = context || window;
      // Create a unique property name
      var prop = Symbol('func');
      // Assign the function to the context object
      context[prop] = self;
      // Invoke the function with the context and the arguments
      var result = contextprop;
      // Delete the property from the context object
      delete context[prop];
      // Return the result
      return result;
    };
    // Define the bind method
    self.bind = function (context, ...args) {
      // If the context is null or undefined, use the global object
      context = context || window;
      // Return a new function that calls the original function with the bound context and arguments
      return function (...args2) {
        return self.call(context, ...args, ...args2);
      };
    };
    // Define the apply method
    self.apply = function (context, args) {
      // If the context is null or undefined, use the global object
      context = context || window;
      // If the args is not an array-like object, throw an error
      if (!Array.isArray(args) && (typeof args !== 'object' || args === null)) {
        throw new TypeError('Arguments must be an array-like object');
      }
      // Convert the args to an array
      args = Array.from(args);
      // Call the call method with the context and the args
      return self.call(context, ...args);
    };
    // Return the function
    return self;
  };
}