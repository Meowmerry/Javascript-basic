// 7.4.  แบบฝึกหัด
// สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods นี้
// read(): รับค่าจาก propmt สองตัว
// sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
// mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว

function Calculator(firstNum, secondNum) {
	this.firstNum = firstNum;
	this.secondNum = secondNum;

	this.read = function () {
		this.firstNum = +prompt("input first number");
		this.secondNum = +prompt("input first second");
	};
	this.sum = function () {
		let sum = this.firstNum + this.secondNum;
		return sum;

	};
	this.mul = function () {
		let mul = this.firstNum * this.secondNum;
		return mul;

	}
};

let object = new Calculator(4,5);
console.log(object.read());
console.log(object.sum());
console.log(object.mul());