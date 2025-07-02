// this is a constructor function and (highorder function )
// we will never use this this will be done by the API 
let kaam = new Promise(function(resove , reject ){
        // kaaam (gettig data from DB)
            resove({name : "ashsih"});// resolve stste
            
});

console.log(kaam);

let kaam1 = new Promise(function(resove , reject ){
            reject({error:"error 404"});// reject state 
});

let kaam2 = new Promise(function(resove , reject ){
            // if we pass nothing it will be pending state 
});

// main logic ::

// api states 
// pending // Resolve // reject

// state // data 