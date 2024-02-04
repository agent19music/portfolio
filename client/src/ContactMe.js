import {React, useState} from 'react'
import Swal from 'sweetalert2';

export default function ContactMe({addFeedback}) {
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
