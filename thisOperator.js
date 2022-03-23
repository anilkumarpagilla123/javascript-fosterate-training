
//this operator

const person = {
    firstName: "Anil",
    lastName : "kumar",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }// this is the person object
  };
  alert(person.fullName())

//return object 
  function C() {
    this.a = 37;
  }
  
  var obj = new C();
  alert(obj.a); // 37

//person1 is the newly created object and People is the constructor function
// used to create this object.
let people = function(name, age) {
    this.name = name;
    this.age = age;
    this.displayInfo = function() {
  document.write(this.name + " is " + this.age + " years old");
 }
}

let person1= new people('sravan', 21);

// logs sravan is 21 years old
person1.displayInfo();