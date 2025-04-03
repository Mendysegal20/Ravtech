class BankAccount{
    public accountNumber: string
    private balance:Number
    constructor(accountNumber:string, balance:Number){
        this.accountNumber = accountNumber
        this.balance = balance
    }
    getBalance():Number{
        return this.balance
    }
}

const b = new BankAccount("123", 100)
//b.balance // Error!



