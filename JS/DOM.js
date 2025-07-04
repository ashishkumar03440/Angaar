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
// let div = document.querySelector("div");
// console.log(div.getAttribute('class'));
// div.setAttribute('class','dark')

// making changes in our page directily by js 
// let div = document.querySelector("div");
// div.style.backgroundColor = "red";
// div.style.border = "4px solid green"
// div.style.borderRadius = "25px"
// div.style.boxShadow = "5px 5px"
// div.style.textShadow = "2px 2px "


// class list 

// let div = document.querySelector("div");
// console.log(div.classList)

// div.classList.add('dark')
// console.log(div.classList.contains('dark'));

// div.classList.remove('dark')
// div.classList.toggle('dark');// by this line we are adding the dark class 
// div.classList.toggle('dark'); // in this line we are removing the dark class 



// // selectio
// let div = document.querySelector("div");
// let h = document.querySelector("h1")
// console.log(div.parentElement)// to see the parint class 
// console.log(div.children)// it will return an html collenction which is like array  
// console.log(div.children[1])//to assess 1st element we will do
// console.log(h.nextElementSibling)



// cerating new components by using js 

// let div = document.querySelector("div");
// let newh1 = document.createElement('h1');
// console.log(newh1); 
// newh1.textContent = "naya maal";
// newh1.setAttribute('class' , 'inner')
// console.log(newh1);

// div.appendChild(newh1); // yai humare div ke andar new element add karinge by an attribute 
// yai bas attrivbutes accept kakrega 

// console.log(div);

// div.append("we can add new ")// by this we can pass attriburs as well as text


// now we will delete the element 
let h = document.querySelector("h1")
h.remove();