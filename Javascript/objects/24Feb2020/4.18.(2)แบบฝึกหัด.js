// 4.18.  แบบฝึกหัด
// 2.	ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters 
// เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties ไหม ถ้ามีให้คืนค่า false ถ้าไม่มีให้คืนค่า true


let isEmpty = (obj) => {
	let isEmpty = true;
	for (let key in obj) {
		isEmpty = false;
	}
	return isEmpty;
}
let obj = {
	
};

console.log(isEmpty(obj)) // true