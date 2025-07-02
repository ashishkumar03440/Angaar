// document.writeln("ashish");

// let a = setTimeout(function() {
//     alert("i am inside the timr intervel ")
//     document.writeln("ashish");

// }, 5000);
// let b = prompt("do you want timeout?");
// if(b=="n"){
// clearTimeout(a);
// }
// console.log(a)

// console.log("bhai college aaja ");

// console.log("bhai class lele ");
// console.log("bahi assignment  karle ");

// setTimeout(function assignment(){
//     console.log("theek hai bhai kar leta hu ");
//     console.log("2 ghante baad ")
// },5000);


// console.log("Bhai ab mera ho gya main jaa rha date par ")

// let i = 1 ;

let k = setInterval(function () {
    console.log("ashish Kumar");

}, 1000);
setTimeout(function () {
    clearInterval(k);
}, 5000);

console.log(k);