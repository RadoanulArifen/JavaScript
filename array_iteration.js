

// Array iteration using mapping

var food=["cake","tea","bread","chocklet"];
var number=[1,3,5,7,99];

function addSomething(item){
    return `${item} is a Food`
}

let arr_list=food.map(addSomething);
console.log(arr_list);


function sq(item){
    return item*item;
}
let arr_sq=number.map(sq);
console.log(arr_sq)