
function swap<T>(val1:T, val2:T):[T, T]{
    return [val2, val1]
}
//console.log(swap<Number>(1,2))

function lastElement<T>(arr:T[]):T|undefined{
    if (!arr)
        return undefined
    return arr[arr.length - 1]
}

class Stack<T>{
    st:T
    constructor(){
        this.st = []
    }
}









