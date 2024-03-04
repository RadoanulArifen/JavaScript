function greet(msg){
    function greetings(name){
        return msg+','+name+'!'
    }
    return greetings
}

var gm=greet('good morning')
var gn=greet('good night')
console.log(gn('Arifen'))


function base(b){
    return function(n){
        var result=1
        for(i=1;i<b;i++){
            result*=n
        }
        return result
    }
}

var base10=base(10)
console.log(base10(2))