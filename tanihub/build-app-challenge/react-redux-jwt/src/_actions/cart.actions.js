import { cartContants } from '../_constants/cart.constants'

export const cartActions = {
    addToCart,
    removeItem,
    subtractQuantity,
    addQuantity
};


//add cart action
function addToCart(id){
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
function removeItem(id){
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
function subtractQuantity(id){
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
function addQuantity(id){
    return{
        type: ADD_QUANTITY,
        id
    }
}