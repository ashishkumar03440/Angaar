//closure 

// we use it to make variables which we want our user to do (for ex stack we can only pop and push ) we use to make functions like stack 

function giveAscess(){
    let a = 10;
    function plus(){
        console.log(a);
        a++;     

    }
    return plus;
}

// console.log(a);// it will return a is not defined becouse a is an lexical env which can be excessed within the function 

let get = giveAscess();// in this when we are executing the function it is getting executed with its lexicalenv(a); 
get();
get();