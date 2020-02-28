// การสร้าง method forEach in Javascript

Array.prototype.meowForEach = function(callback) {
    for(let i = 0; i < this.length ; i++){
        callback(this[i], i, this, 'meowNaka');
    }
}

// 
// ƒ (callback) {
//     for(let i = 0; i < this.length ; i++){
//         callback(this[i], i, this, 'meowNaka');
//     }
// }  

let array = ['I ', 'Love', 'To', 'Study', 'Coding','And', 'More'];
array.meowForEach(function(item, index,arr, name){
    console.log(`item => ${item}`);
    console.log(`index => ${index}`);
    console.log(`arr => ${arr}`);
    console.log(`name => ${name}`);
    console.log(`-----------------------------------`);
});