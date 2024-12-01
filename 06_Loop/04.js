const myobj={
    js : "javascript",
    cpp : "c++", 
    rb : "ruby",
    swift : "swift by apple"
}

// accessing keys 
for (const key in myobj) {
    console.log( key  )
}

// accessing values
for (const key in myobj) {
    console.log(myobj[key])
}

//  accessing both 
for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`)
}



const programming = [ "js", "rb","py", "java", "cpp"]

for(const key in programming){
    console.log(key);
}
for(const key in programming){
    console.log(programming[key]);
}

