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
