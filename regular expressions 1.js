

//regular Expression;
//Pattern Matching Technique;

let re;
let str;

re=/hello/;
re=/Hello/;
re=/hello/i; //i=case insensitive
console.log(re);
console.log(re.source); 

str="Hello World";
str="Again Hello World";
str="jaghk Hello World";
str="Again Hello World Hello";

//exec() = Returns result in an array or null;
let result =re.exec(str);

//test() = true/false;
result = re.test(str);

//match() = return array or null
str="Again Hello World Hello";
result=str.match(re);

// search() = Returns index of the first match or - 1;
result=str.search(re);

//replace()= return new string;
str="Again Hello World Hello";
let newstr=str.replace(re,"hi"); 


console.log(result);
console.log(newstr);
