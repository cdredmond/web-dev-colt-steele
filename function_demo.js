// printReverse()
function printReverse(arr){
	var i = arr.length - 1
	while (i >= 0){
		console.log(arr[i]);
		i -= 1;
	}
}

// isUniform()
function isUniform(arr){
	var org = arr[0];
	for (var i = 1; i < arr.length; i++){
		if (arr[i] != org)
			return false;
	}
	return true;
}

// sumArray()
function sumArray(arr){
	var result = 0;
	for (var i = 0; i < arr.length; i++){
		result += arr[i]
	}
	return result;
}

// max()
function max(arr){
	var hi = arr[0];
	for (var i = 1; i < arr.length; i++){
		if (arr[i] > hi){
			hi = arr[i];
		}
	}
	return hi;
}

console.log(printReverse([1,2,3,4]));
console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
console.log(sumArray([1,2,3]));
console.log(sumArray([10,3,10,4]));
console.log(max([1,2,3]));
console.log(max([10,3,10,4]));
