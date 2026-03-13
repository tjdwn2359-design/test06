import React from 'react'
import products from '../data/products'

export default function Shop({ addToCart }) {

  return (
    <div>

      <h1>SHOP</h1>

      <div className="product_wrap">

        {products.map((item) => (

          <div className="product_card" key={item.id}>

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>{item.price}원</p>

            <button onClick={() => addToCart(item)}>
              장바구니 담기
            </button>

          </div>

        ))}

      </div>

    </div>
  )
}  