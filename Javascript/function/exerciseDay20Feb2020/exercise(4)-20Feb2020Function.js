// 4. ให้เขียนโปรแกรมรับตัวเลขกี่ตัวก็ได้ แต่จะหยุดรับเมื่อกด Cancel เมื่อกด Cancel แล้วให้โชว์ตัวเลขที่มากที่สุด 2 อันดับแรกออกมา

let maxNumber1 = 0;
let maxNumber2 = 0;

while (true) {
	let inputNumber = +prompt("Please input number! ");
	if (inputNumber) {
		if (inputNumber > maxNumber2) {
			maxNumber2 = inputNumber;
			if (maxNumber2 > maxNumber1) {
				let inputNewNumber = 0;
				inputNewNumber = maxNumber1;
				maxNumber1 = maxNumber2;
				maxNumber2 = inputNewNumber;
				console.log(`The numberOne is ${maxNumber1}`);
				console.log(`The numberTwo is ${maxNumber2}`);
			}
		}
	} else {
		
		break;
	}
} console.log(`The max numbers are' ${maxNumber1} and ${maxNumber2} `)
