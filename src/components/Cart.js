import React, { useContext } from 'react'
import  './Cart.css'
import CartContext from './context/CartContext'
import CartItem from './CartItem'
function Cart() {
    const {showCart,cartItems}=useContext(CartContext)
    const Carthype=()=>{
         let hype=0;
         for (let i = 0; i < cartItems.length; i++) {
             hype=cartItems[i] + hype;
             
         }
         return hype;
     }
    return (
        <>
        {showCart && (
            <div className="cartItem">
                <div className="cart__container">

                
                {cartItems.length === 0 ?(<div>carrrinho vazio</div>):(
                    <div>
                        {cartItems.map((item)=> ( <CartItem key={item._id}  item={item} /> ))}
                    </div>
                )
                
                }
                        <hr className="bar" />
                        <h3>Total: 
                            
                        <span> €{cartItems.reduce((amount,item)=>item.price.toFixed(0 ) + amount ,0)}</span>
                        </h3>
                
                </div>   
            </div>
                

        )}
        </>
        )
}

export default Cart
