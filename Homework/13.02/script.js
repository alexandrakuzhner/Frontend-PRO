const letProductByID = (id, callback) => {
    fetch(`https://dummyjson.com/products/${id}`)
     .then((res) => res.json())
     .then((data) => callback(data))
     .catch((error) => console.log(error));
}

const inputID = document.querySelector("#inputID");
const showBtn = document.querySelector("#showBtn");
showBtn.addEventListener('click', () => {
    let idValue = inputID.value
    letProductByID(idValue);
})