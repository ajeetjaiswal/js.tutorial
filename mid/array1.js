// Array
 //Array declaration
 
const myArr = [0, 1, 2, 3, 4, 5] //method-1
const myHeros =["Iron Man", "Captain America"] //method-2

// console.log(myArr)
//console.log(myHeros)

const myArr2 = new Array(1,2,3,4)//method-3

//console.log(myArr2)

// Array methods

// myArr.push(6) ->// push 6 in array at last index
// myArr.push(7) 
//myArr.pop()// ->pop last index element of Array

//myArr.unshift(9) ->// push 9 in array at first index
//myArr.shift() // pop an element from first index of array


//console.log(myArr.includes(9)); // check if 9 is present in array or not
//console.log(myArr.indexOf(3));


// const newArr =myArr.join()
// console.log(myArr)
// console.log(newArr)// it will print arr in string format 
// console.log(typeof newArr) // newArr is string typed

//slice , splice

console.log("A ",myArr)
const myn1 = myArr.slice(1,3); // [ 1, 2 ]  // it will print value of index 1 
                                                            //to 2 

console.log(myn1)

console.log("B ",myArr);

const myn2 = myArr.splice(1,3)//[ 1, 2, 3 ] // it will remove value of index 1 
                                                      //to 3 from array
console.log(myn2)
console.log("c ", myArr)




