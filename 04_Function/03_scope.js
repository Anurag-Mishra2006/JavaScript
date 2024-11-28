// let a = 10;
// const b = 20;
// var c = 241;
if(true ){
    let a = 10; // local scope or block scope
    const b = 20;// local scope or block scope
    //  in sabhi ka kaam yahi tak h {} iske bahar nhi ja sakte h 
    var c = 241; // scope ==.> global
 
}


//  JITNI BAAR FUCTION CALL HONGE UTNI BAAR CALL STACK ME SPACE ALLOTE HOGI

function one(){
    const username= "Anurag"
    function two(){
        const website   = "youtube"
        console.log(username)
    }
    
    two();//line by line interpreat
    // console.log(website);

    // two();
}
one()


if(true){
    const username = "Anurag" 
    if(username === "Anurag"){
        const website = "youtube"
        console.log(username + website)
        
    } 
}
 
// +++++++++++++ INTERESTING ++++++++++++96
function addone(nums){
    return nums +1;
}
console.log(addone(5))

const addtwo = function(num){
    return num+2;

}
addtwo(4)