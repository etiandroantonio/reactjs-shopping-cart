import React, { useContext} from 'react'
import './Navbar.css'
import CartContext from './context/CartContext'

function Navbar() {
   const {showHideItem,cartItems}=useContext(CartContext)
    
    return (
        <>
        <nav>
            <div className="navbar__container">

                <div className="nav-logo">
                    <span>Store</span>
                </div>

                <div className="nav-search">
                    <input type="text" placeholder="Pesquisa o teu produto aqui..." />
                    <button>
                    <i className='fa fa-search fa-lg' />  
                    </button>

                </div>

                <div className="cart-icon" onClick={showHideItem} >
                <i className="fa fa-shopping-cart"/>
                {cartItems.length > 0 && (
                <span className="cart-total">{cartItems.length}</span>
                )}
                
                </div>

                 
            </div>
        </nav>
            
        </>
    )
}

export default Navbar
