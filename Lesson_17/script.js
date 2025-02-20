// function Person(name, age) {
// // let this = {}
// this.name = name
// this.age = age

// // return 5 // не влияет на результат
// // return {
// // test: "test object"
// // }
// // return this
// }
// const user1 = new Person("John", 25)
// console.log(user1)

// class Person {
// 
// }
// let user1 = new Person()
// user1.name = "John"
// user1.age = 25
// console.log(user1);
// 
//классы называем с большой буквы
// 
// class Person {
    // constructor(username, age = 18) {
        // this.name = username
        // this.age = age
    // }
// 
    // setName(username) {
        // this.name = username
    // }
// 
    // incrementAge() {
        // this.age++
    // }
// }
// 
// let user1 = new Person("John", 25)
// user1.setName("Jack")
// user1.incrementAge()
// console.log(user1);
// 
// let user2 = new Person("Ann", 18)
// user2.incrementAge()
// console.log(user2);
// 
// 
// Создать класс для создания продукта, у которого есть имя, описание, цена, количество. Создать методы для изменения цены и метод sale() который уменьшает на 1 колисечство продукта 

class Product {
    constructor(title, discription, price, amount) {
        this.title = title
        this.discription = discription
        this.price = price
        this.amount = amount
    }
    changePrice(price) {
        if(price >= 0) {
            this.price = price
        }
        throw new Error("Отрицательная цена не принимается")
    }
    sale() {
        if(this.count !== 0) {
            this.count--
            return
        }
        throw new Error("Продукта больше нет")
    }
}
let coffee1 = new Product("Tschibo", "dnkvjnk kjvnkjfvk kdjvkjsvk", 8, 50)
coffee1.changePrice(10)
coffee1.sale()
console.log(coffee1);


class Person {
    static roles = ["student", "lecturer", "employer"]

    constructor(firstname, lastname, age = 18) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }

    setRole(role) {
        if(Person.roles.includes(role)) {
            this.role = role
            return
        }
        throw new Error("Недопустимая роль")
    }

    incrementAge() {
        this.age++
    }
}

let person1 = new Person("John", "Doe", 25)
// person1.setRole("student")
console.log(Person.roles);
console.log(person1);



class Person1 {
    static roles = ["student", "lecturer", "employer"]
    static createdPerson = []

    #card = "0000000 465"

    constructor(firstname, lastname, age = 18, balance) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.balance = balance

        Person.createdPerson.push(this)
    }

    get card() {
        return this.#card
    } //read

    set card(value) {
        this.#card = value
    } //to make changes

    static getTotalBalance() {
        return Person.createdPerson.reduce((acc, user) => acc + user.balance, 0)
        
    }

    setRole(role) {
        if(Person.roles.includes(role)) {
            this.role = role
            return
        }
        throw new Error("Недопустимая роль")
    }

    incrementAge() {
        this.age++
    }

}

let person1 = new Person("John", "Doe", 25, 100)
person1.setRole("student")
console.log(Person.roles);
console.log(person1);

let person2 = new Person("Jane", "Doe", 25, 123)
let person3 = new Person("Jane", "Doe", 25, 124)
let person4 = new Person("Jane", "Doe", 25, 50)

let totalBalance = Person.getTotalBalance()
console.log(totalBalance);
