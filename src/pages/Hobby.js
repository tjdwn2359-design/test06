import React from 'react'
import Hobby01 from './img/hobby01.png'
import Hobby02 from './img/hobby02.png'
import Hobby03 from './img/hobby03.png'
import Hobby04 from './img/hobby04.png'

export default function Hobby() {
  return (
    <div>
      <h1>taki STYLE</h1>
      <p>2026 taki Collection </p>

      <div className="lookbook_wrap">
        <div className="lookbook_item">
          <img src={Hobby01} alt="스타일1" />
          <p>Style 01</p>
        </div>

        <div className="lookbook_item">
          <img src={Hobby02} alt="스타일2" />
          <p>Style 02</p>
        </div>

        <div className="lookbook_item">
          <img src={Hobby03} alt="스타일3" />
          <p>Style 03</p>
        </div>

        <div className="lookbook_item">
          <img src={Hobby04} alt="스타일4" />
          <p>Style 04</p>
        </div>
      </div>
    </div>
  )
}
