// // this is a constructor function and (highorder function )
// // we will never use this this will be done by the API 
// let kaam = new Promise(function(resove , reject ){
//         // kaaam (gettig data from DB)
//             resove({name : "ashsih"});// resolve stste

// });

// console.log(kaam);

// let kaam1 = new Promise(function(resove , reject ){
//             reject({error:"error 404"});// reject state 
// });

// let kaam2 = new Promise(function(resove , reject ){
//             // if we pass nothing it will be pending state 
// });

// // main logic ::

// // api states 
// // pending // Resolve // reject

// // state // data 

// Promise - objects
// asyncronus task perform -- resolving - rejecting

// asyncronus task --> calling api / third paries


let prom = new Promise(function (resolve, reject) {
    // Task

    setTimeout(function () {

        resolve("hi sharad resolved");

    }, 0);

});

// State pending , fullfilled, rejected

// // Data

// console.log(prom);



function myPromise(paise) {
    // Bhai promise kar

    return new Promise(function (resolve, reject) {
        // my primse task
        setTimeout(function () {
            if (paise > 100) {
                resolve({ num: paise, msg: "Bhai yee lee tere paise" });
            }
            else {
                reject({ error: "F your money" });
            }
        },3000);
    });
};


let ans = myPromise(90);
console.log(ans);

// then fuction 

ans.then(function () {// then tab kaam karega jab prmise resolve hoga 
    console.log("thanks bhai ");
})
    .catch(function () {
        console.log("bhai paise wapas kar de ");
    })
