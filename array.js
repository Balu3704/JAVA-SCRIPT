//array is collection of homogenious data type

var a =  ['a'.'b','wde','ef'] array of strings
var b = [222, 343, 343, 3434,] array of numbers
var c = [true, true, false, true, false ] array of boolean values


//array is the collection of hetrogenious data type

var d = ['dd',12,'ff','df34kff',233,true,'fef']

//array is collection of hetrogenious as well as homogenious array 


var city = ["Delhi", "Mumbai","Amsterdam","London"];
city.length
4
city[0]
"Delhi"
city[1]
"Mumbai"
city[city.length-1]
"London"
city.push('Dubai')
5
city
(5) ["Delhi", "Mumbai", "Amsterdam", "London", "Dubai"]
city.pop()
"Dubai"
city
(4) ["Delhi", "Mumbai", "Amsterdam", "London"]
city.pop(2)
"London"

var city = ["Delhi", "Mumbai","Amsterdam","London"];
city.length
4
city.shift()
"Delhi"
city.unshift("Nice")
4
city
(4) ["Nice", "Mumbai", "Amsterdam", "London"]


push> add the value in the end of array 
unshift > add the value in the beginning of the array 
pop> always remove the last value of array 
shift > always remove the first value of array 
unshift> always add the first value of array 



var city = ["Delhi", "Mumbai","Pune","Amsterdam","London"];
city.slice(1)
(4) ["Mumbai", "Pune", "Amsterdam", "London"]
city
(5) ["Delhi", "Mumbai", "Pune", "Amsterdam", "London"]0: "Delhi"1: "Mumbai"2: "Pune"3: "Amsterdam"4: "London"length: 5[[Prototype]]: Array(0)
city.slice(2,5)
(3) ["Pune", "Amsterdam", "London"]
city.slice(2,4)
(2) ["Pune", "Amsterdam"]
city
(5) ["Delhi", "Mumbai", "Pune", "Amsterdam", "London"]


var city = ["Delhi", "Mumbai","Pune","Amsterdam","London"];
city.slice(1)

city.splice(start,deletecount,array)


var city = ["Delhi", "Mumbai","Pune","Amsterdam","London"];
city.splice(2,0,'Nice','Helsinki')
[]
city
(7) ["Delhi", "Mumbai", "Nice", "Helsinki", "Pune", "Amsterdam", "London"]
city.splice(3,1)
["Helsinki"]
city
(6) ["Delhi", "Mumbai", "Nice", "Pune", "Amsterdam", "London"]


city
(6) ["Delhi", "Mumbai", "Nice", "Pune", "Amsterdam", "London"]
city.splice(3,1)
["Pune"]
city
(5) ["Delhi", "Mumbai", "Nice", "Amsterdam", "London"]
city.splice(2,1,'Hongkong','Boston')
["Nice"]
city
(6) ["Delhi", "Mumbai", "Hongkong", "Boston", "Amsterdam", "London"]


var a = ['a','b','c',1]
var b = [2,3,4]
a+b
"a,b,c,12,3,4"
a.concat(b)
(7) ["a", "b", "c", 1, 2, 3, 4]
b.concat(a)
(7) [2, 3, 4, "a", "b", "c", 1]

finding the index postion of array
var city = ["Delhi", "Mumbai","Pune","Amsterdam","London"]
undefined
city.indexOf('Pune')
2
city.indexOf('Dubai')
-1 > when comes to -1 it is not a part of array
city.indexOf('Amsterdam')
3
city.indexOf('Delhi')
0




var city = ["Delhi", "Mumbai","Pune","Amsterdam","London"]
undefined
city.sort()
(5) ["Amsterdam", "Delhi", "London", "Mumbai", "Pune"]
city.reverse()
(5) ["Pune", "Mumbai", "London", "Delhi", "Amsterdam"]
var city = [1,5,"Delhi",4, "Mumbai",3,"amsterdam",true, "London",false,"Dubai"]
undefined
city.sort()
(11) [1, 3, 4, 5, "Delhi", "Dubai", "London", "Mumbai", "amsterdam", false, true]
var city = [1,5,"delhi",4, "Mumbai",3,"amsterdam",true, "London",false,"Dubai"]
undefined
city.sort()
(11) [1, 3, 4, 5, "Dubai", "London", "Mumbai", "amsterdam", "delhi", false, true]


var city = ["Delhi","Red",['pink',['Bmw','Audi','Merc'],'yllow','orange','skyblue'],"Mumbai","Pune","Amsterdam","London"]
undefined
city[2]
(5) ["pink", Array(3), "yllow", "orange", "skyblue"]
city[2][0]
"pink"
city[2][1]
(3) ["Bmw", "Audi", "Merc"]
city[2][2]
"yllow"
city[2][1][0]
"Bmw"




































































































