function lengths(arr) {
    var res = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var c = arr_1[_i];
        res.push(c.length);
    }
    return res;
}
//console.log(lengths(["dgdfg", "fdv", "eee"]))
function introduce(name, age) {
    if (age != null)
        return "your name is " + name + "and your age is " + age;
    return "your name is " + name;
}
function createUser(name, age, isAdmin) {
    return { "name": name, "age": age, "isAdmin": isAdmin };
}
function printUser(user) {
    console.log("name: ".concat(user.name, " age: ").concat(user.age, " email: ").concat(user.email));
}
var user = { name: "Haim", age: 30, email: "mendy@gmail.com" };
printUser(user);
