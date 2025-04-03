function lengths(arr:string[]):Number[]{
    let res:Number[] = []
    for(let c of arr){
        res.push(c.length)
    }
    return res
}

//console.log(lengths(["dgdfg", "fdv", "eee"]))

function introduce(name:string, age?:Number):string{
    if(age != null)
        return "your name is " + name  + "and your age is " + age
    return "your name is " + name
}

function createUser(name:string, age:Number, isAdmin:boolean):{}{
    return {"name":name, "age":age, "isAdmin":isAdmin}
}


interface User{
    name:string
    age:Number
    email:string
}

function printUser(user:User):void{
    console.log(`name: ${user.name} age: ${user.age} email: ${user.email}`)
}

const user: User = { name: "Haim", age: 30, email:"mendy@gmail.com" }
printUser(user)
