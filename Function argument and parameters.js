
function sum(a,b){
    var result=a+b
    console.log(result)
}
sum(10,20)

//sum of array with fumction//

var arr1=[2,5,3]
var arr2=[10,5,5]
var arr3=[20,5,4,1]

function sumOfArray(arr){
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)
