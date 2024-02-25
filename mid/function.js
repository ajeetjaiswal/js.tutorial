function sayMyName(){
    console.log("A")
    console.log("J")
    console.log("e")
    console.log("e")
    console.log("t")
}

//sayMyName();

//function addTwoNumbers(number1, number2){

 //   console.log(number1+number2)

//}

//addTwoNumbers(2,5);

function addTwoNumbers(num1, num2){
    let result = num1+num2;
    return result
}

const result= addTwoNumbers(3,5);
//console.log("result: ", result)


// function loginUserMessage(username){
//   return `${username} just logged in`


// }

// console.log(loginUserMessage("ajeet"))

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter you name");
//         return
//     }
//     return `${username} just logged in`
  
  
//   }
  
//   console.log(loginUserMessage())

// function loginUserMessage(username ="user"){
    
//     return `${username} just logged in`
  
  
//   }
  
//   console.log(loginUserMessage())
  

function calculateCartPrice(num1){

    return num1
}

//console.log(calculateCartPrice(200))

const user ={
    username: "ajeet",
    price:99
}

const user2 ={
    username: "Kunal",
    price: 9000
}

function handleObject(anyobject){ // function for printing object values

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user2)  // passing object name 


// handleObject({
//     username: "someone",
//     price: 1000
// })  // this is another way to pass object to function


const newArray =[200, 400, 600, 800]

function returnSecondValue(getArray){
  
    return getArray[1]
    //return`${getArray[1]} and ${getArray[2]}`


}

//console.log(returnSecondValue(newArray))

console.log(returnSecondValue( [200,400,600,800]))

