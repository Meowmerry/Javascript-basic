// 3.11.  แบบฝึกหัด
// ผลลัพธ์ของความยาว array คืออะไร
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

console.log(fruits.length); // 4

//===============================================================
// 2.	ให้ทำตามขั้นตอนต่อไปนี้
// สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
// เพิ่ม “Rock-n-Roll” ต่อท้าย
// นำค่า Classics ไปทับค่าตรงกลางของ Array
// นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
// เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array

let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
console.log(styles); //[ 'Jazz', 'Blues', 'Rock-n-Roll' ]

styles[1] = 'Classics';
console.log(styles);  //[ 'Jazz', 'Classics', 'Rock-n-Roll' ]

styles.shift();
console.log(styles);  //[ 'Classics', 'Rock-n-Roll' ]

styles.unshift('Rap', 'Reggae');
console.log(styles); //[ 'Rap', 'Reggae', 'Classics', 'Rock-n-Roll' ]

// =========================================================================

// 3.11.  แบบฝึกหัด
// 3.เขียนฟังก์ชัน sumInput() ที่
// ใช้ propmt รับ value มาเก็บใน array
// หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
// คำนวณผลรวมของตัวเลขทั้งหมดใน Array

let sumInput = () => {

	let numbers = [];

	while (true) {

		let value = Number(prompt("Please input number!", 0));

		if (value === "" || value === null || !isFinite(value)) break; // isFinite คือตัวค่าที่คำนวนได้เป็นตัวเลข

		numbers.push(+value);
	}

	let sum = 0;
	for (let number of numbers) {
		sum += number;
	}
	return sum;
}

console.log(sumInput());


//3.11.  แบบฝึกหัด
// 4.	Maximal contiguous subarray (**Optional**)
// ให้เขียนฟังก์ชัน getMaxSubSum(arr) ที่ return ผลรวมของ subarray ที่มากที่สุดที่ติดกัน

function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])) //  5 (the sum of highlighted items)
console.log(getMaxSubSum([2, -1, 2, 3, -9])) // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])) // 11
console.log(getMaxSubSum([-2, -1, 1, 2])) // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])) // 100
console.log(getMaxSubSum([1, 2, 3])) // 6 




