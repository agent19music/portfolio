import {React, useState} from 'react'

export default function ContactMe() {
    const [feedback, setFeedback] = useState('')
    const [email, setEmail] = useState('')
  return (
    <div className="container mt-5">
      <h4>CONTACT ME</h4>

      <div className="">
        <form onSubmit={submitfeedback}>
          <div className="mb-3">
            <label className="form-label text-white">Email</label>
            <input
              type="email"
              value={''}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Message</label>
            <textarea
              type="text"
              value=''
              onChange={(e) => setFeedback(e.target.value)}
              className="form-control"
              required
            />
          </div>
         
         
        </form>
      </div>
    </div>
  )
}
