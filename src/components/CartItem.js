import React,{useContext} from 'react'
import './CartItem.css'
import CartContext from './context/CartContext'

function CartItem({item}) {
    const {removeItem}=useContext(CartContext)
    return (
        <>
        <div className="cartItem__wrapper">
                <img className="cart-image" src={item.image} alt={item.name} />
                <p className="cart-name">{item.name}</p>
                <button className="cart-delete" onClick={()=>removeItem(item._id)}>apagar</button>
            
        </div>

        </>
    )
}

export default CartItem
