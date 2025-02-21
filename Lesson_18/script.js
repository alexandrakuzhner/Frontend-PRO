// Создать класс с именем Transaction,который в конструкторе получает сумму транзакции(amount), описание транзакции(description), категорию(cactegory), где поле amount является приватным. И создать геттер для получения amount

class Transaction {
    #amount = 0

    constructor(amount, description, category) {
        if(typeof amount !== "number") {
            throw new Error("Сумма должна быть числом")
        }
        this.#amount = amount
        this.description = description
        this.category = category
    }
    
    get amount() {
        return this.#amount
    }
}

// super ссылается на constructor класса справа от extends
class Income extends Transaction {
    static type = "Доход"
    constructor(amount, description) {
    super(description, Income.type, amount)
    console.log(this.getAmount())
    }
    }
    //let incomeInstance = new Income(100, "Зарплата")
    // console.log(i.test);

// __proto__ это ссылка на prototype объекта от которого создан этот элемент
// prototype это свойство которое есть у функции(кроме стрелочных) и у классов.

// Создать класс Account который при создании получает имя пользователья. Внутри класса Account есть статические свойсто accounts который является массивом, есть обычное свойство transactions который тоже является массивом и приватное свойство balance со значением по умолчанию 0. Каждый раз при создании экземпляра Account добавить нового пользователья в static массив accounts, выводить в консоли "Аккаунт создан для ${имя}"

class Account {
    static accounts = []
    transactions = []
    #balance = 0

    constructor(username) {
        
        if(Account.accounts.find(el => el.username === username)) {
            throw new Error(`Аккаунт ${username} уже существует`);
        }
       
        console.log(`Аккаунт создан для ${username}`);

        this.username = username

        Account.accounts.push(this)
    }

    get balance() {
        return this.#balance
    }

    addTransaction(trx) {
        this.#balance += trx.amount
        this.transactions.push(trx)
    }

    get transactions() {
        return this.transactions
    }

}

// let Account1 = new Account("kuzhnersasha");
// let Account2 = new Account("kuzhnersasha");

const john = new Account("John")
john.addTransaction(new Income(1000, "Зарплата"))
john.addTransaction(new Income(350, "Премия"))
console.log(john.balance);
console.log(john.transactions);

