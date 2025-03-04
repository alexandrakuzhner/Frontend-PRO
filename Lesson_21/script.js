const btn1 = document.querySelector(".btn_1")
const btn2 = document.querySelector(".btn_2")
let counter = 0
function incrementCounter() {
this.innerText = counter
counter++
}
const bindWithBtn2 = incrementCounter.bind(btn2)
btn1.addEventListener("click", bindWithBtn2)
// btn1.addEventListener("click", () => {
// console.log(this) // Window
// })



// При клике на btn2 показать счетчик внутри p с классом counter используя call либо apply в связке с функцией incrementCounter
const count = document.querySelector(".counter")

btn2.addEventListener("click", function(){incrementCounter.call(count)})


// ========================================================

const canvasElem = document.querySelector("canvas")
const ctx = canvasElem.getContext("2d")

// цвет заливки
ctx.fillStyle = "green"
// ctx.fillRect(x, y, ширина, высота)
ctx.fillRect(100, 200, 300, 200)