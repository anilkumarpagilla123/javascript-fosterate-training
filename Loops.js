//for loop
document.write("Even numbers upto 10:<br>")
for(let i=2;i<=10;i++){
    document.write(i+"<br>")
    i=i+1;
}
//for in
document.write("for in -loop<br>")
const num=[12,3,4,45,67]
for(x in num){
    document.write(num[x]+"<br>")
}
//while loop
document.write("While loop--->");
let i=0;
while(i<10){
    document.write(i+"<br>")
    i+=1
}

//do-while loop
document.write("Do-while loop--->")
i=1;
do{
document.write(i+"<br>")
i=i+1
}
while(i<20);