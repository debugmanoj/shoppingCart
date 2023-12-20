import React, { useState } from 'react';

function Card({ cart, setCart, data }) {
  const [add, setAdd] = useState("Add to Cart");

  const handleClick = () => {
    {add==="Remove from Cart"?setCart(cart -1):setCart(cart+1)}
    setAdd(add === "Add to Cart" ? "Remove from Cart" : "Add to Cart");
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        
        <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{data.title}</h5>
            <span className="text-muted text-decoration-line-through">{data.priceStrike}</span>
            {data.orgPrice}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button className="btn btn-outline-dark mt-auto" onClick={handleClick}>
              {add}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
