// При клике на кнопку switch-theme если data-theme у body равно light то сделать dark и наоборот
// Сохранить тему в localStoarge и при открытии страницы првоерить если в localstorage есть уже выбранная тема то поменять switch-theme на это значение
// При клике на кнопку switch-theme если data-theme у body равно light то сделать dark и наоборот
// Сохранить тему в localStoarge и при открытии страницы првоерить если в localstorage есть уже выбранная тема то поменять switch-theme на это значение а если нет то по умолчаню сделать data-theme со значением light

// 1 Получить элемент body в переменной bodyEleme
// 2 Проверить есть ли значение по ключу "theme" в localStorage
// 3 Если есть значение то установить значение аттрибута data-theme = (значение из localStorage), а если нет то установить значение аттрибута data-theme = "light"
// 4 Получить элемент кнопки
// 5 Перехватить событие клика по кнокпе
// 6 Поменять при клике значение аттрибута data-theme у body на противополжное значение 
// 7 Сохранить новое значение в localStorage

const bodyEleme = document.querySelector("body");

if(localStorage.getItem("theme") !== null) {
    bodyEleme.setAttribute("data-theme", localStorage.getItem("theme"))
} else {
    bodyEleme.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light")
}
const button = document.querySelector(".switch-theme");
button.addEventListener("click", () => {
    const themeAttr = bodyEleme.getAttribute("data-theme")
    if(themeAttr === "light") {
        bodyEleme.setAttribute("data-theme", "dark")
        localStorage.setItem("theme", "dark")
    } else {
        bodyEleme.setAttribute("data-theme", "light")
        localStoragecalStorage.setItem("theme", "light")
    }
})