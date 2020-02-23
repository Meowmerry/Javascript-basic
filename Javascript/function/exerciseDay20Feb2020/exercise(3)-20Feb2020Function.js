// 3. ให้เขียนโปรแกรมรับตัวเลขกี่ตัวก็ได้ แต่จะหยุดรับเมื่อกด Cancel เมื่อกด Cancel
// 		แล้วให้โชว์ตัวเลขที่มากที่สุดออกมา

let max = -Infinity;
let input = -Infinity;

while (input) {
	input = +prompt('Enter Number: ')
	if(input > max) {
		max = input
	}
}
console.log('The biggest number is ' + number);
