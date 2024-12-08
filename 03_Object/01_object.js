/**     OVERVIEW
 *      -->declaration and updation
 */


//  literal constructor
// object are mutable and manipulated by the reference rather than by values


/**
 * Object is an unordered collection of properties, each of which has a name and a value .
 * --> properties names are string so we can say that object maps string to values
 */

// javascript objects are dynamic 


//  Object Literals --> is a comma-seperated list of colon -separed name : value pairs , enclosed within curly braces

const mySym = Symbol("key1") // symbol is used to give a uniquness

const JsUser = { // here creating the object
    name : "Anurag",
    [mySym]:"My key1",
    age: 18 ,
    "full_name" : "Anurag Mishra", 
    location : "Varanasi",
    email : "anurag@google.com",
    isLoggedin : true,
    lastLogginDays : ["Monday","Saturday"]

}

//  full name ko dot operator se access nhi kar payege
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full_name"])
console.log( JsUser [mySym])

JsUser.email = "Anurag@chagpt.com"
// Object.freeze(JsUser)

JsUser.email = "anurag@microsoft.com"

console.log(JsUser )

console.log("-----Method----")
// Method is a function thet is attached to an object 
// An object can have properties (values) and method(function)
JsUser.greeting = function(){ // here you are defining a method greeting for an object JsUser
     
    console.log("Hello  JS user");
}
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`) // this is here for the recent object 
    
}

console.log(JsUser.greeting2());