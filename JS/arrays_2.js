// let a = [1,2,3,4,[50,[20,34],70],8,9];// nested array 
// let ab = a[4];
// console.log(a);

// let abc = ab[1];
// console.log(abc);

// let arr = ["ashish","akrari",["ansh","priyanshu"],"atharva","disha"];
// console.log(arr[2][1]);

// object (dictinory of pyton in js )
// {key : value }

// let obj = {
//     name :"ashish",
//     age:23,
//     adress:{
//         state:"delhi",
//         city:"west delhi"
//     },
//     say:function(){
//         console.log("hii")
//     },
//     marks:[30,29]
// }

// ways to acesses object 
// dot notation 

// console.log(obj.adress);
// console.log(obj.name);
// console.log(obj.say());
// console.log(obj.adress.state);// nested output 
// console.log(obj.marks[1])
 
// var abc = 5;
// console.log(window.abc)// window obj is father of all objects 

// push 

let arr =  [1,2,3,4,5];

// arr.push(6); ############or we can use unshift 
// arr.push(7,8,9); 

// console.log(arr);
// arr.pop(4);// it will just delete the last element whetre you pass an argument or not 
// console.log(arr);

// shift - 5  work as pop front se remove karta hai 
// unshift - 7 work as push bas frot se push karta hai 

console.log(arr.shift());
arr.unshift(9)
console.log(arr.unshift(9))
console.log(arr)