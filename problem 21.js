

//prime number

var x=7
count=0
for(var i=2;i<x;i++){
    if(x%i==0){
        count++
        break
    }

}
if(count==0){
    console.log('prime number')
}else{
    console.log('Not prime number')
}