function logNumber(n){
	logEvenNumber(n)
	logOddNumber(n)
  
}

function logEvenNumber(n) {
	for (let i = 1; i <= n; i++){
		if (i % 2 == 0)console.log(i)
	}
}

function logOddNumber(n) {
	for (let i = 1; i <= n; i++){
		if (i % 2 !== 0)console.log(i)
	}
}
console.log(logNumber(10));