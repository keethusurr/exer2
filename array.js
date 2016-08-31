var myObj = [5, [22], [(14)], [(4)],[5,6]]

var myObj1 = [].concat.apply([],myObj);
var myObj2 = [].concat.apply([],myObj1);
console.log(myObj2);
