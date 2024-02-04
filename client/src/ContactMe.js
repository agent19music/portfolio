import {React, useState} from 'react'
import Swal from 'sweetalert2';

export default function ContactMe({addFeedback,toggle3}) {
    const [feedback, setFeedback] = useState('')
    const [email, setEmail] = useState('')

    const submitfeedback = (event) => {
        event.preventDefault();
        addFeedback({ email, feedback });
        setEmail('');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Feedback sent successfully",
          showConfirmButton: false,
          timer: 900
        });
  
      };
  return (
    <div className="container mt-5">
      <h4>CONTACT ME</h4>

      <div className="">
        <form onSubmit={submitfeedback}>
          <div className="mb-3">
            <label className={`form-label text-${toggle3}`}>Email</label>
            <input
              type="email"
              value={''}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className={`form-label text-${toggle3}`}>Message</label>
            <textarea
              type="text"
              value=''
              onChange={(e) => setFeedback(e.target.value)}
              className="form-control h-200"
              required
            />
          </div>
         
         
        </form>
      </div>
    </div>
  )
}
