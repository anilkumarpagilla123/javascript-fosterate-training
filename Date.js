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
