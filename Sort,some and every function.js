var person=[
{
    name:'a',
    age:20
},
{

    name:'b',
    age:24
},
{

    name:'c',
    age:28

},
{
    name:'d',
    age:26
}

]

var arr=[4,8,1,6,7,9,4,3,5,6,8,2,1,7]
arr.sort()
console.log(arr)


var arr1=[4,8,1,6,7,9,-8,0,-2,4,3,5,6,8,2,1,7,-1,-4]
arr1.sort(function(a,b){
    if(a>b){
        return -1
    }else if(a<b){
        return 1
    }else{
        return 0
    }
})
console.log(arr1)

arr1.sort(function(a,b){
    if(a>b){
        return 1
    }else if(a<b){
        return -1
    }else{
        return 0
    }
})
console.log(arr1)


person.sort(function(a,b){
    if(a.age>b.age){
        return 1
    }else if(a.age<b.age){
        return -1
    }else{
        return 0
    }
})
console.log(person)

var arr2=[1,2,3,4,5,6,7,8,-1,-7,5,4,48,-5]

var result=arr.every(function(value){
    return value%2==0
})
console.log(result)

var result2=arr.every(function(value){
    return value>=0
})
console.log(result2)

var result3=arr.some(function(value){
    return value%2==1
})
console.log(result3)

var result4=arr.some(function(value){
    return value<0
})
console.log(result4)