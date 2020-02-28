// 2.11.  แบบฝึกหัด
// เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่

let ucFirst = (word) => {
	// return string.charAt(0).toUpperCase() + string.slice(1);
	return word[0].toUpperCase() + word.slice(3); // + string.slice(1) คือการบวกตั้งแต่ตัว index ที่ 1
}

console.log(ucFirst("john")); //John
console.log(ucFirst("hello world!")); // Hello world
console.log(ucFirst("thasanee")); // Thasanee
console.log(ucFirst("javascript")); // Javascript

//================================================================
//2.11.  แบบฝึกหัด
//2.เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” หรือ “viagra” ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

const checkSpam = (str) => {
	str = str.toLowerCase();
	return str.includes("xxxx") || str.includes("viagra")
}

console.log(checkSpam("heooooo")); // false
console.log(checkSpam("xxxx")); // true

//====================================================
// 2.11.  แบบฝึกหัด
// 3.เขียนฟังก์ชันที่ truncate(str, maxlength) โดยฟังก์ชันดังกล่าวจะเช็คว่า string ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม 
// ถ้าเกินให้แทน ข้อความต่อจากนั้นด้วย “...”
// truncate("What I'd like to tell on this topic is:", 20)// "What I'd like to te…"
// truncate("Hi everyone!", 20) // "Hi everyone!"

let truncate = (str, maxlength) => {
	if (str.length < maxlength) {
		return str;
	} else {
		return str.slice(0, maxlength - 1) + "...";
	}
}
console.log(truncate("What I'd like to tell on this topic is:", 20));  //What I'd like to te...
console.log(truncate("Hiveryone!", 20));   // Hiveryone!

//====================================================
// 2.11.  แบบฝึกหัด
// 4. เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string 
// ที่เป็นค่าเงิน dollar ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้
// alert( extractCurrencyValue('$120', 30.5) === 3660 ); // true

let extractCurrencyValue = (string, rate) => {
	return + string.slice(1)* rate;
}
console.log(extractCurrencyValue('$120', 30.5));  //3660