/**     OVERVIEW 
 *      --> while
 *      --> do while
*/
let index= 0;
while(index <=10){ // as soon the condition true it run else it terminate
    console.log(`Value of index is ${index}`);
    index +=2;
}
let myArray = [ " flash","batman","superman"]
let arr=0;
while(arr<myArray.length){
    console.log(`Value is ${myArray[arr]}`)
    arr++; // this means : arr = arr + 1;
}

let score =11; //do while run atleast once even after terminating condition
do{
    console.log(`score is ${score}`);
    score++;
}while(score<=10)