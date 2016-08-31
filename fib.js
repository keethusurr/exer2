var number=process.argv[2];
var one=0;
var two=1;
var results;
for(var i=0;i<number;i++)
{
if(i==0)
{
console.log(one);
}else if(i==1)
{
console.log(two);
}
else
{
result=one+two;
console.log(result);
one=two;
two=result;
}
}
