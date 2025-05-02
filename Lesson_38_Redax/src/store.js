// redux - monostore

import { configureStore } from "@reduxjs/toolkit"

 
const initialState = {
    count: 0,
  }
   
 // state = null
// action = {
// type: "increment",
// }
// reducer это функция, которая занимается изменением состояния на основе action -> получает действие и значение, потом возвращает новое состояние меняя его иммютабельно
// при первом открытии приложения state(предыдущее состояние) равен null
// чтобы не передавать null в reducer, мы передаем по умолчанию initialState
  const reducer = (state = initialState, action) => {
    if (action.type === "increment") {
      return {
        ...state,
        count: state.count + 1,
      }
    }
    // switch (action.type) {
    //   case "increment":
    //     return {
    //       ...state,
    //       count: state.count + 1,
    //     }
    //   default:
    //     return state
    // }
  }
   
  // const type = "greet"
  // if (type === "increment") {
  //   console.log(1 + 1)
  // }
  // if (type === "decrement") {
  //   console.log(1 - 1)
  // }
  // if (type === "greet") {
  //   console.log("hello world")
  // }
   
  // switch (type) {
  //   case "increment":
  //     console.log(1 + 1)
  //     break
  //   case "decrement":
  //     console.log(1 - 1)
  //     break
  //   case "greet":
  //     console.log("hello world")
  //     break
  //   default:
  //     console.log("default")
  // }

export const store = configureStore({
    reducer,
    })