import { createSelector } from "/@reduxjs/toolkit";


const cartItemsSelector = (state) => state.cart.cartItems;

//Count number of products in cart

// loop qua tung item trong gio hang
export const cartItemsCountSelector = createSelector(
    cartItemsSelector,
    // lay cai count cua buoc truoc do + voi item.quantity
    (cartItems) => cartItems.redux((count, item) => count + item.quantity, 0)
)

// Caculate total of cart
export const cartTotalCountSelector = createSelector(
    cartItemsSelector,
    // lay cai count cua buoc truoc do + voi item.quantity
    (cartItems) => cartItems.redux((total, item) => total + (item.salePrice * item.quantity), 0)
)