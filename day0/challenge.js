//level 1-1
let age = 24;
console.log("You are" ,age, "years old");
//level 1-2
let temperature = 30;
if (temperature > 30) {
    console.log("it's hot outside");
}
else {
    console.log("the weather is nice");
}
//level 1-3
let number = 1541;
if ( number % 2 === 0){
    console.log("even");
}
else {
    console.log("odd");
}
//level 2-1
let score = 89;
if ( score >= 90 && score <=100){
    console.log("A");
}
else if ( score >= 80 && score <= 89){
    console.log("B");
}
else if (score >= 70 && score <= 79){
    console.log("C");
}
else if (score < 70 && score === 0) {
    console.log("F");
}
//level 2 - 2
let a = 50;
let b = 70;
let c = 50;
if (a>b){
    console.log(a);
}
else if (b>c){
    console.log(b);
}
else {
    console.log(c);
}
//level 2 - 3
function isleap(year) {
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0);
console.log("input year" ,year, "is a leap year"); }
else
    console.log("input year " ,year, + "is not a leap year");
let inputyear = 2026;
isleapyear(inputyear);