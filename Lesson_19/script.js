// создать класс Expense который наследуется от Transaction, получает сумму расхода(положительное число при получении) и описание. А потом при вызове super передает в constructor Transaction отрицательное число. У класса есть свое приватное поле #amount (где хранится сумма расхода) и геттер для получения.
class Transaction {
    #amount
    test = "Тестовое поле"
    constructor(description, category, amount) {
      if (typeof amount !== "number") {
        throw new Error("Сумма должна быть числом")
      }
      this.description = description
      this.category = category
      this.#amount = amount
    }
  
    get amount() {
      return this.#amount
    }
  
    getAmount() {
      return this.#amount
    }
  }

class Expense extends Transaction {
    #amount
    static type = "Расход";
    constructor(amount, description) {
        super(amount, Expense.type, description)
        this.#amount = -amount
    }

    get amount() {
        return this.#amount
    }
}

// контекст состоит из области видимости переменных и ключевого слова this

// this опредлеяется не во время написания функции, а во время выполнения этой функции

let person = {
    firstname: "John",
    greet: function() {
        console.log(`this`, this);
        
    }
}
person.greet()

let greetFunc = person.greet
greetFunc()