// 4.18. (1) แบบฝึกหัด
// ให้ทำตามคำสั่งต่อไปนี้
// สร้าง Object เปล่าขึ้นมา
// เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”
// เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”
// เปลี่ยน properties name เป็น “Boy”
// ลบ properties name ออกจาก Object

let obj = {};

obj.name = "Sonter";
obj.surname = "Pakorn";
console.log(obj); //{ name: 'Sonter', surname: 'Pakorn' }
obj["name"] = "Boy";
console.log(obj); //{ name: 'Boy', surname: 'Pakorn' }
delete obj.name;
console.log(obj); //{ surname: 'Pakorn' }