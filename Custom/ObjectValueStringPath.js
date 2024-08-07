const get = (obj, path) => {
  // if path is not a string or array of string
  if (path === '' || path.length == 0) return undefined;
  
  // if path is an array, concatenate it and form a string
  // to handle a single case of string
  if (Array.isArray(path)) path = path.join('.');
  
  // filter out the brackets and dot
  let exactPath = [];
  for (let i = 0; i < path.length; i++) {
    if (path[i] !== '[' && path[i] !== ']' && path[i] !== '.') {
      exactPath.push(path[i]);
    }
  }
  
  // get the value of the path in the sequence
  const value = exactPath.reduce((source, path) => source[path], obj);
  
  // if not found return undefined
  return value ? value : undefined;
}


// get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]");
// console.log(get({ developer: "Software Engineer" }, "developer"));
// console.log(get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName"));
// console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"));
// console.log(get([{ developer: "Tom" }, [0, null]], "[1][1]"));
// console.log(get([{ developer: "Tom" }, [0, null]], "[1][3]"));
