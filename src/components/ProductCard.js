import React, { useContext } from 'react'
import Data from '../Data'
import './ProductCard.css'
import CartContext from './context/CartContext'
//import Cart from './Cart'

function ProductCard() {
    const {addItem}=useContext(CartContext);
    return (
        <>
         <main className='card'>
             <div className="card__container">
                 <div className="card-wrapper">  
                 {Data.map((data)=>(
                 <div key={data._id} className="card-t">
                     <img src={data.image} alt={data.name} />
                     <div className="card-body">
                         <h1 className="card-title">{data.name}</h1>
                         <span className="card-price">€
                             {data.price}
                         </span><br />
                         <button className="card-add" onClick={()=> addItem(data)}>
                             Adicionar ao Carrinho
                         </button>
                     </div>
                 </div>
                 )
                 
                 )}
                 </div> 
                 
             </div>


           
         </main> 
        </>
    )
}

export default ProductCard
