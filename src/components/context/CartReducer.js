import {ADD_ITEM,SHOW_HIDE_CART,REMOVE_ITEM} from '../Types'
const  CartReducer=(state,action)=>{
    switch (action.type) {
        case SHOW_HIDE_CART:{
            return {...state,
            showCart:!state.showCart
             }

        }
        case ADD_ITEM:{
            return {
                ...state,
                cartItems:[...state.cartItems, action.payload ]
            }
        }

        case REMOVE_ITEM:{
            return {...state,
            cartItems:state.cartItems.filter((item)=>item._id !== action.payload )
            }
        }
        
        default:
            break;
    }

}
export default CartReducer;