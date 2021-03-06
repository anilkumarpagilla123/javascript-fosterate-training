//creating date objects
const d=new Date();
console.log(d);//returns Sat Mar 19 2022 19:21:42 GMT+0530 (India Standard Time)

const x = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(x); // returns Mon Dec 24 2018 10:33:30 GMT+0530 (India Standard Time)

const y = new Date(2018, 11, 24);
console.log(y);//returns Mon Dec 24 2018 00:00:00 GMT+0530 (India Standard Time)

//date string
const da = new Date("October 13, 2014 11:13:00");
console.log(da);

//date methods
const k=new Date();
console.log(k.toString()); //returns Sat Mar 19 2022 19:31:06 GMT+0530 (India Standard Time)
console.log(k.toUTCString());//returns Sat, 19 Mar 2022 14:00:27 GMT
console.log(k.toDateString()); //returns Sat Mar 19 2022
console.log(k.toISOString());//returns 2022-03-19T14:02:02.290Z

//adding and substracting the dates
var day1 = new Date("08/25/2020");
var day2 = new Date("12/25/2021");

var difference = day2.getTime()-day1.getTime();

document.write("Days:"+difference+"<br>");//returns numbers of days

var dt = new Date("December 30, 2017 11:20:25");
dt.setDate( dt.getDate() - 10 );
document.write(dt+"<br>")//substract 10 days from above date

var dt = new Date("December 30, 2017 11:20:25");
dt.setDate( dt.getDate() + 10 );
document.write(dt+"<br>")//adding 10 to above date
