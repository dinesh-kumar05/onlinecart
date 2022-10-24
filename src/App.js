import logo from './logo.svg';
import './App.css';
import Header from './header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Cart from './Cart';
import Card from './Card';
import { useState } from 'react';


function App() {
  const products=[
    {
      id:1,
      name:'Apple iPhone 14',
      price: 35000,
      img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703416/Croma%20Assets/Communication/Mobiles/Images/261991_hhfa33.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto",
    },
    {
      id:2,
      name:'Apple Watch',
      price:25000,
      img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662704750/Croma%20Assets/Wearable/Wearable%20Devices/Images/262052_wdm3em.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto",
    },
    {
      id:3,
      name:'Apple MacBook air m1',
      price:65000,
      img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664423228/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_5_jagzvd.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto",
    },
    {
      id:4,
      name:'Apple AirPods',
      price:15000,
      img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662633841/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/262015_vztfoq.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto",
    },
    {
      id:5,
      name:'Apple EarPods',
      price:5000,
      img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664411705/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/199716_0_wn8v1o.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto",
    },
    {
      id:6,
      name:'Apple iPhone SE',
      price:15000,
      img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664008747/Croma%20Assets/Communication/Mobiles/Images/249855_0_i3n1zu.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto",
     },

  ]
  const[cartItems,setCartItems]=useState([])

  let addToCart = (product) => {
   setCartItems([...cartItems,product])}

   let removeFromCart = (product) => {
    const indexvalue = cartItems.findIndex(obj => obj.id === product.id)
    cartItems.splice(indexvalue,1);
    setCartItems([...cartItems])

   }
  

  return (
    <>
    <Header></Header>
     <div className='container'>
     <div className='row'>
     <div className='col-lg-8'>
        <div className='row'>
       
           
     {
      products.map((product)=>{
        return <Card product={product} addToCart={addToCart} cartItems={cartItems} ></Card>

      })
}

</div>
      </div>
<div className='col-lg-4'>
  <h3>Cart</h3>
     <Cart cartItems={cartItems} removeFromCart={removeFromCart}></Cart>
     
    </div>
    </div>
      </div>
      </>
  );
}

export default App;
