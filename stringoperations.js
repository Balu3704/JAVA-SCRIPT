var city = "London"


var city = "lonDOn"
city.toUpperCase()
"LONDON"

city.toLowerCase()
"london"

city[0]
"l"
city[1]
"o"

city.length
6
city[city.length-1]
"n"

city.trim()
"lonDOn"
city.trim().length
6



var name = " nikitha. "
name.trim()
"nikitha."
name.trim().length
8


var a = "john"
var b = "bala"
a == b
false (because js is case sensitive)


var a = "john"
var b = "bala"

a == b
false
b == a
false
a.toUpperCase() == b.toUpperCase()
false
a.toUpperCase()
"JOHN"
a.charAt(0).toUpperCase()
"J"

var city = "AmsTerDAm"
var city = "aMsTerDAm"
var name = "Bhumika"

name.slice(1)
"humika"
name.slice(2)
"umika"
name.slice(2,5)
"umi"
name.slice(-1)
"a"
name.slice(0,-1)
"Bhumik"
name.charAt(1)
"h"




var city = "aMsTerDAm"

city.charAt(0).toUpperCase()
"A"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"




var a = "i am doing js"
a.replace('js','JsvsScript')
"i am doing JsvsScript"
var a = 'JavaScript'

a.replace('a','A')
"JAvaScript"
a.replace(/a/g,'A')
"JAvAScript"
var name = " Nikita "

name.replace(/ /g,'')
"Nikita"
var name = " Nikita "

name.replace(/ /g,'-')
"-Nikita-"

var url = "https://github.com/Balu3704/PRACTICALS"
undefined
url.split('/')
(5) ["https:", "", "github.com", "Balu3704", "PRACTICALS"]0: "https:"1: ""2: "github.com"3: "Balu3704"4: "PRACTICALS"length: 5[[Prototype]]: Array(0)
var a = url.split('/')
undefined
a[0]
"https:"
a[1]
""
a[4]
"PRACTICALS"
a[a.length-1]
"PRACTICALS"



var a = "JavaScript i am learning JavaScript"

var a = "JavaScript i am learning JavaScript"
undefined
a.split(' ')
(5) ["JavaScript", "i", "am", "learning", "JavaScript"]


var a = "JavaScript"

a.split('')
(10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]0: "J"1: "a"2: "v"3: "a"4: "S"5: "c"6: "r"7: "i"8: "p"9: "t"length: 10[[Prototype]]: Array(0)
var b = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

b.toString()
"J,a,v,a,S,c,r,i,p,t"
b.toString().replace(/,/g,'')
"JavaScript"






























