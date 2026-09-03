//level 1 - 1
let i = 1;
while(i <= 20 ){
    console.log(i);
    i++;
}
//level 1 - 2
let total = 0 ;
for ( let i = 1  ; i <= 100; i++ ) {
    total += i  ;
    console.log(total);
}
//level 1 - 3
const number = 5;
for (let i = 1 , n = 0 ; i <= 10; i++){
    n = i * number
    console.log(n);
}
//level 2 - 1 
for (let i = 1; i <= 50 ; i++ ){
    if( i%3 === 0 && i%5 === 0){
        console.log("fizzbuzz");
    }
    else if ( i%3 === 0){
        console.log("fizz");
    }
    else if (i%5 === 0){
        console.log("buzz");
    }
    else {
        console.log(i);
    }

}
//level 2 - 2
let ch = "hicham";
let count = 0;
for (let i = 0;  i < ch.length; i++){
    if(ch[i] === "a" || ch[i] === "e" || ch[i] === "i" || ch[i] === "o" || ch[i] === "u"){
        count++;
    }
}
console.log(count);
//level 2 - 3
for ( let i = 0 ; i < 5 ; i++){
    let star = "";
    for(let j = 0 ; j < 5; j++){
       star += "*";
    }
    console.log(star);
}