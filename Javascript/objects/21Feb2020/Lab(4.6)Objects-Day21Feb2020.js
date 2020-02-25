// 4.6.  การสร้าง Object - แบบฝึกหัด
// ให้สร้าง Object แบบ Object Iteral โดยให้กำหนดตัวแปรชื่อ human โดยมี Properties ทั้ง 5 อย่าง
// ชื่อของผู้เรียน เป็น String
// อายุของผู้เรียนเป็น number
// บ้านของตัวเองเป็น String
// โสดหรือไม่โสดเป็น boolean
// คะแนนความฉลาดของตัวเองเป็น number (เต็ม 10)

let human = {
    name : " Tiffany ",
    age : 18,
    house : " Bangkok ",
    isSingle: false,
    intelligent : 10,
    
}
human["Computer Skill"] = 70;
delete human["name"]["age"]
console.log(human);
