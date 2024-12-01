// for of
const arr = [1,2,3,4,55,6,78,9]
for (const nums of arr) {
    console.log(nums)
    
}

let greeting = "Hello world"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`)
}

//  Maps --> is known for the unique value and order remain same 

const map = new Map();
map.set('IN',"India" )
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN',"India" )
console.log(map)

//  this will print all value of the map
for(const key of map){
    console.log(key);
}

for(const[ key, value] of map){
    console.log(key,":-", value)
}

const myobj = {
    'game1' : 'NFS',
    'game2' : "spiderman"
}
// for(const[key, value] of myobj){
//     console.log(key, ":-", value)
// } --> this throw error as object is not iterable
