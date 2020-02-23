// 4.7.Computed Properties - แบบฝึกหัด
// 1.	ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง 
// จนกว่าจะเจอคำว่า stop และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา

let object = {};


while (true) {
	propertyName = prompt("Input property's name ");
	if (propertyName === "stop") {
		break
	}
	propertyValue = prompt("Input property's value ");
	object[propertyName] = propertyValue;
}
console.log(object);


