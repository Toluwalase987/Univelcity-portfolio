import { useState } from "react";
import './css/Contacts.css'
import twitter from '../images/twitter.png'
import gmail from '../images/gmail.png'
import linkedin from '../images/linkedin.svg'

export default function Contacts({contactRef}) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  console.log(formData);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="contacts" ref={contactRef} id="contact">
      <h3>Contact me</h3>
      <p>Fill this form to get in contact with me</p>
      <form action="https://getform.io/f/8f084161-5c68-4131-a54b-7512873359e4" method="POST" className="form">
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange} 
          required
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your message"   
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button>Submit</button>
      </form>
      <div className="options">
        <h4>OR</h4>
        <div className="sm-icons">
            <a href="https://twitter.com/herr_tolu?s=21&t=EUkvX5RP-YT4nv_qW85k_Q" target="_blank"><img src={twitter} alt="" /></a>
            <a allow-intent href="mailto:toluwalase987@gmail.com" target="_blank"><img src={gmail} alt="" /></a>
            <a href="https://www.linkedin.com/in/toluwalase-kunle-john-882296160/" target="_blank"><img src={linkedin} alt="" /></a>
        </div>
      </div>
    </div>
  );
}
