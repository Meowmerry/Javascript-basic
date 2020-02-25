// 3.	สร้าง object calculator จาก 3 methods นี้:
// read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
// sum() คืนค่าผลบวกของ 2 ค่านั้น.
// mul() คืนค่าผลคูณของ 2 ค่านั้น.


// การประกาศแบบ มี Short  hand  ที่ key and value เป็น Medthod function 
let calculator = {
  first: 0,
  second: 0,
  read() {
    calculator.first = +prompt("input first number");
    calculator.second = +prompt("input first second");
  },
  sum() {
    let sum = calculator.first + calculator.second;
    return sum;
  },
  mul() {
    let mul = calculator.first * calculator.second;
    return mul;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// ========================================================================
// การประกาศแบบ มี Key and Value เป็น Medthod function 
let calculator = {
  first: 0,
  second: 0,
  read : function() {
    calculator.first = +prompt("input first number");
    calculator.second = +prompt("input first second");
  },
  sum : function() {
    let sum = calculator.first + calculator.second;
    return sum;
  },
  mul : function() {
    let mul = calculator.first * calculator.second;
    return mul;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//===============================================================================
// ประกาศฟังชั่นแล้ว ค่อยนำไปเรียกใช้

let calculator = {
  first: 0,
  second: 0,
};
function read() {
  calculator.first = +prompt("input first number");
  calculator.second = +prompt("input first second");
}
function sum() {
  let sum = calculator.first + calculator.second;
  return sum;
}

function mul() {
  let mul = calculator.first * calculator.second;
  return mul;
}

// เรียก ฟังชั่นมาใช้ โดย Object.xx = ฟังชั่นที่เราประกาศไว้
calculator.r = read; // read คือฟังชั่น
calculator.s = sum;  // read คือฟังชั่น
calculator.m = mul;  // read คือฟังชั่น

calculator.r();
alert(calculator.s());
alert(calculator.m());