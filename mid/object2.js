 //const tinderUser = new Object()

 const tinderUser={}

 tinderUser.id = "123abc"
 tinderUser.name= "Ajeet"
 tinderUser.isLoggedIn = false

 //console.log(tinderUser)

 const regularUser={
    email:"a@gmail.com",
    fullname:{
        username:{
            userFullName:{
                firstName: "Ajeet",
                secondName: "Jaiswal"
            }
        }

    }
 }

 //console.log(regularUser.fullname.username.userFullName)

 const obj1= {1:"A", 2:"B"}
 const obj2= {3:"A", 4:"B"}
 const obj3= {5:"A", 6:"B"}



 //const obj3= {obj1, obj2} //merge objects in a single object
 //const obj4= Object.assign({}, obj1, obj2, obj3) ////merge objects in a single object

 //console.log(obj4)

 const obj4= {...obj1,...obj2,...obj3}  //merge objects in a single object
 //console.log(obj4)

 const users = [
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"a@gmail.com"
    }
 ]

 users[1].email

 //console.log(users)


//  console.log(tinderUser)
//  console.log(Object.values(tinderUser))
//  console.log(Object.keys(tinderUser))
//  console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('isLoggedIn')) // this method is usesd to chech whether the value is presen or not.

//console.log(tinderUser.hasOwnProperty('isLogged'))

const course={
    courseName: "Js ",
    price: 999,
    courseInstructor:"Hitesh"
}

const {courseInstructor} = course // this is an another way to access values

const {courseInstructor: instructor} = course // this is the way to change key name and can be access through this new key name


//console.log(courseInstructor)
//console.log(instructor);


/////////////////////////////////////////////////////////////

//json :-


// {
//     "name": "hitesh",
//     "id": 123,
//     "price": "free"


// }

// [
//     {},
//     {},
//     {}
// ]


