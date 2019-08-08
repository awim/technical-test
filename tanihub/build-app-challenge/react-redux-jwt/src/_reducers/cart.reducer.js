import Item1 from '../../assets/images/products/bitrut.jpg'
import Item2 from '../../assets/images/products/jagung.png'
import Item3 from '../../assets/images/products/jahe.jpg'
import Item4 from '../../assets/images/products/kol.png'
import Item5 from '../../assets/images/products/kubis.png'
import Item6 from '../../assets/images/products/paprika.png'
import { cartConstants } from '../_constants';

const initState = {
  items: [
      {id:1,title:'Manis', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
      {id:2,title:'Asam', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
      {id:3,title:'Asin', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
      {id:4,title:'Pedas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
      {id:5,title:'Pahit', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
      {id:6,title:'Sepat', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
  ],
  addedItems:[],
  total: 0
}

export function cart(state = initState, action) {
  let addedItem = state.items.find(item=> item.id === action.id)
  
  switch (action.type) {
    case cartConstants.ADD_TO_CART:      
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
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }

    case cartConstants.REMOVE_ITEM:      
      addedItem.quantity += 1 
      let newTotal = state.total + addedItem.price
      return{
          ...state,
          total: newTotal
      }
    
    case cartConstants.SUB_QUANTITY:       
      //if the qt == 0 then it should be removed
      if(addedItem.quantity === 1){
          let new_items = state.addedItems.filter(item=>item.id !== action.id)
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              addedItems: new_items,
              total: newTotal
          }
      } else {
          addedItem.quantity -= 1
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              total: newTotal
          }
      }
    
    case cartConstants.ADD_QUANTITY:
      return{
          ...state,
          total: state.total + 6
      }
    
    case cartConstants.ADD_SHIPPING:
      return{
          ...state,
          total: state.total - 6
      }
    
    default:
      return state
  }
}


