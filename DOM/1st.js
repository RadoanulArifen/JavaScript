let val;
val=this;
val=window;
val=window.document;
val=document;
val=document.all;
val=document.all.length;
val=document.domain;
val=document.head;
val=document.doctype;
val=document.body;
val=document.URL;
val=document.characterSet;
val=document.contentType;
val=document.fonts;
val=document.forms;
val=document.forms[0].method;
val=document.scripts;
val=document.scripts[0];
val=document.scripts[0].src;
val=document.scripts[0].getAttribute('src');

links=document.links;
let linkArr=Array.from(links);

linkArr.forEach(function(links){
    console.log(links)
})


console.log(links);





