// 3.4.   การตั้งชื่อตัวแปรที่ดี (Lab 1)

let human, name;
name = "Thasanee Meow"
human = name;
console.log(human)


// 3.4.   การตั้งชื่อตัวแปรที่ดี  ตัวแปรและประเภทของข้อมูล (Exercise 2)
let myWallet = 100000, myParentsName = 'Familiy', myAddress = '1234 Addresss Bangkok 103010', ageOfUniverse = 5000000
let age = 18, myAddress1 = '12/34 Addresss Bangkok 103010'
let myProflie = 'My proflie'
let name1 = "Codecamp";

console.log(`hello ${1}`);
console.log(`hello ${"name1sdfghjkfghjakakakakkaka"}`);
console.log(`hello ${name1}`);

console.log(`${myProflie} Hello World!! My name is ${name} I am ${age} year old. and my address is ${myAddress1}`)

//============================================================================


console.log(1 / 0);

console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "Hello");
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert);


//============================================================================

let var2 = false;
console.log(typeof var2); // boolean

var2 = String(var2);
console.log(var2); //false
console.log(typeof var2); // type String


//============================================================================

let value = "9" / "4.5"
console.log(typeof value); // type number
console.log(value); //2

let str = '240';
console.log(typeof str); // string

let num = Number(str);
console.log(num); // 240
console.log(typeof num); // number

let var3 = 0 ** 0
console.log(var3)


console.log(1 === '1') // false

//================================

// 4.6. แบบฝึกหัด การดำเนินการเบื้องต้น

// 1. "" + 1 + 0 //10

// 2. "" - 1 + 0  // -1

// 3. true + false  // 1

// 4.  6 / "3"  // 2


// 5. "2" * "3"  //6


// 6.  4 + 5 + "px"   //9px


// 7. "$" + 4 + 5 // 45


// 8. "4" - 2  //2


// 9. "4px" - 2 // NaN


// 10. 7 / 0  // infinity


// 11.	"  -9  " + 5 // "-9 5"


// 12.	"  -9  " - 5  // -14


// 13.	null + 1   // 1


// 14.	undefined + 1  // Nan


// 15.	" \t \n" - 2   // -2

//====================================================================

console.log(5 > 4) // true

console.log('apple' > 'pineapple') // false

console.log('2' > '2') // false

console.log(undefined == null) // true

console.log(undefined === null) //false

console.log('bee' < 'be') // false

console.log('bee' > 'Bee') // true

console.log('Bee' < 'be') // true

// =========================================================================
// # If การเขียนเงื่อนไข

let age1 = prompt('How old are you?', 12)

console.log(age1)

//=======================================================
// # 6.5 แบบฝึกหัด  #2.	ใช้ if else ในการเขียนถามชื่อของคุณ

let yourName = prompt("Hello, what is your name?")
let answer = "meow"

if (yourName === answer) {
    alert('Hello meow, you are so smart!')
} else if ( yourName !== answer) {
    alert("Opp! who are you? I don't know you")
} else {
    alert('Please answer question!!')
}

//=======================================================
// # 6.5 แบบฝึกหัด   3.	ใช้ prompt ในการรับคะแนนมาคำนวณเกรด

let grade = prompt('Please input your !');
if(grade > 80) {
    alert("Your grade is : A ")
}else if(grade <= 70 && grade <= 79) {
    alert("Your grade is : B ")
}else if(grade <= 60 && grade <= 69) {
    alert("Your grade is : C ")
}else if(grade <= 50 && grade <= 59) {
    alert("Your grade is : D ")
}else{
    alert("Your grade is : F ")
}

// # 6.5 แบบฝึกหัด   4.	เปลี่ยน if-else ข้างล่างในอยู่ในรูปของ Ternary Operators

let myAge = prompt('How old are you? ')
let price;

price = (myAge < 18) ? 2000 :  3500;

alert(price)
