// 3. ให้เขียนโปรแกรมรับตัวเลขกี่ตัวก็ได้ แต่จะหยุดรับเมื่อกด Cancel เมื่อกด Cancel
// 		แล้วให้โชว์ตัวเลขที่มากที่สุดออกมา

let number = 0;
while (true) {
	let inputNumber = parseInt(prompt('Plase in put number!'));
	if (inputNumber) {
		if (inputNumber > number) {
			number = inputNumber;
			console.log(number);
		}
	} else {
		break;
	}
}
console.log('The biggest number is ' + number);
