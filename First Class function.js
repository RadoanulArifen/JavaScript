// First Class Function

function add(a,b){
    return a+b
}

// 1.A function can be stroed in a variable
   var sum=add
   console.log(sum(4,5))
   console.log(typeof sum)
   // 2.A function can be stroed in a Array
    var arr=[]
    arr.push(add)
    console.log(arr)
    console.log(arr[0](5,5))
 // 3.A function can be stroed in a Object
      var obj={
        sum:add
      }
      console.log(obj)
      console.log(obj.sum(5,6))
 // 4.We can creat function as need
    setTimeout(function(){
        console.log('I have created...')
    },100)

 // 5.We can pass function as a argument
// 6. we can return function from another function

