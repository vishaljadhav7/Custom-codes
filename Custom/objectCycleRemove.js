const removeCycle = (obj) => {
    //set store
    const set = new WeakSet([obj]);
    
    //recursively detects and deletes the object references
    (function iterateObj(obj) {
        for (let key in obj) {
            // if the key is not present in prototye chain
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object'){
                    // if the set has object reference
                    // then delete it
                    if (set.has(obj[key])){ 
                      delete obj[key];
                    }
                    else {
                      //store the object reference
                        set.add(obj[key]);
                      //recursively iterate the next objects
                        iterateObj(obj[key]);
                    }
                }
            }
        }
    })(obj);
}

/
/ 
