//let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleString())
//console.log(typeof myDate) // object



//let myCreateDate = new Date(2024, 1, 24)
//let myCreateDate = new Date(2024, 1, 24, 5, 3)
//let myCreateDate = new Date("2024-02-24")
//let myCreateDate = new Date("02-24-2024")



// console.log(myCreateDate)
// console.log(myCreateDate.toLocaleString())


// let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate.weekday)
