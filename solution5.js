var num = 45;
if(num % 3 === 0 && num % 5 === 0){
    console.log("FIZZBUZZ");
} 
else if(num % 5 === 0){
    console.log("BUZZ");
}
else if(num % 3 === 0){
    console.log("FIZZ");
}
else{
    console.log(num);
}