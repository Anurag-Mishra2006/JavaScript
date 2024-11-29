// Dates

let myDate = new Date()

console.log(myDate) // 2024-11-26T17:36:33.238Z
console.log("")

console.log(myDate.toString()) //Tue Nov 26 2024 23:06:33 GMT+0530 (India Standard Time)

console.log("")

console.log(myDate.toISOString()) // 2024-11-26T17:36:33.238Z


console.log("")
console.log(myDate.toJSON()) //2024-11-26T17:36:33.238Z

console.log("")

console.log(myDate.toLocaleDateString()) // 11/26/2024

console.log("")

console.log(myDate.toLocaleString()) // 11/26/2024, 11:06:33 PM

console.log(typeof myDate)

// let myCreatedDate = new Date(2024 ,0,1)
// console.log(myCreatedDate.toDateString()) // it also tell the day of that day
// let myCreatedDate = new Date(2024 ,0,1,5,3)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2024-01-14")
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate = new Date("10-01-2024")
console.log(myCreatedDate.toLocaleString())

console.log("")

let myTimestamp = Date.now();
console.log(myTimestamp)
console.log(myCreatedDate.getTime()) // give the second in millisecs 

console.log('')
console.log(Math.floor(Date.now()/1000))

let newDate  = new Date()
console.log(newDate);
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth() +1) // 0 ==> Jan and 11 ==> December  that we add +1 so that user would not confuse

console.log(newDate.getFullYear())

newDate.toLocaleString('default',{weekday : "long"})
