// написать функцию getTextContent которая возвращает текстовой контент html элемента, указатаель на которого получает в аргументах, если html элемент не существует то вернуть пустую строку.

// const getTextContent = (text) => {
    // try {
        // // let contElem = document.querySelector(text)
        // return contElem.innerText
    // } catch (error) {
        // return ""
    // }
// }
// 
// try {
    // // const usernameElem = document.querySelector(".test")
    // usernameElem.innerText = "John"
// } catch (error) {
    // console.log(error.message);
// } finally {
    // console.log("finally");
// }

// Создать функцию котоаря принимает в аргументах callback и вызивает эту функцию, если такой функции нет то в консоли вывести строку "Такой функции не существует"

function test() {
    console.log("test")
}
// callFn(test) // test
// callFn(greet) // "Такой функции не существует"
// 
const callFunction = (callback) => {
    try {
        callback()
    } catch (error) {
        console.log("Такой функции не существует");
    }
}
callFunction(test);
let greet = 1;
callFunction(greet);


function getTextContent2(elemSelector) {
    try {
        const htmlElem = document.querySelector(elemSelector)
        if(htmlElem === null) {
            // throw {
                // element: elemSelector,
                // // message: "Элемент не существует"
            // }
            throw new Error(`Элемент по указателю ${elemSelector} не существует`)
        }
        return htmlElem.innerText
    } catch (error) {
        console.log(error);
        return ""
    }
}
console.log(getTextContent2("#test"));
console.log(getTextContent2(".text"));

const getUserWithPostsByName = async (username, callback) => {
    try {
      let searchResponse = await fetch(`https://dummyjson.com/users/search?q=${username}`)
      if (!searchResponse.ok) {
        throw new Error(`Неуспешный ответ со статусом ${searchResponse.status}`)
      }
  
      let data = await searchResponse.json()
      if (data.users.length === 0) {
        throw new Error(`Пользователь по имени ${username} не найден`)
      }
  
      let user = data.users[0]
      let postsResponse = await fetch(`https://dummyjson.com/users/${user.id}/posts`)
      let postsObj = await postsResponse.json()
      let payload = {
        user: user,
        posts: postsObj.posts
      }
      callback(payload)
      return
    } catch (error) {
      console.log(error.message)
    }
  };
  
  getUserWithPostsByName('Test', (data) => {
    console.log(data)
  }); 