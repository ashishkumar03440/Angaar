// insted of promise we will use async 
// in this we can call an api 
// async function doSomething(){
//     console.log("something")
// }



// console.log(doSomething());

// fetch // AWAIT 

const api = "https://dog.ceo/api/breeds/image/random";

let ans = fetch(api);

// console.log(ans);

// ans.then((data)=>{
//     console.log(data);
//     // console.log("got the ans")
//     return data.json();
// })
// .then(function(data2){
//     console.log(data2);
//     console.log(data2.message);
// })

async function getData(params) {
    let a = await fetch(api);
    console.log(a);
    let b = a.json();
    console.log(b);
}

getData();
