function something(great,name){
    function sayhi(){
        console.log(great,name)
    }
    sayhi()
}
something('good Night','Radoanul Arifen')



function something(great,name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }else{
            return ' '
        }
    }

    var message=great +' '+getFirstName()
    console.log(message)
}
something('good night','Radoanul Arifen')