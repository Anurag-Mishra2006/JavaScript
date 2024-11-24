console.log("Hey this is tutorial 1 of Js")
var a =5;
var b = 6;
var c = "Anurag";
// to make local variable we use let 
let x1 = 66;
{
    var a = 54;//var is working at global level 
    // console.log(x)
}
console.log(a)
console.log(x1)

console.log(a+b+8)
console.log(typeof a , typeof b , typeof c)
// const a1 = 9;
// a1 = a1 +1; //not allowed because a1 is constant 

let x = "Anurag bhai";
let y = 22;
let z = 3.56;
const p = true;
let q = undefined;
let  r = null;

console.log(x, y,z , p, q, r)
console.log(typeof x, typeof y,typeof z , typeof p, typeof q, typeof r)

let o = {
    "name": "Anurag Mishra",
    "Job Code": 5600
}
console.log(o)

o.salary = "7 crores"  //adding another info in the o
console.log(o)