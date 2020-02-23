//  การเขียน Code 1. ให้เขียนโปรแกรมที่รับชื่อ และรับ BMI ของคนทั้งสองคน เมื่อกรอกเสร็จแล้ว ให้แสดง ชื่อ และ BMI ของคนที่มี BMI
// 		มากกว่าออกมาก


	let namePerson1 = prompt("Input your name!")
	let BMIPerson1 = +prompt("Input your BMI!")
	let namePerson2 = prompt("Input your name!")
	let BMIPerson2 = +prompt("Input your BMI!")

	if (BMIPerson1 === BMIPerson2) {
		console.log(`You name is ${namePerson1} your BMI is ${BMIPerson1} and equal ${namePerson2}`)
	} else if (BMIPerson1 > BMIPerson2) {
		console.log(`You name is ${namePerson1} your BMI is ${BMIPerson1} and more than ${namePerson2}`)
	} else {
		console.log(`You name is ${namePerson2} your BMI is ${BMIPerson2}and more than ${namePerson1}`)
	}
