
// Array iteration using forEach

var food=["cake","tea","bread","chocklet"];
var number=[1,3,5,7,99];

// 1st parameter=iteam;
// 2nd parameter=index;
// 3rd parameter=whole Array;

// food.forEach(function(i,ind,wa){
//    console.log(`iteam:${i},index ${ind},whole array ${wa}`)
// })


var a=function(i,ind,wa){
    console.log(`iteam:${i},index ${ind},whole array ${wa}`)
 }

 food.forEach(a);

