var myObj =
[{name:'Saurabh', age: 30, occupation:"Team Leader"},
{name:'Anupriya', age: 32, occupation:"Team Leader"},
{name:'Kalyani', age: 25, occupation:"Programmer"},
{name:'Damodaran', age: 27, occupation:"Programmer"},
{name:'Krishnakath', age: 22, occupation:"Programmer"},
{name:'Venketraman', age: 28, occupation:"Programmer"}];
var a="Programmer";

console.log(".........Programmer........")
person("Programmer");

console.log(".........Age-group........")
second();

console.log(".........Separation........")
third();





function person(s){
var n=myObj.length;
for(var i=0;i<n;i++)
{
if(myObj[i].occupation==s)
{
console.log(myObj[i]);
}
}
}




function second(){
  for(var i=0;i<myObj.length-1;i++)
  {
    for(var j=i+1;j<myObj.length;j++)
    {
    if(myObj[j].age > myObj[i].age)
    {
        var temp=myObj[i];
        myObj[i]=myObj[j];
        myObj[j]=temp;

    }
    }
  }

for(var i=0;i<myObj.length;i++){
  console.log(myObj[i]);

}
}






function third(){
  var array1=[];
  var array2=[];
  for(var i=0;i<myObj.length;i++)
    {
      if(myObj[i].occupation=="Team Leader")
      {
    array1.push({name:myObj[i].name , age:myObj[i].age});

      }
      if(myObj[i].occupation=="Programmer")
      {
    array2.push({name:myObj[i].name , age:myObj[i].age});

      }
  }
  var obj={"Team Leader":array1,"Programmer":array2}
  console.log(obj);

}
