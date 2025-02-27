//1
class Car {
    constructor(mark, model, year) {
        this.mark = mark;
        this.model = model;
        this.year = year;
    }

    age() {
       return new Date().getFullYear() - this.year;
    }
}

//2

class Person {
    static roles = ["student", "lecturer", "employer"]
    static createdPersons = [] 
    #card = ""
  
    constructor(firstname, lastname, age = 18, balance, cardData, email) {
      this.firstname = firstname
      this.lastname = lastname
      this.age = age
      this.balance = balance
      this.#card = cardData
      this.email = email
  
      Person.createdPersons.push(this) 
    }
  
    get card() {
      
      return this.#card.split(" ")[0]
    }
  
    set card(value) {
      this.#card = value
    }
  
    static getTotalBalance() { 
      return Person.createdPersons.reduce((acc, user) => acc + user.balance, 0)
    }
  
    setRole(role) {
      if (Person.roles.includes(role)) {
        this.role = role
        return
      }
      throw new Error("Недопустимая роль")
    }
  
    incrementAge() {
      this.age++
    }

    change_email(newEmail) {
      if(Person.createdPersons.find(el => el.email === "@", ".")) {
        Person.createdPersons.push(newEmail)
      }
      throw new Error(`Задан неверный формат email. Попробуйте еще раз`)
    }
  }




//3
class Library {

    static books = [];


    static addBook(book) {
        Library.books.push(book)
    }

    static listBooks() {
        Library.books.forEach(book => console.log(`Название: ${book.title}, Автор: ${book.author}`));
        
    }
}

const book1 = { title: "451 градус по Фаренгейту", author: "Рей Брэдбери" };
const book2 = { title: "1984", author: "Джордж Оруэлл" };

Library.addBook(book1);
Library.addBook(book2);

Library.listBooks()


//4

class Rectangle {
    #width
    #height

    get width() {
        return this.#width;
    }

    set width(value) {
        if (value > 0) {
            this.#width = value;
        }
        throw new Error("Цифра должна быть положительной");
    }

    get height() {
        return this.#height;
    }

    set height(value) {
        if (value > 0) {
            this.#height = value;
        }
        throw new Error("Цифра должна быть положительной");
    }

    area() {
        return this.#width * this.#height;
    }
}

// 5

class BankAccount {
  static accounts = [];
  #balance = 0

  deposit(sum){
    return this.#balance += sum

  }
  
  withdrawal(sum){
    if(sum > this.#balance){
      return this.#balance -=sum
    }
    throw new Error("На Вашем счету недостаточно средств")

  }

  get currentBalance() {
    return this.#balance
  }

  totalBalance(){
    return BankAccount.accounts.reduce((acc, curr) => acc + curr, 0)
    
  }


}