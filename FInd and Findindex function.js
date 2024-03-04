

// find value

var arr=[1,2,3,4,5,6,7,7,8]

var result=arr.find(function(value){
    return value==8
})
console.log(result)


// find index number


var result2=arr.findIndex(function(value){
    return value==5
})
console.log(result2)



// ...........................


function myFind(arr,cb){
    for(var i=0;i<arr.length;i++){
        if(cb(arr[i])){
            return arr[i]
        }
    }
}

var result3=myFind(arr,function(value){
    return value==8
})
console.log(result3)