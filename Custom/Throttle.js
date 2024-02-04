function throttle(callback, delay){
    let timerID;
    const throttleFunction = function(...args){
        const currentTime = Date.now();
        const timeSinceLastCall = currentTime - lastCalledTime;
        const delayRemaining = delay - timeSinceLastCall;
        if(delayRemaining <= 0){
            lastCalledTime = currentTime;
            callback.apply(this,args);
        } else {
            clearTimeout(timerID);
            timerID = setTimeout(()=>{
                lastCalledTime = Date.now();
                callback.apply(this,args);    
            },delayRemaining);
        }

    };

    throttleFunction.cancel = function(){
      clearTimeout(timerID);
    };

    return throttleFunction;
}