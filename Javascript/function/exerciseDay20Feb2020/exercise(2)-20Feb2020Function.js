// 2. ให้เขียนโปรแกรมที่รับชื่อ และรับ ส่วนสูงและน้ำหนัก
// 		เพื่อมาคำนวณ BMI ของคนทั้งสองคน เมื่อกรอกเสร็จแล้ว
// 		ให้แสดง ชื่อ และ BMI ของคนที่มี BMI มากกว่าออกมาก

let firstName = prompt("Input your name!")
let firstHeight = +prompt("Input your height!")
let firstWeight = +prompt("Input your weight!")

let secondName = prompt("Input your name!")
let secondHeight = +prompt("Input your height!")
let secondWeight = +prompt("Input your weight!")

let firstBMI = calculateBMI(heightPerson1,weightPerson1)
let secondBMI = calculateBMI(heightPerson2,weightPerson2)


//Compare BMI for 2 person
if(firstBMI > secondBMI){
	printName(`Your name is ${firstName} and your BMI ${firstBMI}`)
}else{
	printName(`Your name is ${secondName} and your BMI ${secondBMI}`)
}

function printName(name, BMI){
	alert(`Name ${name}\nBMI ${BMI}`)
}
function calculateBMI(height,weight){
	height /=100;
	return weight / (height ** 2)
}