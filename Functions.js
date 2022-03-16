//normal function in javascript
function add(){
    let x=23
    let y=87
    alert(x+y)
};
add()

function hello(a,b){
    alert(a+" "+b)
}
hello('anil','kumar')
let age = prompt('How old are you?', 18);

if ( age<18 ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}

//function expressions in javascript
let hi=function(){
    alert("hello!!!")
}
hi();//calling functuon

//arrow functions in javascript
let sum = (a, b) =>{
    return a+b
}

alert( sum(1, 2) ); // return 3