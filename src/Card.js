import React from 'react'

function Card({product,addToCart,cartItems}) {
  return (
   
    <div className='col-lg-4 border mt-2 py-3'>
    <div className='row'>
    <div className='col-lg-12'>
    <img className="img-fluid" src={product.img}></img>
    </div>
    <div className='col-lg-12'>
     <h4>{product.name}</h4>
     <h6>price:Rs{product.price}</h6>
     <button disabled={cartItems.some(obj => obj.id === product.id)} onClick={()=>addToCart(product)}
     className="btn btn-sm btn-primary"> 
     
     {
     cartItems.some(obj => obj.id === product.id) ? "Added to cart" : "Add to cart"
     } 
     
     </button>
    </div>
    </div>
    </div>

  )
}

export default Card