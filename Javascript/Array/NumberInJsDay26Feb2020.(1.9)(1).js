// 1.9.  แบบฝึกหัด
// 1. ให้เขียนฟังก์ชัน random(min, max) ที่จะ random เลข float ตั้งแต่ min จนถึง max มาให้เรา (ไม่รวม max)
// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525


const random = (min, max) => {  
  return min + Math.random() * (max - min);
}
console.log(random(1,5));