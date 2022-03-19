
//if statement
let x=10;
if(x%2==0){
alert("Entered number is even!");
}

//if-else statement
let age=prompt('Enter your age:');
if(age<18){
    alert("Minor");
}
else{
    alert("Major");
}

//else-if
let num1=parseInt(prompt("Enter first numbers:"));
let num2=parseInt(prompt("Enter second numbers:"));
if(num1<num2){
    alert(num2+'is big!')
}
else if(num1==num2){
alert("Both are equal!")
}
else{
    alert(num1+"is big!")
}
