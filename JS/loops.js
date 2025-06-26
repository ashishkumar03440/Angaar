// two for loops 
// for in 
// for of

let obj = {
    name :"ashish",
    age:23,
    adress:{
        state:"delhi",
        city:"west delhi"
    },
    say:function(){
        console.log("hii")
    },
    marks:[30,29]
}
// for in 


// for(let val in obj){
//     // console.log(val);
//     console.log(obj[val]);
// }

// #########################################for of
// let arr =[1,2,3,"ashish",4,5];
// for(let val of arr){
//     console.log(val);
// }

//
//  map , filgter , reduce 




// ############################## map #########################
// let arr =[1,2,3,"ashsih",4,5];
 
// arr.map(function work(val,idx){// first ke ander humaesha valuses hi aayengi 
//     console.log(val,idx);// values are getting itrated and idx is indexing in this  

// })
//################### using map function ##################
// let newarr = arr.map(function work(val,idx){
//     let n = (val*2)+1;
//     return n;
// })
// console.log(arr);
// console.log(newarr);


// ####################### passing function insode map function ####################
// let fun = function work(val,idx){
//     let n = (val*2)+1;
//     return n;
// }

// let newarr =  arr.map(fun);

// console.log(arr);
// console.log(newarr);
// ############################################ filter function ##########################
// let arr = [1,2,4,5,6];

// let newarr = arr.filter(function(val,idx){
//     return val%2==0;
// })
// console.log(newarr);


// ######################################### reduce function ###################################
// reduce hum use karte hai taki humko operations perform karne hai between last ans currtent itrations 
arr = [1,2,3,4,5];

let ans = arr.reduce(function(prev,curr){
    console.log(prev,curr);
    return prev+curr;
});

console.log(ans)