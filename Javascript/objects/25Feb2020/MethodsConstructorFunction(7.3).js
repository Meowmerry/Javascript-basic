//7.3.  Methods ใน Constructor function

function User(name) {
    this.name = name;

    this.sayHi = function () {
        console.log("My name is: " + this.name);
    };
}

let name = new User("Tiffany");

name.sayHi(); // My name is: Tiffany

/*
name = {
   name: "Tiffany",
   sayHi: function() {console.log( "My name is: " + this.name );
};
}
*/
