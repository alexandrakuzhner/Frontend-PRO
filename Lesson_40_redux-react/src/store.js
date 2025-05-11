// redux - monostore
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
  count: 0,
}

// state = null
// action = {
//   type: "increment",
// }
// reducer это функция, которая занимается изменением состояния на основе action -> получает действие и значение, потом возвращает новое состояние меняя его иммютабельно
// при первом открытии приложения state(предыдущее состояние) равен null
// чтобы не передавать null в reducer, мы передаем по умолчанию initialState
//const reducer = (state = initialState, action) => {
  // if (action.type === "increment") {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   }
  // }
  
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         count: state.count + 1,
//       }
//     case "decrement":
//       return {
//         ...state,
//         count: state.count - 1,
//       }
//     case "greet":
//       console.log(action);

//       console.log(`Hello, ${action.payload}`);
//       return state
      
//     default:
//       return state
//};

const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase("increment", (state) => {
    state.count += 1
  })
  .addCase("decrement", (state) => {
    state.count -= 1
  })
  .addCase("greet", (state, action) => {
    console.log(action);

    console.log(`Hello, ${action.payload}`);
    return state
  
  })
})

export const IncrementAction = createAction("increment");
export const DecrementAction = createAction("decrement");
export const GreetAction = createAction("greet");

export const store = configureStore({
  reducer,
});
