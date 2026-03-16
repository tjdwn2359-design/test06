import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: ''}) 
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <h1>CONTACT</h1>
      <p>아래 양식에 맞춰 문의 주십시오.</p>

      {submitted ? (
        <p>문의가 접수되었습니다. 감사합니다!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{width: '400px', margin: '0 auto'}}>
            <label>이름</label>
            <input className='form-control' name="name" value={form.name} onChange={handleChange} placeholder="이름을 입력하세요" />
          </div>
          <div style={{width: '400px', margin: '0 auto'}}>
            <label>이메일</label>
            <input className='form-control' name="email" value={form.email} onChange={handleChange} placeholder="이메일을 입력하세요" />
          </div>
          <div style={{width: '400px', margin: '20px auto'}}>
            <label>문의내용</label>
            <textarea className='form-control' name="message" value={form.message} onChange={handleChange} placeholder="문의 내용을 입력하세요" />
          </div>
          <button className='btn btn-dark' type="submit">문의하기</button>
        </form>
      )}

      <h3>고객센터 안내</h3>
      <p>운영시간 : 09:00 ~ 18:00</p>
      <p>이메일 : taki@taki.com</p>
      <p></p>
    </div>
  )
}
