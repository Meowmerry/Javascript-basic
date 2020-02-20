// 4. ให้เขียนโปรแกรมรับตัวเลขกี่ตัวก็ได้ แต่จะหยุดรับเมื่อกด Cancel เมื่อกด Cancel แล้วให้โชว์ตัวเลขที่มากที่สุด 2 อันดับแรกออกมา

let maxNumber1 = 0;
let maxNumber2 = 0;
while (true) {
	let inputNumber = parseInt(prompt("Please input number! "));
	if (inputNumber > maxNumber2) {
		maxNumber2 = inputNumber;
		console.log(`The numberTwo is ${maxNumber2}`);

		let inputNewNumber = 0;
		if (maxNumber2 > maxNumber1) {
			maxNumber1 = inputNewNumber;
			console.log(`The numberOne is ${maxNumber1}`);
		}
	} else {
		break
	}
} console.log(`The max numbers are' ${maxNumber1}  and ${maxNumber2} `)
