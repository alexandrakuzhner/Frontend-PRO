console.log("Страница открыта");

console.log("Отправка запроса на сервере для получения каких-то данных");
setTimeout(() => {
    console.log("Ответ от сервера получен");
}, 3000)

console.log("Продолжаем проверку страницы");

// event loop ПОЧИТАТЬ!!

// ================== PROMISE =======================

// pending - момент создания Promise
// fulfilled - статус когда все прошло успешно -> (вызывается resolved => первый параметр колбек функции)
// rejected - статус когда все прошло неуспешно -> (вызывается rejected => второй параметр колбек функции)

// then - запускается когда статус fulfilled (была вызвана resolved)
// catch - запускается когда статус rejected (была вызвана rejected)
// finally - запускается всегда в любом случае в самом конце

new Promise((resolved, rejected) => {
    let a = 5
    if(a % 2 === 0) {
        resolved(a)
    } else {
        rejected("ЧИсло нечетное")
    }
}).then((data) => {
    console.log(data);   
}).catch((message) => {
    console.log(message);
})



function sendRequest(address) {
    let ps = new Promise(function (resolved, rejected) {
    let responses = {
    productSellerID: 1256,
    sellerEmail: "john_doe@gmail.com",
    successMessage: "Сообщение успешно отправлено"
    }
    console.log(`Send request to ${address}`)
    setTimeout(function () {
    resolved(responses)
    }, 2000)
    })
    return ps
    }

    console.log(1);
    
// let produciId = 10
// sendRequest(`/get/product/${produciId}/seller/`)
//   .then(({productSellerID}) => {
    // let addressForGetEmail = `/get/seller/email${productSellerID}`
    // return sendRequest(addressForGetEmail)
//   })
//   .then(({sellerEmail}) => {
    // let messageToEmailAddress = `/send/email/${sellerEmail}`
    // return sendRequest(messageToEmailAddress)
//   })
//   .then(({successMessage}) => {
    // console.log(successMessage);
//   })
//   .catch((errorMessage) => {
    // console.log("Catch", errorMessage);
//   })
//   console.log(2);


fetch("https://dummyjson.com/products")
  .then(function (response) {
    // response.json() возвращает Promise и парсит тело ответа запроса из JSON в js object
    // let data = response.json() // (JSON.parse(...))
    return response.json()
  })
  .then(function (data) {
    console.log(data)
}) 
  