//creation of class
class person{
    //constructor block
    constructor(age,name){
        this.age=age;
        this.name=name;
    }
    //show method
    show(){
        alert("age:"+this.age);
        alert("Name:"+this.name);
    }
}

//object creation
let obj=new person(19,"anil");
//calling show method
obj.show();
//type of class
alert(typeof(person))//function
alert(person)//returns details of person class

//object literal
const hai = {
    firstName: "sravan",
    lastName: "kumar",
    age: 50,
    gender:"male"
  };
  //accessing object values
  
  alert(hai.firstName)//accessing firstName
  //accessing lastName
  alert(hai.lastName)
  //acessing age
  alert(hai.age)
  //accessing gender
  alert(hai.gender)