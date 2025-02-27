// 1.
let person = {
    name: "Сергей",
    getNormFunc: function () {
    // this = person
    return function () {
    // this = Window
    console.log(this.name)
    }
    },
    getArrowFunc: function () {
    // this = person
    return () => {
    // this = person
    console.log(this.name)
    }
    }
    }
    
    let normFunc = person.getNormFunc()
    let arrowFunc = person.getArrowFunc()
    normFunc() // "" <=> undefined
    arrowFunc() // Сергей


    // 2.
    const obj = {
    value: "outer",
    createInnerObject: function () {
    // this = obj
    return {
    value: "inner",
    getArrowValue: () => {
    console.log(this.value)
    },
    getNormValue: function () {
    // this = внутренный объект
    console.log(this.value)
    }
    }
    }
    }
    
    let innerObj = obj.createInnerObject()
    innerObj.getArrowValue() // outer
    innerObj.getNormValue() // inner


// Создайте объект calcualtor, который содержит свойство value (начальное значение = 0) и реализует методы для выполнения базовых математических операций: сложение, вычитание, умноженте, деление. Кадлый метод должен получить параметр num, изменять значение value согласно своей операции и возвращает this.
// add(num)
// sub(num)
// mul(num)
// div(num)

// let result = calcualtor.add(10).sub(5).mul(6).div(2)

const calculator = {

    value: 0,

    add: function(num) {
        this.value += num
        return this
    },

    sub: function(num) {
        this.value -= num
        return this
    },

    mul: function(num) {
        this.value *= num
        return this
    },

    div: function(num) {
        this.value /= num
        return this
    },

    print: function() {
        console.log(this.value);
    }
}

let result = calculator.add(10).sub(5).mul(6).div(2).print()


function sum(username) {
    console.log(this.a + this.b)
    console.log(`Hello ${username}`)
    }
    
let obj1 = {
    a: 5,
    b: 6,
    }
    
let obj2 = {
    a: 1,
    b: 7
    }
    
sum.call(obj1, "John")
sum.call(obj2, "Jane")


function greet() {
    console.log(`Hello from ${this.fullname()}`);  
}

let john = {
        firstname: "John",
        lastname: "Doe",
        fullname: function () {
            return `${this.firstname} ${this.lastname}`
    }
}

let jane = {
        firstname: "Jane",
        lastname: "Doe",
        fullname: function () {
           return `${this.firstname} ${this.lastname}`
    }
}

let johnGreet = greet.bind(john)
johnGreet()

let janeGreet = greet.bind(jane)
janeGreet()

function userGetToDo(job, job2) {
    console.log(arguments);
    console.log(`${this.fullname()} собирается ${job}, а потом ${job2}`);
}

const johnJob = userGetToDo.bind(john)
//johnJob("Бегать")
//johnJob("Учиться")

const janeJob = userGetToDo.bind(jane, "Учиться")

//janeJob()
//janeJob()
janeJob("Бегать")
janeJob("Кататься")

// arguments содержит в себе все значения которые были переданы в функиию при вызове