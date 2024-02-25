// object

//singleton
//ex:- 
 //const tinderUser= new Object()

//object.create // method used to create object

//==========================================================//

//object literals:----

const mySym = "myKey1"; // to use symbol first we have to define the symbol than it can be use in object and access by [ bracket]

const JsUser= {
    name: "Ajeet",
    "full name": "Ajeet Jaiswal",
    roll: 220216014007,
    age: 22,
    email: "ajeetjaiswal724@gmail.com",
    isLoggedIn: false,
    lastLoggedIn:["Mon", "Tue", "sat"],
    [mySym]:"mykey1"//symbol
}

//console.log(JsUser.name)// print a value from object

//console.log(JsUser["name"]) // 2nd method to print a value    from object
//console.log(JsUser)// print all the values from object

//console.log(JsUser[mySym]) // symbol always access by [] bracket

//console.log(JsUser["full name"])// this type of object can only access by ["object name"] method

//JsUser.email="ajeetjaiswal500@gmail.com" // the value of object can be changed from outside the object

//Object.freeze(JsUser);// freeze() method is use to lock the object thus anyone cannot change the values of object

//JsUser.name="Kunal" // the name is not changed bcz the object is locked 

//console.log(JsUser["email"])
//console.log(JsUser["name"])

// function in object 

// function can be used as a object 

JsUser.greeting = function(){

    console.log("Hello JS User");
}

JsUser.greetingWithName = function(){

    console.log(`Hello JS User ,${this.name}`) // this keyword is used to access a object  
}


console.log(JsUser.greeting());
console.log(JsUser.greetingWithName());


