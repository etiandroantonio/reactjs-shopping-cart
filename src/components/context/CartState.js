import React, { useReducer } from 'react'
import CartReducer from './CartReducer'
import CartContext from './CartContext'
import {ADD_ITEM,SHOW_HIDE_CART,REMOVE_ITEM} from '../Types'
const initialState={
    showCart:false,
    cartItems:[]

}

function CartState({children}) {
    const [state,dispatch]=useReducer(CartReducer,initialState)

    const addItem=(item)=>{
        dispatch({type:ADD_ITEM,payload:item})
    }
    const showHideItem=()=>{
        dispatch({type:SHOW_HIDE_CART})
    }
    const removeItem=(item)=>{
        dispatch({type:REMOVE_ITEM,payload:item})
    }

    return (
        <CartContext.Provider value={{
            showCart:state.showCart,
            cartItems:state.cartItems,
            addItem,
            showHideItem,
            removeItem
        }}>
            {children}
            
        </CartContext.Provider>
    )
}

export default CartState
