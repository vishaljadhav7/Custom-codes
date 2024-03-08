const arr = [1, 2, 3, 4, 5]; 

function myFunction(ele) { 
	console.log(ele); 
} 

Array.prototype.myForEach = function (callback) { 
	for (const i in this) { 
		callback(this[i]); 
	} 
}; 

arr.myForEach(myFunction);
