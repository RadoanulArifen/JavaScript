

//Palindrome Number

let result = 0;
let number = 1111;

result = Number(String(number).split('').reverse().join(''));

console.log("Reversed number is : "+result);

if(result==number){
    console.log('Palindrome')
}else{
    console.log('not palindrome')
}


/*let result=0
let num=12345

result=Number(String(num).split('').reverse('').join(''));
console.log(result)*/
