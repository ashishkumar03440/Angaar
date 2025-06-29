// ######################## highorder function ########################
// function that recives another function as an argument then it will be a highorder functon
// let greet = function(say){// greet will be a high order functon
// say(); // say wil vbe a call back function
// }

// function say(){
//     console.log("hii");
// }

// greet(say)


// ##################### callback function #################
function fun1() {
    function sayhi() {
        console.log("hii")
    }
    return sayhi;
}

let ans = fun1()

// console.log(ans)
ans()