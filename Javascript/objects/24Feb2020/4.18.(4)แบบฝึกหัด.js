// 4.18.  แบบฝึกหัด
// 4.	จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sumObject = (salaries) =>{
  let sum = 0;
  for(let key in salaries) {
    sum += salaries[key]
    
  }return sum;
}
console.log(sumObject(salaries)) // 390