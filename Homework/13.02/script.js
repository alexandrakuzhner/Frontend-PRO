const getProductByID = (id, callback) => {
    fetch(`https://dummyjson.com/products/${id}`)
     .then((res) => res.json())
     .then((data) => callback(data))
     .catch((error) => console.log(error));
}

const inputID = document.querySelector("#inputID");
const showBtn = document.querySelector("#showBtn");
showBtn.addEventListener('click', () => {
    let idValue = inputID.value
    
    getProductByID(idValue , (product) => {

        const mainBlock = document.querySelector("main");
    
        const cardContainer = document.createElement("div");
        mainBlock.append(cardContainer)
        cardContainer.classList.add("product-card");
    
        const imgBlock = document.createElement("div");
        imgBlock.classList.add("img-block")
    
        const imageElem = document.createElement("img")
        imageElem.setAttribute("alt", "product-image")
        imageElem.setAttribute("src", product.images)
        imgBlock.append(imageElem)
    
        const detailBlock = document.createElement("div")
        detailBlock.classList.add("product-details")
    
        const titleElem = document.querySelector("h2")
        titleElem.innerText = product.title
        const stockElem = document.querySelector("p")
        stockElem.innerText = product.stock
        const priceElem = document.querySelector("p")
        priceElem.innerText = product.price
    
        const ratingElem = document.querySelector("p")

        let avg = product.reviews.reduce((acc, review) => {
            return acc + review.rating
        }, 0) / product.reviews.length
        ratingElem.innerText = avg
    
        const categoryElem = document.querySelector("p")
        categoryElem.innerText = product.category
    
        detailBlock.append(titleElem, stockElem, priceElem, ratingElem, categoryElem)
    
        cardContainer.append(imgBlock, detailBlock)
        
    
})});
