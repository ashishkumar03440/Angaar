// arrays
// continious 
// hetrogenious 
let greetings = function (say){
    console.log(say);
}


let a = [1,2,3,true,"ashish"];
// we can also pass functionn in array in js 
let b = new Array(1,2,3,true,greetings)
console.log(a);
console.log(b);

// add , pop , shift , unshift

a.push(6);
console.log(a);

