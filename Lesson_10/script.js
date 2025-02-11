// сделать так чтобы при клике число внутри span увелечислся на 1 при клике на кнопку с текстом плюс и наоборот при клике на кнопку с текстом минус
// для счетчка использовать переменную в коде 

const btnPlus = document.querySelector("#plus")
const spanCount = document.querySelector("span")
const btnMinus = document.querySelector('#minus')
let plusCounter = 0

btnPlus.addEventListener('click', () => {
    plusCounter++
    spanCount.innerText = plusCounter;

})

btnMinus.addEventListener('click', () => {
    plusCounter--
    spanCount.innerText = plusCounter;

})