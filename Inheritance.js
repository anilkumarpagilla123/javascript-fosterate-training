//base class
class student{
    constructor(){
        this.age=17;
        this.name="kuldeep"
    }
    show(){
        alert("Age: "+this.age)
        alert("Name: "+this.name)
    }
}
//derived class
class marks extends student{
    get(){
        alert("Hello "+this.name)
    }
    stop(){
        super.show();
        this.get()
    }
}

//object creation for dervied class
let obj=new marks();
obj.stop();
