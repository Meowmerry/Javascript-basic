let user = {
  name: "John",
  age: 30,
  "computer skill": null
};

user.height = 176;
user.isSingle = true;
user["sofe skill"] = "reading"



delete user["computer skill"]
console.log(user);
/*{
    name: 'John',
    age: 30,
    'computer skill': null,
    height: 176,
    isSingle: true,
    'sofe skill': 'reading'
  } */

//================================================
//4.7.  Computed Properties
let propertiesName = "age";

let obj = {
  propertiesName: 20, // จะได้ key เป็น { propertiesName: 20 }
}

console.log(obj);

let propertiesName = "age";

let obj = {
  [propertiesName]: 20, // จะได้ key เป็น { age: 20 }
}

console.log(obj);

