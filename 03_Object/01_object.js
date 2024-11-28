//  literal constructor

//  Object Literals

const mySym = Symbol("key1")
const JsUser = {
    name : "Anurag",
    [mySym]:"My key1",
    age: 18 ,
    "full_name" : "Anurag Mishra", 
    location : "Jaipur",
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

JsUser.greeting = function(){
    console.log("Hello  JS user");
}
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`)
}

console.log(JsUser.greeting2());