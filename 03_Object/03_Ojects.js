const course ={
    coursename : "JS in hindi", 
    price : "999",
    courseInstructor : "Hitesh"

}
// console.log(course.courseInstructor)

// Destructuring
const {courseInstructor : instructor}= course;  // courseInstructor is given the name instructor i.e renaming  'courseInstructor' to 'instructor'


console.log(instructor) 


// /////////////      API

// {
//     //  JSON format(often used in APIs) , but its not actual js code
//     "name ": "hitesh",
//     "coursename": "JS in hindi" ,
//     "price": "free"
// }

//when the data comes from the database its an array like below:
// [
//     {},
//     {},
//     {}
// ]