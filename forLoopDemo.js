console.log("Print all numbers between -10 and 19");
for(num = -10; num < 20; num++){
 	console.log(num);
}

console.log("Print all even numbers between 10 and 40");
for (num = 10; num <= 40; num += 2){
 	console.log(num);
}

console.log("Print all odd numbers between 300 and 333");
for (num = 301; num <= 333; num += 2 ){
 	console.log(num);
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
for (num = 5; num <= 50; num++){
 	if (num % 15 === 0){
 		console.log(num);
 	};
}
