function unique(arr) {
	return Array.from(new Set(arr));
}

//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];

console.log(unique(values)); // [ 'Hare', 'Krishna', ':-O' ]

// Set 

let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add({ name: "hello" });
console.log(set)