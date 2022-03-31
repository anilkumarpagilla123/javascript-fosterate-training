//searching a word 
let text = "Anil kumar Pagilla!";
let n = text.search("kumar");
console.log(n)

//replacing Hyd to bengalore
let a = "city : HYD";
let result = a.replace("HYD", "Bangalore");
console.log(result)

//return list of matched words
let str = "Is this all is there is?";
let result_exp2 = str.match(/is/g);
console.log(result_exp2)

//return list of digits if matched with digits
let d = "Give 100%!"; 
let res = d.match(/\d/g);
console.log(res)

// returns true or false
const pattern = /e/;
let x=pattern.test("The best things in life are free!");
console.log(x)

//exec : this function will return an array for match or null for no match
const p = /e/;
let y=p.exec("The best things in life are free!");
console.log(y)

let s="Hai this is javascript!"
let reg=/is/;
let out=reg.exec(s)
if(out){
    console.log(out)
    console.log(out.index)
    console.log(out.input)

}