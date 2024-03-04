let re;
let str;

//literal character;

re=/hello/;
re=/hello/i;
re=/hell/i; 

//Meta characters
// re=/^/; //must start with;
// re=/$/; //must end with;
re=/^hello/i;
re=/hello$/i;
re=/^hello$/; //must start and end;
re=/^h.llo$/; // matches any one character;
re=/h*llo/; //0 or more times;
re=/he?a?llo/; //optional
re=/hello\?/; //escaping


str="Hello World!";
str="hello hello"
str="hello";
str="hillo";
str="hllo";
str="hello worlde";
str="hillo worlde";
str="hllo";
str="hallo";
str="hillo";
str="hello";
str="hello?";

console.log(re.exec(str));

reTest(re,str);
function reTest(re,str){
    if(re.test(str)){
        console.log(`'${str}' matches '${re.source}'`);

    }
    else{
        console.log(`'${str}' doesnot match '${re.source}'`);
    }
}
