

//Menu Based Temperature conversion
var temp=35.58
switch (1) {
    case 1:
        convertTemp=(temp-32)/1.8
        console.log('Temp in C '+convertTemp)
        
        break;
     case 2:
         convertTemp=(1.8*temp)+32
         console.log('Temp in F '+convertTemp)
            
         break;

    default:
        console.log('Data not found')
        break;
}
