
var isrunning=true
while(isrunning){
    var randt=Math.floor(Math.random()*10+1)
    if(randt==5){
        console.log('VICTORY')
        isrunning=false
    }
    else{
        console.log("YOU HAVE GOT "+randt)
    }
}