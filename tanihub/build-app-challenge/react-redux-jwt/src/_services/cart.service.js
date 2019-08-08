import config from 'config';
import { authHeader } from '../_helpers';

export const cartService = {
    addToCart,
    removeItem,
    addQuantity,
    substractQuantity
};

function addToCart() {
    let addedItem = state.items.find(item=> item.id === action.id)
    //check if the action id exists in the addedItems
    let existed_item= state.addedItems.find(item=> action.id === item.id)
    if(existed_item) {
        addedItem.quantity += 1 
        return{
            ...state,
            total: state.total + addedItem.price 
                }
    } else {
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = state.total + addedItem.price 
        
        return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total : newTotal
        }        
    }
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}