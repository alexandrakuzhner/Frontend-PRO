

const saveButton = document.querySelector("#save_data")
saveButton.addEventListener("click", function () {
localStorage.setItem("theme", "light")
localStorage.setItem("location", "Amsterdam")
localStorage.setItem("currency", "Euro")
})

const deleteButton = document.querySelector("#delete_data")
deleteButton.addEventListener("click", function () {
localStorage.removeItem("theme")
localStorage.removeItem("location")
localStorage.removeItem("currency")
})

const getButton = document.querySelector("#get_data")
getButton.addEventListener("click", function () {
console.log(localStorage.getItem("username")) // null
console.log(localStorage.getItem("theme")) // light
})


// сделать так чтобы при клике число внутри span увеличился на 1 при клике на кнопку с текстом плюс и наоборот при клике на кнопку с текстом минус
// для счетчика использовать переменную в коде 

const btnPlus = document.querySelector(".plus")
const btnMinus = document.querySelector(".minus")
const counterElem = document.querySelector("span")
let counterValue = 0

if(localStorage.getItem("counter") !== null) {
    counterValue = +localStorage.getItem("counter")
}
counterElem.innerText = counterValue

btnPlus.addEventListener("click", function () {
counterValue++
counterElem.innerText = counterValue
localStorage.setItem("counter", counterValue);

})

btnMinus.addEventListener("click", function () {
counterValue--
counterElem.innerText = counterValue
localStorage.setItem("counter", counterValue);

})

// сделать так чтобы результат переменной counterElem сохранился в localStorage ("counter") и после перезагрузки продолжалость с этого же результата

// сделать так чтобы результат переменной counterElem сохранился в localStorage ("counter") и после перезагрузки продолжалость с этого же результата
// 1. сохранить результат переменной counterValue в localStorage после того как увеличили значение на 1
// 2. сохранить результат переменной counterValue в localStorage после того как уменьшили значение на 1
// 3. после создания переменной counterValue проверить есть ли в localStorage уже сохраненное значение("counter"), если есть то к переменной counterValue присвоить это значение в числовом типе данных а если нет то ничего не делать

// Преобразование в булевое значение
// !!null = false
// !!0 = false
// !!"" = false
// !!undefined = false
// !!NaN = false
// !!false = false

let settings = {
    website: {
    theme: "dark",
    currency: "eur"
    },
    profile: {
    rememberMe: true,
    location: {
    country: "Germany",
    city: "Berlin"
    },
    favoriteTags: ["Laptops", "Kitchen", "RCToys"],
    age: 45,
    }
    }

// structuredClone

// number, string, boolean, undefined, null, object, array
// String(settings) // [object Object]
// JSON
// JavaScript Object Notation
// undefined => теряется при stringify и parse

// let jsonSettings = JSON.stringify(settings)
// console.log(jsonSettings)
// localStorage.setItem("settings", jsonSettings)
// let parsedSettings = JSON.parse(localStorage.getItem("settings"))
// console.log(parsedSettings)

// '"website": {...}, "profile": {"rememberMe": true}'
// создать кнопку remeberMe и при клике поменять значение свойтсва rememberMe внутри объекта settings и обратно сохранить в localStorage
// чтобы при каждом клике значение реверснулся

// rememberMe: true
// click
// rememberMe: false
// click
// rememberMe: true


localStorage.setItem("settings", JSON.stringify(settings))
const btnRemember = document.querySelector(".remember")
btnRemember.addEventListener('click', () => {

    let jsonSett = JSON.parse(localStorage.getItem("settings"))
    jsonSett.profile.rememberMe = !jsonSett.profile.rememberMe
    localStorage.setItem("settings", JSON.stringify(jsonSett))

})