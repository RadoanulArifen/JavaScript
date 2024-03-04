
// var arr=[1,2,3,4]

// arr.forEach(function(value,index,arr){
//     console.log(value,index,arr)
// })

// output===
// 1 0 [ 1, 2, 3, 4 ]
// 2 1 [ 1, 2, 3, 4 ]
// 3 2 [ 1, 2, 3, 4 ]
// 4 3 [ 1, 2, 3, 4 ]


var arr=[1,2,3,4]

function forEach(arr,cb){
    for(var i=0;i<arr.length;i++){
        cb(arr[i])
    }
}
forEach(arr,function(value){
    console.log(value)
})

// output==
// 1
// 2
// 3
// 4
var sum=0
forEach(arr,function(value){
    sum+=value
})
console.log(sum)

// output=10

// if i wanna increase array value 5
forEach(arr,function(value,index,arr){
    arr[index]=value+5
})
console.log(arr)
