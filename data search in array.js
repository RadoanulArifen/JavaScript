
var arr=[1,2,55,44,74,65,74,24,15,45]

var find=55
var isfind=false

for(var i=0;i<=arr.length;i++){
    if(arr[i]==find){
        console.log('Data is find '+i)
        isfind=true
        break;
    }
}
if(!isfind){
    console.log('Data is not found')
}

