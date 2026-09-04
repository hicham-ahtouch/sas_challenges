//level 1- 1
function greet(name){
    console.log(`hello, ${name} !`);
}
greet("hicham");
//level 1 - 2
const sum = (s,d) => s + d;
console.log(sum (1,2));
//level 1 - 3
const square = (num) => num * num;
console.log(square(10));
//level 2 - 1
function celsiusToFahrenheit(c){
    return ((c * 9/5) + 32);
}
console.log(celsiusToFahrenheit(20));
//level 2 - 2
const isempty = (str) => {
    if(str.trim() === 0){
        return true;
    }else{
        return false;
    }
}
    console.log(isempty(" h "));
//level 2 - 3
function factorial(n){
    let i = 1;
    for(let i = 0; i < n ; i++){
        i *= n;
    }return i;
}console.log(facturial(60));