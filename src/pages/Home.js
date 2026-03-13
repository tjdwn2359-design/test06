import React from 'react'

import visual from './img/visual_banner.jpg';

export default function Home() {
  return (
    <div>
      <h1>Welcome taki!</h1>
      <div className='visual_main'>
        <img src={visual} alt="비주얼 메인" />
      </div>
    </div>
  )
}
