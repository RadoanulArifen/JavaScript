//Traversing the DOM

let val;
let list=document.querySelector('ul');
let listItem=document.querySelector('ul li:last-child');



val=list;
val=listItem;

//get the child nodes
val=list;
val=list.childNodes;
val=list.childNodes[1];
list.children[0].textContent="Hello World";
val=list.children[1].children[0];

val=list.firstChild;
val=list.firstElementChild;

val=listItem;
val=listItem.parentElement;
val=listItem.parentElement.parentElement;
val=listItem.nextSibling;
val=listItem.nextSibling.nextSibling;
console.log(val);