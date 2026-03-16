import React from 'react'

export default function Cart({
  cart,
  increaseQty,
  decreaseQty,
  removeItem
}) {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  return (
    <div>

      <h1>CART</h1>

      {cart.length === 0 && <p>상품이 없습니다.</p>}

      {cart.map((item) => (

        <div className="cart_item" key={item.id}>

          <h3>{item.name}</h3>

          <p>{item.price}원</p>

          <div className="qty_box">

            <button className='btn btn-outline-secondary' onClick={() => decreaseQty(item.id)}>
              -
            </button>

            <span>{item.qty}</span>

            <button className='btn btn-outline-secondary' onClick={() => increaseQty(item.id)}>
              +
            </button>

          </div>

          <p>상품 합계 : {item.price * item.qty}원</p>

          <button
            className="btn btn-danger"
            onClick={() => removeItem(item.id)}
          >
            삭제
          </button>

        </div>

      ))}

      <hr />

      <h2>총 가격 : {total}원</h2>

    </div>
  )
}