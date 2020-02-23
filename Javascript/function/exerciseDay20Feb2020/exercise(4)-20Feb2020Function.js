// 4. ให้เขียนโปรแกรมรับตัวเลขกี่ตัวก็ได้ แต่จะหยุดรับเมื่อกด Cancel เมื่อกด Cancel แล้วให้โชว์ตัวเลขที่มากที่สุด 2 อันดับแรกออกมา
let max1 = -Infinity;
let max2 = -Infinity;
let input = -Infinity;

while (input) {
	input = +prompt('Enter Number: ')
	if (input >= max1) {
		max2 = max1;
		max1 = input;
		console.log(max1, max2, input)
	} else if (input > max2) {
		max2 = input;
	}
}
console.log(max1, max2);
