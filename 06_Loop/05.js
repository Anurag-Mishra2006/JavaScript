//  for each 
const coding =[ " js","cpp","java","Python", "ruby"]
coding.forEach( function (item){
    console.log(item)
}) // A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

console.log("")
coding.forEach((item) => {
    console.log(item)
})

const mycoding=[
    {
        languagename:"java",
        languagefilename : "java"
    },
    {
        languagename:"python",
        languagefilename : "py"
    },
    {
        languagename:"c++",
        languagefilename : "cpp"
    }
   
]
console.log("------------")
mycoding.forEach((item)=>{
    console.log(item.languagename)
})