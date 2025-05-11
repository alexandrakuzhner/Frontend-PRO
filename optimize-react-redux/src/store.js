import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// 1. Создать начальное состояние в виде такого объекта
const initialState = {
    products: [],
    stats: {
        totalProducts: 0,
        totalBeforeDiscount: 0,
        totalDiscounts: 0,
        finalTotal: 0,
        averagePrice: 0
    },
};
// 2. Создать экшены для увеличения и уменьшения количества товара
// Для увеличения и уменьшения цены товара
// Для сортировки
// Для инициализации продуктов
export const incrementAmount = createAction("incrementAmount");
export const IncrementPrice = createAction("incrementPrice");
export const DecrementPrice = createAction("decrementPrice");
export const SortAction = createAction("sortProducts");
export const InitialProducts = createAction("initialProducts");



// 3. Создать редюсер, который будет обрабатывать эти экшены и обновлять состояние используя createReducer
const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementAmount, (state, action) => {
            state.products.forEach(product => {
                if (product.id === action.payload.id) {
                    product.quantity + action.payload.amount
                }
            });

        })
        .addCase(IncrementPrice, (state, action) => {

            // state.products.map(product =>
            //     product.id === action.payload.id ?
            //       { ...state, price: Math.max(1, product.price + action.payload.amount) } :
            //       product
            //   )

            state.products.forEach((product) => {
                if (product.id === action.payload.id) {
                    product.price += action.payload.amount
                }
            })
        })
        .addCase(SortAction, (state, action) => {
            switch (action.payload.criteria) {
                case 'name':
                    state.products.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'price':
                    state.products.sort((a, b) => a.price - b.price);
                    break;
                case 'quantity':
                    state.products.sort((a, b) => a.quantity - b.quantity);
                    break;
                default:
                    break;
            }
        })
        .addCase(InitialProducts, (state, action) => {
            state.products = action.payload.products;
        })


});

export const store = configureStore({
    reducer
});

// 4. Создать store и подключить его к приложению
// 5. В main.jsx обернуть приложение в Provider и передать store