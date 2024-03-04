function addAll(){
    var sum=0
    for(var i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    console.log(sum)
}

addAll(1,2,3)