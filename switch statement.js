var date=new Date()
var today=date.getDay()

switch(4){
    case 0:
        console.log('Today is SUN DAY')
        break
    case 1:
        console.log('Today is MON DAY')
        break
    case 2:
        console.log('Today is TUE DAY')
        break
     case 3:
        console.log('Today is WED DAY')
        break
    case 4:
        console.log('Today is THUS DAY')
         break
    case 5:
        console.log('Today is FRI DAY')
        break
    case 6:
        console.log('Today is SAT DAY')
        break
    default:
        console.log('Not a valid day')
}
