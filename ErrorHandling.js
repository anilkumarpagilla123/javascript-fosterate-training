//without any errors
try 
{
    alert('Start of try runs');
    alert('End of try runs');   
} 
catch (err) {
    alert('Catch is ignored, because there are no errors'); 
}
//error object
try 
{
    alert('Start of try runs');
    x;//error,variable is not defined
    alert('End of try runs');   
} 
catch (err) {
    alert('Error has occured '+err); 
}
//throwing an error
let details={'age':17};
try{
    if(details.name){
    alert(details.name)
    }
    else{
        throw new Error("Insufficient data")
    }
}
catch(err){
    alert("Details not found!"+err)
}
//rethrowing an error
let detail={'age':17};
try{
    if(detail.name){
    alert(detail.name)
    }
    else{
        throw new Error("No data")
    }
    hai;
}
catch(err){
    if(err instanceof Error){
    alert("Details not found!"+err)
    }
    else{
        throw err; //rethrow
    }
}
//finally
try {
    console.log('try');
    const a = prompt("Make an error (y/n) :");
    if (a == 'y') CODE();
} catch (err) {
    console.log('catch');
} finally {
    console.log('finally');
}
