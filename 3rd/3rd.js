var a=parseInt(prompt("inter the number: "));
var sum=0;
var series="";

for(var i=1;i<=a;i++){
    sum+=i**2;
    series+=(i**2).toString();
    if(i==a){continue;}
   series+="+"
}
console.log(`${series}=${sum}`);

