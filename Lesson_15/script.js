// создать функцию (getUserWithPostsByName(username, callback)) которая в себе принимает два параметра, первый это имя пользователья, второй параметр callback функция которая вызывается на ответе. функция (getUserWithPostsByName) отправляет запрос по адресу (https://dummyjson.com/users/search?q=${username}), оттуда забирает первого пользователья и просто выводит в консоли данные пользователья внутри callback функции 

// const getUserWithPostsByName = (username, callback) => {
    // fetch(`https://dummyjson.com/users/search?q=${username}`)
    //  .then((response) => response.json())
    //  .then((data) => {
        // if (data.users.length !== 0) {
            // callback(data.users[0])
        // } else {
            // alert("Tut pusto" + username)
        // }
    //  })
// }
// 
// getUserWithPostsByName("Johnee", (data) => {
    // console.log(data)});

// Передавать внутрь callback данные в виде такого объекта и выводить в консоли отдельно posts и отдельно user 
// {
// user: data,// объект пользователья 
// posts: []
// }

// const getUserWithPostsByName1 = (username, callback) => {
    // fetch(`https://dummyjson.com/users/search?q=${username}`)
    //  .then((response) => response.json())
    //  .then((data) => {
        // if (data.users.length !== 0) {
            // let payload = {
                // user: data.users[0],
                // posts: []
            // }
            // callback(payload)
        // } else {
            // alert("Пользователя" + username + "не существует")
        // }
    //  })
// }
// 
// getUserWithPostsByName1("John", (data) => {
    // console.log(data);
// })

const getUserWithPostsByName2 = async (username, callback) => {
    // fetch(`https://dummyjson.com/users/search?q=${username}`)
    //  .then((response) => response.json())
    //  .then((data) => {
        // if (data.users.length !== 0) {
            // let user = data.users[0]
            // fetch(`https://dummyjson.com/users/${user.id}/posts`)
            //   .then((res) => res.json())
            //   .then(postsObj => {
                // let payload = {
                //  user: user,
                //  posts: postsObj.posts
                // }
                // callback(payload)
            //   })
        // } else {
            // alert("Пользователя" + username + "не существует")
        // }
    //  })
    let searchResponse = await fetch(`https://dummyjson.com/users/search?q=${username}`)
    let data = await searchResponse.json()
    if(data.users.length !== 0) {
        let user = data.users[0]
        let postsResponse = await fetch(`https://dummyjson.com/users/${user.id}/posts`)
        let postsObj = await postsResponse.json()
        let playload = {
            user: user,
            posts: postsObj.posts
        }
        callback(playload)
        return
    }
    alert("Пользователя" + username + "не существует")
}

getUserWithPostsByName2("Doe", (data) => {
    console.log(data);
})