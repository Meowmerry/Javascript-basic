// 4.15.  Cloning and merging, Object.assign

const obj = {
    name : "Tiffany",
    age : 25,
    height: 170,
    weight: 70,
    skill : 'smart!!'
}
let newObj = {};
for ( let key in obj) {
    newObj[key] = obj[key]
}


newObj.name = "Janny"
newObj.age = 18,
newObj.skill = 'beautiful'
console.log(obj,newObj);

//=============================================================
let obj = {
    name: 'Meow',
    age: 18,
    height: 180,
    weight: 70
}
let obj2 = {
    name: 'Meowmeowmwoow',
    weight: 50
}

let obj3 = {
    name: 'MeowHellwowowooww',
    skill: "nodeJs",
}
Object.assign(obj3, obj, obj2)
console.log(obj);
console.log(obj2);
console.log(obj3);

//=========================================================






