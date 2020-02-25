
// 6.4.  “this” ขึ้นอยู่กับตัวที่เก็บ Object ปัจจุบัน

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// ใส่ function sayHi ไปให้ทั้งสอง Object
user.f = sayHi;
admin.f = sayHi;

// การเรียกฟังก์ชันทั้งสองครั้งนี้ this จะแตกต่างกัน
user.f(); // John  (this จะหมายถึง user)
admin.f(); // Admin  (this จะหมายถึง admin)

admin['f'](); // Admin (dot หรือ square brackets ก็ได้)
//=========================================
let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {
    console.log("Hello!");
  };
  
  user.sayHi(); // Hello!
  console.log(user)//
