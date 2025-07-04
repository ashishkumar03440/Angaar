// console.log(document);
// console.dir(document);


// let h = document.getElementById// yai apne aap padhna hai

// let i = document.querySelector('h1');// we use this to select by tag
// let j = document.querySelector('#pankaj');// we use this to select by id
// let k = document.querySelector('.inner');
// console.log(i);
// console.dir(i);// . dir humko object banakar dedeta hai  

// console.log(j);
// console.dir(j);

// console.log(k);
// console.dir(k);

// let allh1 = document.querySelectorAll('h1');// we use this to select all the elemnts jo h1 main likhe hue hai 
// console.log(allh1);
// console.dir(allh1);


// let h1 = document.querySelector('div');
// // we use this to select text(content) inside the tag
// console.log(h1.textContent);
// //  we use this to select text inside the tag
// console.log(h1.innerText);
// // this will return the html code 
// console.log(h1.innerHTML);


// now we will make changes  in our html file by js 


// // changing text contyent 
// let h1 = document.querySelector('h1');
// h1.textContent = 'hi akku';

// // changing html 

// let div = document.querySelector("div");
// let htm = div.innerHTML;
// div.innerHTML = '<h1> hii akku sir </h1>'


// doing it with timeout 


// setTimeout(()=>{

// let div = document.querySelector("div");
// let htm = div.innerHTML;
// div.innerHTML = '<h1> hii akku sir </h1>'
// },5000)



// how to access attributes of dic , class , etc
let div = document.querySelector("div");
console.log(div.getAttribute('class'));
div.setAttribute('class','dark')