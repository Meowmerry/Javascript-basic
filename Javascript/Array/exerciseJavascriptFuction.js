// 4.10 ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()

// 1.1      
array1 = [1, 2, 30, 400];
let newArray1 = array1.map((item) => {
	return item * 2
})
console.log(newArray1); //[2, 4, 60, 800]



// 1.2   
array2 = [1, 2, 3, 4];
let newArray2 = array2.map((item) => {
	return item.toString()
})
console.log(newArray2); //array2 ["1", "2", "3", "4"]



// 1.3   
array3 = [1, "1", 2, {}]
let newArray3 = array3.map((item) => {
	return typeof (item)
})
console.log(newArray3); //["number", "string", "number", "object"]



// 1.4   array1 = ["apple", "banana", "orange"]
array4 = ["apple", "banana", "orange"]
let newArray4 = array4.map((item) => {
	return item.toUpperCase()
})
console.log(newArray4); // [ 'APPLE', 'BANANA', 'ORANGE' ]



// 1.5 
array5 = [
	{ name: "apple", age: 14 },
	{ name: "banana", age: 18 },
	{ name: "watermelon", age: 32 },
]
let newArray5 = array5.map((item) => {
	return item.name
})
console.log(newArray5); // [ 'apple', 'banana', 'watermelon' ]



// 1.6 
array6 = [
	{ name: "apple", age: 14 },
	{ name: "banana", age: 18 },
	{ name: "watermelon", age: 32 },
]
let newArray6 = array6.map((item) => {
	return item.age
})
console.log(newArray6); //[14, 18, 32] 


//1.7 
array7 = [
	{ name: "apple", surname: "London" },
	{ name: "banana", surname: "Bangkok" },
	{ name: "watermelon", surname: "Singapore" },
]
let newArray7 = array7.map((item) => {
	return `${item.name}  ${item.surname}`
});
console.log(newArray7); //array2 ["apple London", "banana Bangkok", "watermelon Singapore"]

// 1.8 
array8 = [1, 3, 4, 5, 6, 7, 8]
let newArray8 = array8.map((item) => {
	if (item % 2 === 0) {
		return 'even'
	} else if (item % 2 === 1) {
		return 'odd'
	}
})
console.log(newArray8);
// ["odd", "odd", "even", "odd", "even", "odd", "even"]



//1.9 
array9 = [1, -3, 2, 8, -4, 5]
let newArray9 = array9.map((item) => {
	return Math.abs(item)
})
console.log(newArray9)  //[1, 3, 2, 8, 4, 5]



// 1.10
array10 = [100, 200.25, 300.84, 400.3]
let newArray10 = array10.map((item) => {
	return item.toFixed(2);
})
console.log(newArray10) // ["100.00", "200.25", "300.84", "400.30"]


// 1.11
array11 = [
	{ name: "apple", birth: "2000-01-01" },
	{ name: "banana", birth: "1990-10-01" },
	{ name: "watermelon", birth: "1985-12-01" },
]
let newArray11 = array11.map((item) => {
	nowDate = new Date();
	item.age = nowDate.getFullYear() - new Date(item.birth).getFullYear()
	return item
})

console.log(newArray11);
//  [
//     { name: "apple", birth: "2000-01-01", age: 19 },
//     { name: "banana", birth: "1990-10-01", age: 29 },
//     { name: "watermelon", birth: "1985-12-01", age: 33 },
//   ] 


// 1.12
array12 = [
	{ name: "apple", birth: "2000-01-01" },
	{ name: "banana", birth: "1990-10-10" },
	{ name: "watermelon", birth: "1985-12-30" },
]
let monthInYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let newArray12 = array12.map((item) => {
	date = new Date(item.birth).getDate();
	month = new Date(item.birth).getMonth();
	year = new Date(item.birth).getFullYear();
	return ` <tr> <td> ${item.name} </td> <td> ${year} ${monthInYear[month]} ${date} </td> </tr>`
});
console.log(newArray12);
// [	"<tr>< td > apple </td > < td > 01 jan 2000</td> </tr > ",
//  "<tr> <td>banana</td>  <td>10 oct 1990</td> </tr>",
// 	"<tr> <td>watermelon</td>  <td>30 dec 1985</td> </tr>", ]

