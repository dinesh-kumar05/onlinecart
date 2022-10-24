import React from "react";

function Cart({ cartItems, removeFromCart,product }) {
  return (
    <>
      {cartItems.length === 0 ? (
        <div>No items in cart</div>
      ) : (
        <>
          <ol className="list-group list-group-numbered">
            {cartItems.map((items) => {
              return (
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{items.name}</div>Rs:{items.price}
                  </div>
                  
                  <button onClick className="value-button">-</button>
                  <button onClick className="value-button">0</button>
                  <button onClick className="value-button">+</button>
                  
                  <button onClick={() => {
                      removeFromCart(items);
                    }}
                    className="badge bg-danger -pill"
                  >
                    ×
                  </button>
                
                </li>
              );
            })}
          </ol>
          <h3>
            Total:price Rs.
            {cartItems.reduce((previous, current) => {
              return (previous = previous + current.price);
            }, 0)}
          </h3>
        </>
      )}
    </>
  );
}

export default Cart;
