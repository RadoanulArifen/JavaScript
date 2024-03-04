//document.getElementById()

//gatting an element
let val;
val=document.getElementById('document-title');
val=document.getElementById('document-title').id;
val=document.getElementById('document-title').className;

//changing style
document.getElementById('document-title').style.background='#233';
document.getElementById('document-title').style.color='#fff';
document.getElementById('document-title').style.display='block'


//changing content
document.getElementById('document-title').textContent='new'



//document.querySelector()
val=document.querySelector('#document-title');//id=#
val=document.querySelector('.sample-class');
val=document.querySelector('h3');
val=document.querySelector('ul');
val=document.querySelector('ol');
val=document.querySelector('li');
val=document.querySelector('ul li');
val.style.background='white';
val.style.color='white'
val=document.querySelector('li:last-child');

console.log(val);

//multiselector
//document.getElementsByClassName()

let list=document.getElementsByClassName('sample-class');

list[0].style.background='red'
list[0].style.colour='white'
list[0].style.padding='10px'
list[0].textContent='hello world';

// console.log(list[0]);

//document.getElementByTagName()


list=document.getElementsByTagName('li');
list=document.querySelector('ol').getElementsByTagName('li');

let lis=Array.from(list);
lis.forEach(function(item){
    console.log(item);
});


// document.querySelectorAll()
// id->#
// className -> .
// tagname -> nothing

list=document.querySelectorAll('ul li');


let liOdd=document.querySelectorAll('li:nth-child(odd)');
let liEve=document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item){

    item.style.background='gray';
    item.style.color='white';
})

liEve.forEach(function(item){
    item.style.backgroundColor='red';
    item.style.color='black';
})






console.log(list);