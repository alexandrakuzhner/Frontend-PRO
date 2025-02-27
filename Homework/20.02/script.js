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
    static createdPersons = [] //
    // let this = {
    //   card: "0000000 465"
    // }
    #card = ""
  
    constructor(firstname, lastname, age = 18, balance, cardData) {
      this.firstname = firstname
      this.lastname = lastname
      this.age = age
      this.balance = balance
      this.#card = cardData
  
      Person.createdPersons.push(this) //
    }
  
    get card() {
      // "08080808 464 1234" = ["08080808", "464", "1234"]
      return this.#card.split(" ")[0]
    }
  
    set card(value) {
      this.#card = value
    }
  
    static getTotalBalance() { //
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
  }

  class Person1 extends Person {
    constructor(firstname, lastname, age = 18, balance, cardData) {
        super(firstname, lastname, age = 18, balance, cardData)
    }
  }

//3
class Library {
    static books = [];


    static addBook(book) {
        const book = {title, author}
        Library.books.push(book)
    }

    static listBooks() {
        Library.books.forEach(book => console.log(`${book.title}, ${book.author}`));
        )
        
    }
}

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