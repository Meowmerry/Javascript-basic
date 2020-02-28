let arr = ["I", "study", "with", "CodeCamp", "FullStack"];

arr.splice(2, 2, "JavaScript"); // เริ่มลบที่ index 1, ลบทั้งหมด 1 element

console.log(arr); // ["I", "JavaScript"]
//================================
//  .forEach
// การเรียกใช้ for each แบบใส่ callback 
// syntax =  arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log('The each item of array1 is  :' + element));

//-----------------------------------------
const arraySparse = [1,3,,7, 9,10]
let numCallbackRuns = 0

arraySparse.forEach((element) => {
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)