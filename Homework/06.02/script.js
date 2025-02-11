let product = {
    title: "Велосипед",
    img: "https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_1000%2Cq_80%2Cw_1920/ga32vsmzqaedean1kpfy/Voya-E-1.jpg",
    count: 10,
    favorite: false
}

localStorage.setItem("product", JSON.stringify(product));

let container = document.querySelector(".container");
let imgElem = document.getElementById("product-img")
imgElem.src = product.img;
let titleElem = document.querySelector(".title")
titleElem.innerText = product.title;
let countElem = document.querySelector(".count")
countElem.innerText = product.count;
let favorElem = document.querySelector(".star")

//container.append(imgElem, titleElem, countElem, favorElem);

let btnMinus = document.querySelector(".minus")
let btnPlus = document.querySelector(".plus")
let countValue = 10;
countElem.innerText = countValue;

btnMinus.addEventListener("click", () => {
    countValue--
    countElem.innerText = countValue
    localStorage.setItem("count", countValue);
})

btnPlus.addEventListener("click", () => {
    countValue++
    countElem.innerText = countValue
    localStorage.setItem("count", countValue)
})

favorElem.addEventListener("click", () => {
    product.favorite = !product.favorite
    favorElem.innerHTML = product.favorite 
        ? '<i class="fa-solid fa-star"></i>' 
        : '<i class="fa-regular fa-star"></i>'; 
    localStorage.setItem("product", JSON.stringify(product))
})
