// 2. ให้เขียนโปรแกรมที่รับชื่อ และรับ ส่วนสูงและน้ำหนัก
// 		เพื่อมาคำนวณ BMI ของคนทั้งสองคน เมื่อกรอกเสร็จแล้ว
// 		ให้แสดง ชื่อ และ BMI ของคนที่มี BMI มากกว่าออกมาก

let namePerson1 = prompt("Input your name!")
let weightPerson1 = prompt("Input your weight!")
let heightPerson1 = prompt("Input your height!")

let namePerson2 = prompt("Input your name!")
let weightPerson2 = prompt("Input your weight!")
let heightPerson2 = prompt("Input your height!")

let calculateBMIPerson1 = (weightPerson1 / ((heightPerson1 / 100) ** 2))
console.log(calculateBMIPerson1)

let calculateBMIPerson2 = (weightPerson2 / ((heightPerson2 / 100) ** 2))
console.log(calculateBMIPerson2)

//Compare BMI for 2 person
if (calculateBMIPerson1 === calculateBMIPerson2) {
	console.log(`You name is ${namePerson1} your BMI is ${calculateBMIPerson1} and equal ${namePerson2}`)
} else if (calculateBMIPerson1 === calculateBMIPerson2) {
	console.log(`You name is ${namePerson1} your BMI is ${calculateBMIPerson1} and more than ${namePerson2}`)
} else {
	console.log(`You name is ${namePerson2} your BMI is ${calculateBMIPerson2}and more than ${namePerson1}`)
}