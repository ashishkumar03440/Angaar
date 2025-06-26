// hi order fun , call back func
// we dont need to have a functon name 

// in js we can say that we can pass a function in a function and return in a function 
let greetings = function (say){
    console.log(say);
}


function sayHi(say=20,num){
    console.log(say);
console.log(say+num);
}
// sayHi("hello");
greetings("goodMorning",sayHi());

